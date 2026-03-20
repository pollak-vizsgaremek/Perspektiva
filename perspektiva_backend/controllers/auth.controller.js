import { Router } from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "../generated/prisma/index.js";
const router = Router();
const prisma = new PrismaClient();

router.get("/login", async (req, res) => {
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

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(401).json({ message: "Login failed", error: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, password2, fullname } = req.body;

    if (!username || !email || !password || !password2 || !fullname) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== password2) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        fullname,
      },
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "User registration failed", error: error.message });
  }
});

export default router;
