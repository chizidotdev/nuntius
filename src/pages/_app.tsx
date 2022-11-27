import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { UserProvider } from "src/store/user-store";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <UserProvider session={session}>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
