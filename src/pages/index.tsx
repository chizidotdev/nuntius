import { Button, Layout } from "@components/ui";
import type { NextPage } from "next";
import { useUser } from "@store/user-store";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoMdCopy } from "react-icons/io";

const Home: NextPage = () => {
  const { user } = useUser();

  const profileUrl = `http://localhost:3000/message/${user?.username}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    alert("Profile Link Copied to Clipboard");
  };

  const whatsappLink = `https://api.whatsapp.com/send?text=%F0%9F%92%80Hey%21+Write+a+%2Asecret+anonymous+message%2A+for+me..+%F0%9F%98%89+I+%2Awon%27t+know%2A+who+wrote+it..+%F0%9F%92%80%F0%9F%A4%8C+%F0%9F%91%89+%24%7BprofileUrl%7D`;

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

      <div className="mt-4 flex flex-col gap-2">
        <Button>
          <Link href="/messages">
            <div className="inline-flex items-center gap-2">
              View Messages
              <span className="mt-1">
                <HiOutlineArrowLongRight />
              </span>
            </div>
          </Link>
        </Button>

        <Button>
          <div className="flex items-center gap-2">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Share on Whatsapp
            </a>
            <span className="mt-1">
              <FaWhatsapp />
            </span>
          </div>
        </Button>
      </div>

      <div className="justify-self-end">
        <Button intent="secondary">settings</Button>
      </div>
    </Layout>
  );
};

export default Home;

export { getServerSideProps } from "@store/global";
