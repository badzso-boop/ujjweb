import React from "react";
import { Link } from "react-router-dom";

import Tag from "./Tag";

import "../App.css";

const ReferenceCard = ({ kep, cim, leiras, link }) => {
  return (
    <div className="md:w-1/3 lg:w-1/4 m-auto mt-3 mx-2 p-3 BG-C457B9D rounded-xl">
      <img src={`images/${kep}`} alt="Random kep" className="rounded-xl m-auto " />

      <h1 className="mt-3 mb-2 text-xl text-center">
        <Tag text="h3">
          <span className="font-bold">{cim}</span>
        </Tag>
      </h1>

      <p>
        {leiras}
      </p>
      <div className="w-full text-center mt-3">
        <Link className="w-50 p-2 m-2 rounded-xl m-auto BG-A8DADC text-black" to={`${link}`}>
          Bővebben
        </Link>
      </div>
    </div>
  );
};

export default ReferenceCard;
