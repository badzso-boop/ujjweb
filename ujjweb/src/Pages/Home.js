import React from "react";
import { Link } from "react-router-dom";

import Tag from "../Components/Tag";

const Home = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="mt-[50%] md:mt-[15%] text-4xl text-center">
        <Tag text="h1">
          <span className="font-bold">ujjweb.hu</span>
        </Tag>
      </h1>
      <h4 className="text-xl mt-3 text-center">
        <Tag text="h4">A pogramozás varázsa!</Tag>
      </h4>

      <div className="flex-wrap flex mx-auto justify-center">
        <Link
          to="/about"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            Rólam
          </Tag>
        </Link>

        <Link
          to="/cv"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            Önéletrajz
          </Tag>
        </Link>

        <Link
          to="/contact"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            Kapcsolat
          </Tag>
        </Link>
        <Link
          to="/references"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            Referenciák
          </Tag>
        </Link>

        <div className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md">
          <Tag text="button" multiline={true}>
            Skillset????
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default Home;
