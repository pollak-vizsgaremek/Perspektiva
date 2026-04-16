import 'dotenv/config';
import app, { prisma } from "../index.js";
import request from "supertest";

describe("Auth Controller Tests", () => {
  let token;
  let testUserId;
  let adminToken;

  beforeAll(async () => {
    // Create a test user for login tests
    const hashedPassword = await import('bcrypt').then(bcrypt => bcrypt.default.hash('testpassword', 10));
    
    // Delete existing test users to avoid race conditions in parallel tests
    await prisma.user.deleteMany({
      where: { email: { in: ['test@example.com', 'admin@example.com'] } }
    });
    
    const testUser = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        password: hashedPassword,
        isAdmin: false,
      },
    });
    testUserId = testUser.id;

    // Create an admin user
    const adminUser = await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        isAdmin: true,
      },
    });

    // Login as regular user
    const loginResponse = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "test@example.com",
        password: "testpassword",
      });
    token = loginResponse.body.token;

    // Login as admin
    const adminLoginResponse = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "admin@example.com",
        password: "testpassword",
      });
    adminToken = adminLoginResponse.body.token;
  });

  afterAll(async () => {
    // Clean up test users
    await prisma.user.deleteMany({
      where: {
        email: { in: ['test@example.com', 'admin@example.com'] },
      },
    });
    await prisma.$disconnect();
  });

  describe("POST /api/v1/auth/login", () => {
    test("should login successfully with valid credentials", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .send({
          email: "test@example.com",
          password: "testpassword",
        })
        .expect(200);

      expect(response.body).toHaveProperty("message", "Login successful");
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("user");
    });

    test("should fail with invalid credentials", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .send({
          email: "test@example.com",
          password: "wrongpassword",
        })
        .expect(401);

      expect(response.body).toHaveProperty("message", "Invalid credentials");
    });

    test("should fail with missing fields", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .send({
          email: "test@example.com",
        })
        .expect(400);

      expect(response.body).toHaveProperty("message", "Email and password are required");
    });
  });

  describe("POST /api/v1/auth/register", () => {
    test("should register a new user successfully", async () => {
      const response = await request(app)
        .post("/api/v1/auth/register")
        .send({
          name: "New User",
          email: "newuser@example.com",
          password: "password123",
          password2: "password123",
          ispublicist: false,
        })
        .expect(201);

      expect(response.body).toHaveProperty("message", "User registered successfully");
      expect(response.body).toHaveProperty("user");

      // Clean up
      await prisma.user.delete({
        where: { email: "newuser@example.com" },
      });
    });

    test("should register a publicist successfully", async () => {
      const response = await request(app)
        .post("/api/v1/auth/register")
        .send({
          name: "New Publicist",
          email: "newpublicist@example.com",
          password: "password123",
          password2: "password123",
          ispublicist: true,
        })
        .expect(201);

      expect(response.body).toHaveProperty("message", "User registered successfully");

      // Clean up
      const user = await prisma.user.findUnique({ where: { email: "newpublicist@example.com" } });
      await prisma.publicist.deleteMany({ where: { user_id: user.id } });
      await prisma.user.delete({ where: { email: "newpublicist@example.com" } });
    });

    test("should fail with mismatched passwords", async () => {
      const response = await request(app)
        .post("/api/v1/auth/register")
        .send({
          name: "Test",
          email: "test2@example.com",
          password: "password123",
          password2: "different",
        })
        .expect(400);

      expect(response.body).toHaveProperty("message", "Passwords do not match");
    });

    test("should fail with missing fields", async () => {
      const response = await request(app)
        .post("/api/v1/auth/register")
        .send({
          name: "Test",
          email: "test2@example.com",
        })
        .expect(400);

      expect(response.body).toHaveProperty("message", "All fields are required");
    });
  });

  describe("GET /api/v1/auth/admin", () => {
    test("should return admin data for admin user", async () => {
      const response = await request(app)
        .get("/api/v1/auth/admin")
        .set("Authorization", `Bearer ${adminToken}`)
        .expect(200);

      expect(response.body).toHaveProperty("users");
      expect(response.body).toHaveProperty("portals");
      expect(response.body).toHaveProperty("articlecount");
    });

    test("should deny access for non-admin user", async () => {
      const response = await request(app)
        .get("/api/v1/auth/admin")
        .set("Authorization", `Bearer ${token}`)
        .expect(403);

      expect(response.body).toHaveProperty("message", "Access denied");
    });

    test("should return 401 if not authenticated", async () => {
      await request(app).get("/api/v1/auth/admin").expect(401);
    });
  });

  describe("PUT /api/v1/auth/changes", () => {
    test("should update user email", async () => {
      const response = await request(app)
        .put("/api/v1/auth/changes")
        .set("Authorization", `Bearer ${token}`)
        .send({
          updatedemail: "updated@example.com",
        })
        .expect(200);

      expect(response.body).toHaveProperty("message", "User updated successfully");
      expect(response.body.user.email).toBe("updated@example.com");

      // Reset email
      await prisma.user.update({
        where: { id: testUserId },
        data: { email: "test@example.com" },
      });
    });

    test("should update user password", async () => {
      const response = await request(app)
        .put("/api/v1/auth/changes")
        .set("Authorization", `Bearer ${token}`)
        .send({
          password: "newpassword",
        })
        .expect(200);

      expect(response.body).toHaveProperty("message", "User updated successfully");

      // Reset password
      const hashedPassword = await import('bcrypt').then(bcrypt => bcrypt.default.hash('testpassword', 10));
      await prisma.user.update({
        where: { id: testUserId },
        data: { password: hashedPassword },
      });
    });

    test("should fail with no fields provided", async () => {
      const response = await request(app)
        .put("/api/v1/auth/changes")
        .set("Authorization", `Bearer ${token}`)
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty("message", "At least one field (email or password) must be provided");
    });

    test("should return 401 if not authenticated", async () => {
      await request(app).put("/api/v1/auth/changes").send({}).expect(401);
    });
  });

  describe("POST /api/v1/auth/userDelete", () => {
    test("should soft delete a user", async () => {
      const response = await request(app)
        .post("/api/v1/auth/userDelete")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          userId: testUserId,
        })
        .expect(200);

      expect(response.body).toHaveProperty("message", "User deleted successfully");

      // Reset deleted status
      await prisma.user.update({
        where: { id: testUserId },
        data: { deleted: false },
      });
    });

    test("should fail if user not found", async () => {
      const response = await request(app)
        .post("/api/v1/auth/userDelete")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          userId: "nonexistent",
        })
        .expect(404);

      expect(response.body).toHaveProperty("message", "User not found");
    });

    test("should return 401 if not authenticated", async () => {
      await request(app).post("/api/v1/auth/userDelete").send({}).expect(401);
    });
  });

  describe("DELETE /api/v1/auth/applicantDelete", () => {
    test("should reject a publicist application", async () => {
      // First, create a publicist for the test user
      await prisma.publicist.create({
        data: {
          name: "Test Publicist",
          user_id: testUserId,
          accepted: true,
        },
      });

      const response = await request(app)
        .delete("/api/v1/auth/applicantDelete")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          userId: testUserId,
        })
        .expect(200);

      expect(response.body).toHaveProperty("message", "User deleted successfully");

      // Clean up
      await prisma.publicist.deleteMany({ where: { user_id: testUserId } });
    });

    test("should fail if publicist not found", async () => {
      const response = await request(app)
        .delete("/api/v1/auth/applicantDelete")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          userId: "nonexistent",
        })
        .expect(404);

      expect(response.body).toHaveProperty("message", "User not found");
    });

    test("should return 401 if not authenticated", async () => {
      await request(app).delete("/api/v1/auth/applicantDelete").send({}).expect(401);
    });
  });
});