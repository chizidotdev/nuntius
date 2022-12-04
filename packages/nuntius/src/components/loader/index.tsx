import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="50"
      width="50"
      color="#006b9b"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
