import app, { prisma } from "../index.js";
import request from "supertest";
import 'dotenv/config';
import bcrypt from "bcrypt";

describe("API Endpoints Tests", () => {
  let token;

  beforeAll(async () => {
    // Create a test user
    const hashedPassword = await bcrypt.hash("testpassword", 10);
    
    // Delete existing test data to avoid race conditions
    await prisma.user.deleteMany({
      where: { email: "test@example.com" }
    });
    await prisma.article.deleteMany({});
    await prisma.publicist.deleteMany({});
    
    // Create test publicist
    await prisma.publicist.create({
      data: {
        id: 1,
        name: "Index",
        accepted: true,
      },
    }).catch(() => {}); // Ignore if id 1 already exists
    
    // Create test interest
    await prisma.interest.create({
      data: {
        id: 1,
        name: "Technology",
      },
    }).catch(() => {});
    
    // Create test article
    await prisma.article.create({
      data: {
        id: 1,
        title: "Test Article",
        content: "Test content",
        publicistId: 1,
      },
    }).catch(() => {});
    
    await prisma.user.create({
      data: {
        email: "test@example.com",
        password: hashedPassword,
        name: "Test User",
      },
    });

    // Login to get token for authenticated tests
    const loginResponse = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "test@example.com",
        password: "testpassword",
      });
    if (loginResponse.status === 200) {
      token = loginResponse.body.token;
    }
  });

  afterAll(async () => {
    await prisma.user.deleteMany({
      where: {
        email: "test@example.com",
      },
    });
    await prisma.$disconnect();
  });

  describe("GET /api/user/me", () => {
    test("should return user data with favourites when authenticated", async () => {
      const response = await request(app)
        .get("/api/user/me")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("favourites");
    });

    test("should return 401 if not authenticated", async () => {
      await request(app).get("/api/user/me").expect(401);
    });
  });

  describe("GET /api/priorities", () => {
    test("should filter articles by priorities", async () => {
      const response = await request(app)
        .get("/api/priorities")
        .send({ priorities: ["Index", "HVG"] }) // Assuming these are publicist names
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });

    test("should handle errors", async () => {
      const response = await request(app)
        .get("/api/priorities")
        .send({}) // No priorities
        .expect(404);

      expect(response.body).toHaveProperty("message");
    });
  });

  describe("GET /api/articles", () => {
    test("should return all articles", async () => {
      const response = await request(app).get("/api/articles").expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("GET /api/user", () => {
    test("should return all users", async () => {
      const response = await request(app).get("/api/user").expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("PUT /api/articles", () => {
    test("should update an article", async () => {
      // Assuming an article with id 1 exists
      const response = await request(app)
        .put("/api/articles")
        .send({
          Article_id: 1,
          publicistId: 1, // Assuming publicist id
          title: "Updated Title",
        })
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body.title).toBe("Updated Title");
    });

    test("should handle update errors", async () => {
      const response = await request(app)
        .put("/api/articles")
        .send({
          Article_id: 999, // Non-existent
          title: "Test",
        })
        .expect(404);

      expect(response.body).toHaveProperty("message");
    });
  });

  describe("DELETE /api/articles", () => {
    test("should delete an article", async () => {
      // Assuming an article with id 1 exists
      await request(app)
        .delete("/api/articles")
        .send({ Article_id: 1 })
        .expect(204);
    });

    test("should handle delete errors", async () => {
      const response = await request(app)
        .delete("/api/articles")
        .send({ Article_id: 999 }) // Non-existent
        .expect(404);

      expect(response.body).toHaveProperty("message");
    });
  });

  describe("POST /api/articles", () => {
    test("should create a new article", async () => {
      const response = await request(app)
        .post("/api/articles")
        .send({
          publicistId: 1, // Assuming publicist id
          title: "New Article",
          content: "Article content here",
        })
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body.title).toBe("New Article");
    });

    test("should handle creation errors", async () => {
      const response = await request(app)
        .post("/api/articles")
        .send({
          // Missing required fields
        })
        .expect(404);

      expect(response.body).toHaveProperty("message");
    });
  });
});
