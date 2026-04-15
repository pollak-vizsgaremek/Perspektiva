import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { prisma } from "../index.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { username: user.name, email: user.email, admin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        algorithm: "HS512",
        subject: user.id,
      },
    );

    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.log(error);

    res.status(401).json({ message: "Login failed", error: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, password2, ispublicist } = req.body;

    if (!name || !email || !password || !password2) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== password2) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    if (ispublicist) {
      const Publicist = await prisma.publicist.create({
        data: {
          name,
          user_id: user.id,
        },
      });
    }
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "User registration failed", error: error.message });
  }
});

router.get("/admin", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const admin = await prisma.user.findUnique({
      where: {
        id: userId,
        deleted: false,
      },
    });

    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!admin.isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }

    const users = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });

    const portals = await prisma.mediums.findMany();
    const articlecount = await prisma.article.count();

    res.status(200).json({ users, portals, articlecount });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to fetch admin data", error: error.message });
  }
});

router.put("/changes", authMiddleware, async (req, res) => {
  try {
    const { updatedemail, password } = req.body;
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateData = {};

    if (updatedemail) {
      updateData.email = updatedemail;
    }

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: "At least one field (email or password) must be provided",
      });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: updateData,
      omit: {
        password: true,
      },
    });

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
});

router.post("/userDelete", authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        deleted: true,
      },
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
});

router.delete("/applicantDelete", authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId;
    const publicist = await prisma.publicist.findFirst({
      where: {
        user_id: userId,
      },
    });
    if (!publicist) {
      return res.status(404).json({ message: "User not found" });
    }

    await prisma.publicist.update({
      where: {
        id: publicist.id,
      },
      data: {
        accepted: false,
      },
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
});

export default router;