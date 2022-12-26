import { router } from "../trpc";
import { authRouter } from "./auth";
import { messageRouter } from "./message";
import { userRouter } from "./user";

export const appRouter = router({
  user: userRouter,
  auth: authRouter,
  message: messageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
