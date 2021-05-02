import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  const style = { width: "200px", margin: "auto", display: "block" };
  return (
    <Fragment>
      <img src={spinner} alt="loading..." style={style}></img>
    </Fragment>
  );
};

export default Spinner;
