import type { TUser } from "@router/user";
import type { Session } from "next-auth";
import React, { createContext, useContext } from "react";
import { trpc } from "src/utils/trpc";

type TUserProps = {
  children: React.ReactNode;
  session: Session | null;
};

type UserContextProps = {
  user?: TUser;
};

const UserContext = createContext<UserContextProps>({
  user: null,
});

export const UserProvider = ({ children, session }: TUserProps) => {
  const { data: user } = trpc.user.findById.useQuery({
    id: session?.user?.id || "",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
