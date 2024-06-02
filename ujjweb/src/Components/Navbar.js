import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Nav = () => {
  return (
    <div className="position-absolute bottom-0 left-0 w-full BG-C457B9D text-center">
      <Link to="/">
        <i className="m-3 text-2xl fa-solid fa-house"></i>
      </Link>
      <Link to="/about">
        <i className="m-3 text-2xl fa-solid fa-user"></i>
      </Link>
      <Link to="/references">
        <i className="m-3 text-2xl fa-solid fa-code"></i>
      </Link>
      <Link to="/cv">
        <i className="m-3 text-2xl fa-solid fa-folder-open"></i>
      </Link>
      <Link to="/contact">
        <i className="m-3 text-2xl fa-solid fa-phone"></i>
      </Link>
    </div>
  );
};

export default Nav;
