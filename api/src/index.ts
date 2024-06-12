import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { productRoutes } from "./functions/products";
import { cartRoutes } from "./functions/cart";

const app = new Elysia()
  .use(swagger())
  .use(productRoutes)
  .use(cartRoutes)
  .listen(8080);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
