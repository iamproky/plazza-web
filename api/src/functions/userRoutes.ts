import Elysia, { t } from "elysia";
import { prisma } from "../lib/prisma";

export const userRoutes = new Elysia()
  .post(
    "/login",
    async ({ body, set }) => {
      const { email, password } = body;

      const user = await prisma.user.findFirst({
        where: { email: email, password: btoa(password) },
      });

      if (user) return { id: user.id, name: user.name };

      set.status = "Bad Request";
      return "Email e senha inválido";
    },
    {
      body: t.Object({ email: t.String(), password: t.String() }),
    }
  )
  .post(
    "/signIn",
    async ({ body, set }) => {
      const { email, name, password } = body;
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: btoa(password),
        },
        select: {
          id: true,
        },
      });

      if (!user) {
        set.status = 'Bad Request'
        return "Não foi possivel criar o usuario";
      }

      return user;
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
      }),
    }
  );
