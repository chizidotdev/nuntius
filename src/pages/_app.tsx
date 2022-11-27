import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { UserProvider } from "store/user-store";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
