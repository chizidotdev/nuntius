import { type NextPage } from "next";
import Layout from "@ui/layout";
import Button from "@ui/button";

const Home: NextPage = () => {
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

      <div className="justify-self-end">
        <Button intent="secondary">settings</Button>
      </div>
    </Layout>
  );
};

export default Home;
