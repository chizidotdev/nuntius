import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full rounded border border-blue p-3">{children}</div>
  );
};

export default Container;
