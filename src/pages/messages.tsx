import Heading from "@components/heading";
import MessageCard from "@components/message-card";
import { Button, Container, Layout } from "@components/ui";
import Link from "next/link";
import { useUser } from "src/store/user-store";

const Messages = () => {
  const { user } = useUser();

  return (
    <Layout title="My Messages">
      <Heading>My Messages</Heading>
      <p className="text-center">
        👇 Scroll 👇 down to check out the messages that you have received
      </p>

      {user?.messages.length === 0 && (
        <Container>
          Oops! 😅 No one has sent you a message! Share your profile link and
          check back later!
        </Container>
      )}

      {user?.messages.length !== 0 && (
        <ul className="w-full">
          {user?.messages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </ul>
      )}

      <div className="justify-self-end">
        <Button>
          <Link href="/">Go Back</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default Messages;

export { getServerSideProps } from "@store/global";
