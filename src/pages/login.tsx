import Heading from "@components/heading";
import Button from "@ui/button";
import Layout from "@ui/layout";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <Layout title="Login">
      <Image src="/bubble-chat.png" alt="" width={100} height={100} />
      <Heading>Login</Heading>
      <p className="text-center">
        Recieve anonymous compliments from your friends and send anonymous
        messages to your friends for free.
      </p>

      <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Google Sign in
      </Button>
    </Layout>
  );
};

export default Login;
