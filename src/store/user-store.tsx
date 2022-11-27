import { useSession } from "next-auth/react";
import React, { createContext, useContext } from "react";
import { trpc } from "src/utils/trpc";

type TUserProps = {
  children: React.ReactNode;
};

type UserContextProps = {
  user: any;
};

const UserContext = createContext<UserContextProps>({
  user: null,
});

export const UserProvider = ({ children }: TUserProps) => {
  const { data: session } = useSession();
  const { data: user } = trpc.user.getUser.useQuery({
    id: session?.user?.id || "",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
