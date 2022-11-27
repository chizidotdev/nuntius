import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  register: publicProcedure
    .input(z.object({ username: z.string(), password: z.string() }))
    .mutation(({ input, ctx }) => {
      const user = ctx.prisma.user.create({
        data: {
          username: input.username,
          password: input.password,
        },
      });

      return user;
    }),
});
