import React from "react";
import styles from "./textarea.module.css";

type Props = React.ComponentPropsWithoutRef<"textarea"> & {
  name: string;
  className?: never;
};

const Textarea = (props: Props) => {
  return (
    <div className={styles.textarea}>
      <textarea
        {...props}
        className="w-full border-transparent bg-transparent focus:outline-none"
        cols={10}
        rows={4}
      />
    </div>
  );
};

export default Textarea;
