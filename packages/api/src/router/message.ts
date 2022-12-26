import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export type TMessage = {
  text: string;
  createdAt: Date;
  updatedAt: Date;
};

export const messageRouter = router({
  create: publicProcedure
    .input(z.object({ userId: z.string(), text: z.string().min(3).max(253) }))
    .mutation(({ input, ctx }) => {
      const { text, userId } = input;
      const message = ctx.prisma.message.create({
        data: {
          text,
          userId,
        },
      });

      return message;
    }),
});
