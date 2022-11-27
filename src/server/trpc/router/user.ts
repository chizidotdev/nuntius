import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  findById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      const user = ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
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
});
