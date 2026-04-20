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

app.get("/api/user", async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).json(user);
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

    if (!existingArticle.publicist || existingArticle.publicist.user_id !== req.user.id) {
      return res.status(403).json({ message: "Nem te hoztad létre ezt a cikket" });
    }

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "At least one field to update is required" });
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

    if (!existingArticle.publicist || existingArticle.publicist.user_id !== req.user.id) {
      return res.status(403).json({ message: "Nem te hoztad létre ezt a cikket" });
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

    const { title, content } = req.body;
    const newArticle = await prisma.article.create({
      data: {
        publicistId: user.publicist.id,
        title,
        content: content || "",
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
