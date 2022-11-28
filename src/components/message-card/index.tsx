import type { TMessage } from "@router/message";
import React from "react";
import date from "date-and-time";

type Props = {
  message: TMessage;
};

const MessageCard = ({ message }: Props) => {
  const { text, createdAt } = message;

  return (
    <div className="w-full rounded border border-liver p-2">
      <h3 className="font-bold">Message:</h3>
      <p>{text}</p>

      <div className="mt-2 flex gap-1 text-sm">
        <p>- Anonymous</p>
        <time>[{date.format(createdAt, "YYYY-MM-DD HH:mm:ss")}]</time>
      </div>
    </div>
  );
};

export default MessageCard;
