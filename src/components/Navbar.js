import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Github Finder</h1>
      <div className="link-container">
        <Link to="/">Home </Link>|<Link to="/about">About</Link>
      </div>
    </div>
  );
};
export default Navbar;
