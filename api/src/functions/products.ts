import Elysia from "elysia";

export const productRoutes = new Elysia({ prefix: "product" })
  .get("/", () => ({
    name: "product",
  }))
  .post("/", () => ({ name: "product" }))
  .put("/", () => ({ name: "product" }))
  .delete("/", () => ({ name: "product" }));
