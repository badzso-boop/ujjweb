import React from "react";
import { Link } from "react-router-dom";
import i18n from "../i18n";

import "../App.css";
import hun from '../img/hun.png';
import eng from '../img/eng.png';

const Nav = () => {
  return (
    <div className="position-absolute bottom-0 left-0 w-full BG-C457B9D text-center flex justify-center">
      <Link to="/">
        <i className="m-3 text-2xl fa-solid fa-house"></i>
      </Link>
      <Link to="/about">
        <i className="m-3 text-2xl fa-solid fa-user"></i>
      </Link>
      <Link to="/references">
        <i className="m-3 text-2xl fa-solid fa-code"></i>
      </Link>
      <Link to="/skillset">
        <i className="m-3 text-2xl fa-solid fa-sliders"></i>
      </Link>
      <Link to="/contact">
        <i className="m-3 text-2xl fa-solid fa-phone"></i>
      </Link>

      <img src={hun} onClick={() => i18n.changeLanguage('hu')} className="w-[40px] m-3 rounded-md"/>
      <img src={eng} onClick={() => i18n.changeLanguage('en')} className="w-[40px] m-3 rounded-md"/>
    </div>
  );
};

export default Nav;
