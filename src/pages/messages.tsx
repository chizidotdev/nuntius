import Heading from "@components/heading";
import MessageCard from "@components/message-card";
import Layout from "@ui/layout";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import React from "react";
import { getServerAuthSession } from "src/server/common/get-server-auth-session";
import { useUser } from "src/store/user-store";

const Messages = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <Layout title="My Messages">
      <Heading>My Messages</Heading>
      <p className="text-center">
        👇 Scroll 👇 down to check out the messages that you have received
      </p>

      <ul className="w-full">
        {user?.messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </ul>
    </Layout>
  );
};

export default Messages;

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
