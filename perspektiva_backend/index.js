import e from "express";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/index.js";
import cors from "cors";

import authController from "./controllers/auth.controller.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

const app = e();
app.use(e.json());

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use("/api/v1/auth", authController);

const prisma = new PrismaClient();

app.get("/api/user/me", authMiddleware, async (req, res) => {
  const user_id = req.user.id;

  const favourites = await prisma.user.findUnique({
    where: {
      id: user_id,
    },
    include: {
      favourites: {
        include: {
          article: true,
        },
      },
    },
    include: {
      publicist: true,
    },
  });

  res.status(200).json(favourites);
});

app.get("/api/priorities", async (req, res) => {
  try {
    const priorities = req.body.priorities;
    if (!priorities || !Array.isArray(priorities) || priorities.length === 0) {
      return res.status(404).json({
        message: "Prioritások szükségesek!",
        error: "No priorities provided",
      });
    }
    const articles = await prisma.article.findMany({
      where: {
        publicist: {
          mediums: {
            name: {
              in: priorities,
            },
          },
          NOT: {
            accepted: false,
          },
        },
      },
      include: {
        publicist: true,
      },
    });

    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "Sikertelen szűrés!", error: error.message });
  }
});

// user: {
//             mediums: {
//               some: {
//                 name: {
//                   in: priorities,
//                 },
//               },
//             },
//           },

app.get("/api/articles", async (req, res) => {
  try {
    const articles = await prisma.article.findMany({
      include: {
        publicist: {
          include: {
            mediums: true,
          },
        },
      },
    });
    console.log("Fetched articles:", articles);
    res.status(200).json(articles);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen lekérdezés!", error: error.message });
  }
});

app.get("/api/mediums", async (req, res) => {
  try {
    const mediums = await prisma.mediums.findMany();
    res.status(200).json(mediums);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen lekérdezés!", error: error.message });
  }
});

app.get("/api/mediums/rss", async (req, res) => {
  try {
    const mediums = await prisma.mediums.findMany();

    const stripHtml = (text) =>
      text
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const extractTag = (xmlText, tag) => {
      const regex = new RegExp(
        `<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`,
        "i",
      );
      const match = xmlText.match(regex);
      return match ? (match[1] || match[2] || "").trim() : "";
    };

    const extractAttribute = (xmlText, tag, attribute) => {
      const regex = new RegExp(
        `<${tag}[^>]*${attribute}=["']([^"']+)["'][^>]*>`,
        "i",
      );
      const match = xmlText.match(regex);
      return match ? match[1].trim() : "";
    };

    const extractImage = (xmlText) => {
      return (
        extractAttribute(xmlText, "enclosure", "url") ||
        extractAttribute(xmlText, "media:content", "url") ||
        extractAttribute(xmlText, "img", "src") ||
        xmlText.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] ||
        ""
      );
    };

    const parseRssItems = (xml, medium) => {
      const itemMatches = Array.from(
        xml.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/gi),
      );
      if (itemMatches.length === 0) {
        itemMatches.push(
          ...Array.from(xml.matchAll(/<entry[^>]*>([\s\S]*?)<\/entry>/gi)),
        );
      }

      return itemMatches.slice(0, 3).map((match, index) => {
        const itemXml = match[1];
        const title = extractTag(itemXml, "title") || medium.name;
        const description =
          extractTag(itemXml, "description") ||
          extractTag(itemXml, "summary") ||
          extractTag(itemXml, "content:encoded") ||
          "";
        const link =
          extractTag(itemXml, "link") ||
          extractAttribute(itemXml, "link", "href") ||
          medium.url ||
          medium.rss_url;
        const author =
          extractTag(itemXml, "author") ||
          extractTag(itemXml, "dc:creator") ||
          "Ismeretlen szerző";
        const category = extractTag(itemXml, "category") || medium.name;
        const image = extractImage(itemXml) || "";

        return {
          id: `rss-${medium.id}-${index}`,
          title,
          content: stripHtml(description).slice(0, 220),
          link,
          source: medium.name,
          category,
          author,
          image,
          rss: true,
        };
      });
    };

    const rssItems = [];
    await Promise.all(
      mediums.map(async (medium) => {
        const urlsToTry = [medium.url, medium.rss_url].filter(Boolean);
        let fetched = false;

        for (const url of urlsToTry) {
          try {
            const rssResponse = await fetch(url, {
              headers: {
                "User-Agent": "Perspektiva-RSS-Parser/1.0",
              },
            });
            if (!rssResponse.ok) continue;
            const xml = await rssResponse.text();
            const parsed = parseRssItems(xml, medium);
            if (parsed.length > 0) {
              rssItems.push(...parsed);
              fetched = true;
              break;
            }
          } catch (err) {
            console.error(`RSS fetch failed for ${url}:`, err.message);
          }
        }

        if (!fetched) {
          console.warn(
            `No RSS items parsed for medium ${medium.name} (${medium.id})`,
          );
        }
      }),
    );

    res.status(200).json(rssItems);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen RSS lekérdezés!", error: error.message });
  }
});

app.get("/api/tags", async (req, res) => {
  try {
    const tags = await prisma.article.findMany();
    console.log("Fetched tags:", tags);
    res.status(200).json(tags);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "Sikertelen címke lekérdezés!", error: error.message });
  }
});

app.get("/api/favourites", authMiddleware, async (req, res) => {
  try {
    const favourites = await prisma.favourites.findMany({
      where: {
        user_id: req.user.id,
      },
      include: {
        article: {
          include: {
            publicist: true,
          },
        },
      },
    });
    res.status(200).json(favourites);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen lekérdezés!", error: error.message });
  }
});

app.put("/api/articles", authMiddleware, async (req, res) => {
  try {
    const { Article_id, title, content } = req.body;
    if (!Article_id) {
      return res.status(400).json({ message: "Article_id is required" });
    }

    const existingArticle = await prisma.article.findUnique({
      where: { id: Article_id },
      include: { publicist: true },
    });

    if (!existingArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    if (
      !existingArticle.publicist ||
      existingArticle.publicist.user_id !== req.user.id
    ) {
      return res
        .status(403)
        .json({ message: "Nem te hoztad létre ezt a cikket" });
    }

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;

    if (Object.keys(updateData).length === 0) {
      return res
        .status(400)
        .json({ message: "At least one field to update is required" });
    }

    const updatearticle = await prisma.article.update({
      where: { id: Article_id },
      data: updateData,
    });

    res.status(200).json(updatearticle);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen frissítés!", error: error.message });
  }
});

app.delete("/api/articles", authMiddleware, async (req, res) => {
  try {
    const { Article_id } = req.body;
    if (!Article_id) {
      return res.status(400).json({ message: "Article_id is required" });
    }

    const existingArticle = await prisma.article.findUnique({
      where: { id: Article_id },
      include: { publicist: true },
    });

    if (!existingArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    if (
      !existingArticle.publicist ||
      existingArticle.publicist.user_id !== req.user.id
    ) {
      return res
        .status(403)
        .json({ message: "Nem te hoztad létre ezt a cikket" });
    }

    await prisma.article.delete({
      where: { id: Article_id },
    });
    res.status(204).send();
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen törlés!", error: error.message });
  }
});

app.post("/api/articles", authMiddleware, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        publicist: true,
      },
    });

    if (!user.publicist.accepted)
      return res
        .status(403)
        .json({ message: "Nem vagy jogosult cikk létrehozására!" });

    const { title, content, tags, image } = req.body;
    console.log(content.toString());
    console.log(content.toString());
    console.log(content);
    const newArticle = await prisma.article.create({
      data: {
        publicistId: user.publicist.id,
        title,
        content: content.toString() || "",
        tag: tags || "",
        image_base64: image || "",
      },
    });
    res.status(201).json(newArticle);
  } catch (error) {
    console.log(error);

    res
      .status(404)
      .json({ message: "Sikertelen létrehozás!", error: error.message });
  }
});

if (process.env.NODE_ENV !== "test") {
  app.listen(3300, () => {
    console.log("Backend fut port: 3300");
  });
}

export default app;
export { prisma };
