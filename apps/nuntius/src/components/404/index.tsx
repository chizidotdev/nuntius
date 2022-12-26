import Heading from "@components/heading";
import Logo from "@components/logo";
import { Button, Layout } from "@components/ui";
import Link from "next/link";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";

type Props = {
  username: string;
};

const NotFound = ({ username }: Props) => {
  return (
    <Layout title={`${username} not found`}>
      <Logo />
      <Heading>Oops...!</Heading>

      <div className="flex flex-col gap-2 text-center">
        <p>
          There is no one with the username {username}. Try looking for any
          possible typos.
        </p>
        <p>
          Or, you can get started by signing in and getting your link right now.
          Tap on the &apos;Sign in&apos; button below!
        </p>

        <div>
          <Button>
            <Link href="/">Sign in</Link>
          </Button>
        </div>
      </div>

      <Button>
        <Link href="/">
          <span className="flex items-center gap-1">
            Go to Homepage
            <BiHomeAlt />
          </span>
        </Link>
      </Button>
    </Layout>
  );
};

export default NotFound;
