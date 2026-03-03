import e from "express";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/index.js";
import cors from "cors";

const app = e();
app.use(e.json());

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

const prisma = new PrismaClient();

app.get("/api/priorities", async (req, res) => {
  try {
    const priorities = req.body.priorities;
    const Filtereltpriorities = await prisma.article.findMany({
      select: {
        where: {
          publisher: priorities,
        },
      },
    });

    res.status(200).json(Filtereltpriorities);
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

app.listen(3300, () => {
  console.log("Backend fut port: 3300");
});
