import Heading from "@components/heading";
import Button from "@ui/button";
import Input from "@ui/input";
import Layout from "@ui/layout";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password });

    const res = await signIn("credentials", {
      username,
      password,
      callbackUrl: "/",
      // redirect: false,
    });
    console.log(res);
  };

  return (
    <Layout title="Login">
      <Heading>Login</Heading>
      <p className="text-center">
        Recieve anonymous compliments from your friends and send anonymous
        messages to your friends for free.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 flex w-full flex-col gap-5">
        <Input
          name="username"
          placeholder="Enter your username"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name="password"
          placeholder="Enter your password"
          type="password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
      </form>

      <div className="flex flex-col items-center text-sm text-liver">
        <p className="cursor-pointer">
          <Link href="/">Forgot Password</Link>
        </p>
        <p>
          Don&apos;t Have an Account? <Link href="/register">Register</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
