import request from "supertest";
import app from "../src";

describe("GET Test ping server", () => {
  describe(`return object { message: "Hello Assignment!" }`, () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app).get("/");
      expect(response.body.message).toBe("Hello Assignment!");
    });
  });
});

describe("GET Ticket", () => {
  describe("return ticket data", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app).get("/v1/ticket");
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("POST Create Ticket", () => {
  describe("create tickets", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app).post("/v1/ticket").send({
        title: "Test123",
        description: "Test12345",
        contact: "tell:0801231231",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("POST Create Ticket", () => {
  describe("create tickets", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app).post("/v1/ticket").send({
        title: "Test123",
        description: "Test12345",
        contact: "tell:0801231231",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("PATCH Update Ticket", () => {
  describe("update tickets", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app).patch("/v1/ticket").send({
        id: "2EosNGnNodI5J4KpgrRe",
        newStatus: "accepted",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("PATCH Update Ticket", () => {
  describe("update tickets", () => {
    test("should response with a 404 status code", async () => {
      const response = await request(app).patch("/v1/ticket").send({
        id: "2EosNGnNodI5J4Kpgrcc",
        newStatus: "accepted",
      });
      expect(response.statusCode).toBe(404);
    });
  });
});
