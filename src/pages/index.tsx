import type { GetServerSideProps, NextPage } from "next";
import { Layout, Button } from "@components/ui";
import { signIn, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const session = useSession();
  console.log({ session });

  return (
    <Layout title="Home">
      <h1 className="text-4xl font-bold">chizi profile</h1>

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

      <div onClick={() => signIn()} className="justify-self-end">
        <Button intent="secondary">settings</Button>
      </div>
    </Layout>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async ()=>{
//     const session = await getServerAuthSession(context)
//   if (!session) return {redirect: '/login'}
//   return {
//     props: {}
//   }
// }
