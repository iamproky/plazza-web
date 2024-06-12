import Elysia from "elysia";

export const cartRoutes = new Elysia({ prefix: "cart" })
  .get("/", () => ({
    name: "product",
  }))
  .post("/", () => ({ name: "product" }))
  .put("/", () => ({ name: "product" }))
  .delete("/", () => ({ name: "product" }));
