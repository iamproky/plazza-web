import Elysia, { t } from "elysia";
import { prisma } from "../lib/prisma";

export const cartRoutes = new Elysia({ prefix: "cart" })
  // Create
  .post(
    "/:idUser",
    async ({ body, params }) => {
      const { idUser } = params;
      const { product, quantity } = body;

      const userID = Number(idUser);

      const hasCart = await prisma.cart.findFirst({
        where: {
          userId: userID,
          productId: product,
        },
      });
      if (hasCart) {
        return await prisma.cart.update({
          where: {
            id: hasCart.id,
          },
          data: {
            quantity: quantity + hasCart.quantity,
          },
        });
      } else {
        return await prisma.cart.create({
          
          data: {
            quantity,
            product: {
              connect: {
                id: product,
              },
            },
            user: {
              connect: {
                id: userID,
              },
            }
          },
        });
      }
    },
    {
      params: t.Object({
        idUser: t.String(),
      }),
      body: t.Object({
        product: t.Number(),
        quantity: t.Number(),
      }),
    }
  )
  // Read
  .get(
    "/:idUser",
    async ({ params: { idUser } }) => {
      const cartList = await prisma.cart.findMany({
        where: {
          userId: Number(idUser),
        },
        select: {
          id: true,
          quantity: true,
          product: {
            select: {
              name: true,
              price: true,
            },
          },
        },
      });

      return cartList.map((cart) => ({
        id: cart.id,
        quantity: cart.quantity,
        name: cart.product.name,
        price: cart.product.price,
      }));
    },
    {
      params: t.Object({
        idUser: t.String(),
      }),
    }
  )

  // Delete
  .delete(
    "/:idUser",
    async ({ params: { idUser }, query: { idProduct } }) => {
      return await prisma.cart.deleteMany({
        where: {
          userId: Number(idUser),
          productId: idProduct,
        },
      });
    },
    {
      params: t.Object({
        idUser: t.String(),
      }),
      query: t.Object({
        idProduct: t.Number(),
      }),
    }
  );
