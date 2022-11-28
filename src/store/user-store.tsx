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
  usernameIsUndefined: boolean;
};

const UserContext = createContext<UserContextProps>({
  user: null,
  usernameIsUndefined: false,
});

export const UserProvider = ({ children, session }: TUserProps) => {
  const { data: user, isLoading } = trpc.user.findById.useQuery({
    id: session?.user?.id || "",
  });
  const usernameIsUndefined =
    typeof window !== "undefined" && !isLoading && !user?.username;

  return (
    <UserContext.Provider value={{ user, usernameIsUndefined }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
