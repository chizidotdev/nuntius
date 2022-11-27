import Heading from "@components/heading";
import Button from "@ui/button";
import Input from "@ui/input";
import Layout from "@ui/layout";
import Link from "next/link";
import React, { useState } from "react";
import { trpc } from "src/utils/trpc";

const Register = () => {
  const { mutate } = trpc.user.register.useMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = mutate({ username, password });
    console.log({ newUser });
  };

  return (
    <Layout title="Register">
      <Heading>Register</Heading>
      <p className="text-center">
        Recieve anonymous compliments from your friends and send anonymous
        messages to your friends for free.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 flex w-full flex-col gap-5">
        <Input
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Register Account</Button>
      </form>

      <div className="flex flex-col items-center text-sm text-liver">
        <p className="cursor-pointer">
          <Link href="/">Forgot Password</Link>
        </p>
        <p>
          Already Have an Account? <Link href="/login">Login</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Register;
