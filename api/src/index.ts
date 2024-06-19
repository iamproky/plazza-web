import { Elysia } from "elysia";
import { productRoutes } from "./functions/productRoutes";
import { userRoutes } from "./functions/userRoutes";
import { cartRoutes } from "./functions/cartRoutes";
import swagger from "@elysiajs/swagger";
import { cors } from '@elysiajs/cors'


const app = new Elysia()
  .use(swagger({path: '/'}))
  .use(cors())
  .use(cartRoutes)
  .use(productRoutes)
  .use(userRoutes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
