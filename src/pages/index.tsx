import type { GetServerSideProps, NextPage } from "next";
import { Layout, Button } from "@components/ui";
import { getServerAuthSession } from "src/server/common/get-server-auth-session";
import type { Session } from "next-auth";
import { useUser } from "src/store/user-store";
import { IoMdCopy } from "react-icons/io";

const Home: NextPage = () => {
  const { user } = useUser();
  const profileUrl = `http://localhost:3000/${user?.username}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    alert("Profile Link Copied to Clipboard");
  };

  // const handleShare = () => {
  //   `https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20${profileUrl}`;
  // };

  return (
    <Layout title="Home">
      <h1 className="text-4xl font-bold">{user?.username}&apos;s profile</h1>

      <div className="flex flex-col items-center gap-1">
        <p
          onClick={handleCopy}
          className="flex cursor-pointer items-center gap-2"
        >
          {profileUrl} <IoMdCopy />
        </p>
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
