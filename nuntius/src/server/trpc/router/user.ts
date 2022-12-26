import { Prisma } from "@prisma/client";
import type { inferProcedureOutput } from "@trpc/server";
import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  username: true,
  email: true,
  messages: true,
});

export type TUser = inferProcedureOutput<typeof userRouter["findById"]>;

export const userRouter = router({
  findById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      const user = ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        select: defaultUserSelect,
      });

      return user;
    }),
  findByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(({ input, ctx }) => {
      const user = ctx.prisma.user.findUnique({
        where: {
          username: input.username,
        },
      });

      return user;
    }),
  updateUsername: protectedProcedure
    .input(z.object({ username: z.string().min(3) }))
    .mutation(({ input, ctx }) => {
      const id = ctx.session.user.id;
      const user = ctx.prisma.user.update({
        where: { id },
        data: { username: input.username },
      });

      return user;
    }),
});
