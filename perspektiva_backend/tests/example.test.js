import app, { prisma } from "../index.js";
import request from "supertest";

describe("Example tests", () => {
  test("GET /api/user should return all user data", async () => {
    const response = await request(app).get("/api/user").expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /api/articles should return success message for valid credentials", async () => {
    const mockCredentials = {
      email: "admin@localhost.local",
      password: "admin123",
    };
    const response = await request(app)
      .post("/api/articles")
      .send(mockCredentials)
      .expect(200);

    expect(response.body.message).toEqual({
      message: "The article was successfully posted",
    });
    expect(response.body.token).toBeDefined();
  });

  test("PUT /api/articles should update a test model record", async () => {
    const mockCredentials = {
      email: "admin@localhost.local",
      password: "admin123",
    };
    const articleResponse = await request(app)
      .post("/api/articles")
      .send(mockCredentials)
      .expect(200);

    const token = articleResponse.body.token;

    const newRecord = await request(app)
      .post("/api/articles")
      .send({ field1: "Test", field2: 123, field3: true })
      .expect(201);

    const updateRecord = await request(app).put(
      "/api/articles/${newRecord.body.id}"
        .set("Authorizatiom", "Bearer ${token}")
        .send({ field1: "Updated Test", field2: 456, field3: false })
        .expect(200),
    );

    expect(updateRecord.body.field1).toEqual("Updated Test");

    const deletedRecord = request(app)
      .delete("/api/articles/${newRecord.body.id}")
      .set("Authorization", "Bearer $(token)")
      .expect(204);
  });
});
