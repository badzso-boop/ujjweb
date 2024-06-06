import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Tag from "../Components/Tag";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-[70px]">
      <h1 className="mt-[40%] md:mt-[15%] text-3xl text-center">
        <Tag text="h1">
          <span className="font-bold">ujjweb.hu</span>
        </Tag>
      </h1>
      <h4 className="text-md mt-3 text-center">
        <Tag text="h4">{t("motto")}</Tag>
      </h4>

      <div className="flex-wrap flex mx-auto justify-center">
        <Link
          to="/about"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            {t("about_title")}
          </Tag>
        </Link>

        <Link
          to="/references"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            {t("references_title")}
          </Tag>
        </Link>

        <Link
          to="/skillset"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            {t("skillset_title")}
          </Tag>
        </Link>

        <Link
          to="/contact"
          className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
        >
          <Tag text="button" multiline={true}>
            {t("contact_title")}
          </Tag>
        </Link>
      </div>
    </div>
  );
};

export default Home;
