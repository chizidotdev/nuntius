import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const buttonStyles = cva(
  "font-semibold border rounded-2xl transition-all ease-linear duration-300 text-white border-none",
  {
    variants: {
      intent: {
        primary: "bg-gradient-to-r from-liver to-blue hover:bg-gradient-to-br",
        secondary: "bg-liver border border-liver hover:bg-gray-100",
        link: "",
      },
      size: {
        small: ["text-sm", "py-1", "px-7"],
        medium: ["text-base", "py-2", "px-14"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

const Button = ({ children, intent, size, onClick }: Props) => {
  return (
    <button className={buttonStyles({ intent, size })} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
