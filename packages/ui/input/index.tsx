import styles from "./input.module.css";
import React from "react";

type Props = React.ComponentPropsWithoutRef<"input"> & {
  name: string;
  className?: never;
};

const Input = (props: Props) => {
  return (
    <div className={styles.input}>
      <input
        {...props}
        className="bg-transparent focus:outline-none"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
