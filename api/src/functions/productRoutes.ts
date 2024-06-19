import Elysia, { t } from "elysia";
import { prisma } from "../lib/prisma";

export const productRoutes = new Elysia({ prefix: "product" })
  // Create
  .post(
    "/",
    async ({ body }) => {
      return await prisma.product.create({ data: body });
    },
    {
      body: t.Object({
        name: t.String(),
        brand: t.String(),
        color: t.String(),
        price: t.Number(),
        model: t.String(),
        size: t.Number(),
        stock: t.Number(),
      }),
    }
  )
  // Read
  .get("/", async () => {
    return await prisma.product.findMany();
  })
  // Update
  .put(
    "/:id",
    async ({ params, body }) => {
      return await prisma.product.update({
        data: body,
        where: {
          id: params.id,
        },
      });
    },
    {
      body: t.Object({
        name: t.String(),
        brand: t.String(),
        color: t.String(),
        price: t.Number(),
        model: t.String(),
        size: t.Number(),
        stock: t.Number(),
      }),
      params: t.Object({
        id: t.Number(),
      }),
    }
  )
  // Delete
  .delete(
    "/:id",
    async ({ params }) => {
      return await prisma.product.delete({
        where: {
          id: params.id,
        },
      });
    },
    {
      params: t.Object({
        id: t.Number(),
      }),
    }
  );
