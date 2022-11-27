import type { GetServerSideProps, NextPage } from "next";
import { Layout, Button } from "@components/ui";
import { getServerAuthSession } from "src/server/common/get-server-auth-session";
import type { Session } from "next-auth";
import { useUser } from "src/store/user-store";

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <Layout title="Home">
      <h1 className="text-4xl font-bold">{user?.username} profile</h1>

      <div className="flex flex-col items-center">
        <p>--http://profile-link/chizi</p>
        <p>
          <strong>Share your profile link ❤️ </strong>
          to get responses from your friends. Go to
          <strong> &apos;View Messages&apos;</strong> to check out the
          responses. 👌
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Button>view Messages</Button>
        <Button>share my profile</Button>
      </div>

      <div className="justify-self-end">
        <Button intent="secondary">settings</Button>
      </div>
    </Layout>
  );
};

export default Home;

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
