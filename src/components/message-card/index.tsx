import type { TMessage } from "@router/message";
import React from "react";
import date from "date-and-time";
import Container from "@ui/container";

type Props = {
  message: TMessage;
};

const MessageCard = ({ message }: Props) => {
  const { text, createdAt } = message;

  return (
    <Container>
      <h3 className="font-bold">Message:</h3>
      <p>{text}</p>

      <div className="mt-2 flex gap-1 text-sm">
        <p>- Anonymous</p>
        <time>[{date.format(createdAt, "YYYY-MM-DD HH:mm:ss")}]</time>
      </div>
    </Container>
  );
};

export default MessageCard;
