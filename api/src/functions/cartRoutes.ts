import Elysia, { t } from "elysia";
import { prisma } from "../lib/prisma";

export const cartRoutes = new Elysia({ prefix: "cart" })
  // Create
  .post(
    "/:idUser",
    async ({ body, params }) => {
      const { idUser } = params;
      const { product, quantity } = body;

      return await prisma.cart.upsert({
        update: {
          quantity: quantity,
        },
        create: {
          quantity,
          productId: product,
          userId: idUser,
        },
        where: {
          userId: idUser,
          productId: product,
        },
        select: {
          id: true,
          userId: true,
          product: true,
          quantity: true,
        }
      });
    },
    {
      params: t.Object({
        idUser: t.Number(),
      }),
      body: t.Object({
        product: t.Number(),
        quantity: t.Number(),
      }),
    }
  )
  // Read
  .get("/:idUser", async ({params: {idUser}}) => {
    return await prisma.cart.findMany({
      where: {
        userId: idUser
      }
    });
  }, {
    params: t.Object({
      idUser: t.Number()
    })
  })
 
  // Delete
  .delete(
    "/:idUser",
    async ({ params: {idUser}, query: {idProduct} }) => {
      return await prisma.cart.deleteMany({
        where: {
          userId: idUser,
          productId: idProduct
        },
      });
    },
    {
      params: t.Object({
        idUser: t.Number(),
      }),
      query: t.Object({
        idProduct: t.Number(),
      })
    }
  );
