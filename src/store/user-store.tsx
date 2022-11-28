import type { TUser } from "@router/user";
import type { Session } from "next-auth";
import React, { createContext, useContext, useMemo } from "react";
import { trpc } from "src/utils/trpc";

type TUserProps = {
  children: React.ReactNode;
  session: Session | null;
};

type UserContextProps = {
  user?: TUser;
  usernameIsUndefined: boolean;
  isLoading: boolean;
};

const UserContext = createContext<UserContextProps>({
  user: null,
  usernameIsUndefined: false,
  isLoading: true,
});

export const UserProvider = ({ children, session }: TUserProps) => {
  const { data: user, isLoading } = trpc.user.findById.useQuery(
    {
      id: session?.user?.id || "",
    },
    {
      refetchInterval: 60,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const usernameIsUndefined =
    typeof window !== "undefined" && !isLoading && !user?.username;

  useMemo(() => user?.messages.reverse(), [user]);

  return (
    <UserContext.Provider value={{ user, usernameIsUndefined, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
