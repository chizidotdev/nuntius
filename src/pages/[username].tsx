import Heading from "@components/heading";
import Button from "@ui/button";
import Layout from "@ui/layout";
import Textarea from "@ui/textarea";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { trpc } from "src/utils/trpc";

const Message: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ username }) => {
  const { data: user, isLoading } = trpc.user.findByUsername.useQuery({
    username,
  });
  const { mutate: createMessage } = trpc.message.create.useMutation();
  const router = useRouter();
  const [value, setValue] = useState("");

  if (!isLoading && !user) {
    router.push("/");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const message = createMessage({
      text: value,
      userId: user.id,
    });

    console.log({ message });
  };

  return (
    <Layout title={`Send ${username} a message`}>
      <Heading>Say Something...</Heading>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
        <label className="text-sm capitalize">
          Say something about me <span className="text-red-600">*</span>
        </label>
        <Textarea
          name="message"
          placeholder={`Leave a message for ${username} here...`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="mt-5" />
        <Button>Send Message</Button>
      </form>

      <p className="mt-10">
        Say what do you think about {username} or Leave a feedback for &nbsp;
        {username} anonymously using the form above... Thank You!!👌
      </p>
    </Layout>
  );
};

export default Message;

export const getServerSideProps: GetServerSideProps<{
  username: string;
}> = async (context) => {
  const username = context.query.username;

  if (!username || typeof username !== "string") return { notFound: true };

  return {
    props: { username },
  };
};
