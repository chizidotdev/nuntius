import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import { getServerAuthSession } from "src/server/common/get-server-auth-session";

export const getServerSideProps: GetServerSideProps<{
  session: Session;
}> = async (context) => {
  const session = await getServerAuthSession(context);

  if (!session || !session.user)
    return { redirect: { destination: "/login", permanent: false } };

  return {
    props: { session: session },
  };
};
