import Heading from "@components/heading";
import Logo from "@components/logo";
import Button from "@ui/button";
import Input from "@ui/input";
import Layout from "@ui/layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { trpc } from "src/utils/trpc";

const ChangeUsername = () => {
  const { query, push, back } = useRouter();
  const [username, setUsername] = useState("");
  const { mutate } = trpc.user.updateUsername.useMutation();

  const isUndefined = query.mode === "undefined";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { username },
      {
        onSuccess() {
          push("/");
        },
      }
    );
  };

  return (
    <Layout title="Change Username">
      <Logo />
      <Heading>Change Username</Heading>
      {isUndefined && <p>Hi there. Please set a new username to continue.</p>}
      {!isUndefined && <p>Hello there. You can change your username here.</p>}

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <Input
          name="username"
          placeholder="Enter new username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button>Submit</Button>
      </form>

      <div className="flex w-full flex-col">
        <Button onClick={() => back()}>Go back</Button>
      </div>
    </Layout>
  );
};

export default ChangeUsername;
