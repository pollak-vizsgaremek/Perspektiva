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
          name: {
            in: priorities,
          },
        },
      },
      include: {
        publicist: true,
      },
    });

    res.status(200).json(articles);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen szűrés!", error: error.message });
  }
});

app.get("/api/articles", async (req, res) => {
  try {
    const articles = await prisma.article.findMany();
    res.status(200).json(articles);
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

app.put("/api/articles", async (req, res) => {
  try {
    const { Article_id, publicistId, title } = req.body;
    const updatearticle = await prisma.article.update({
      where: {
        id: Article_id,
      },
      data: {
        publicistId,
        title,
      },
    });
    res.status(201).json(updatearticle);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Sikertelen frissítés!", error: error.message });
  }
});

app.delete("/api/articles", async (req, res) => {
  try {
    const { Article_id } = req.body;
    const deletearticle = await prisma.article.delete({
      where: {
        id: Article_id,
      },
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
