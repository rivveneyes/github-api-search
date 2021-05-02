import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    width: "90%",
    backgroundColor: "grey",
    height: "80px",
    margin: "auto",
  };
  return (
    <div style={style}>
      <h1>this is the navbar</h1>
      <ol style={{ margin: "20px", float: "right" }}>
        <li>
          <Link to="/">Test-home</Link>
        </li>
        <li>
          <Link to="/about">Test-about</Link>
        </li>
      </ol>
    </div>
  );
};
export default Navbar;
