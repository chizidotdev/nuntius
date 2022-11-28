import Heading from "@components/heading";
import Logo from "@components/logo";
import Button from "@ui/button";
import Layout from "@ui/layout";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <Layout title="Login">
      <Logo />
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
