import React from "react";
import { useTranslation } from "react-i18next";

import Tag from "../Components/Tag";
import Progress from "../Components/ProgressBar";

const Skillset = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-[70px]">
      <h1 className="mt-[15%] md:mt-[5%] text-4xl text-center">
        <Tag text="h1">
          <span className="font-bold">{t("main_title")}</span>
        </Tag>
      </h1>

      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 p-4">
            <div className="py-3 sm:py-20">
              <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i class="fa-brands fa-react"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">React.js</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">
                        {t("react_text")}
                      </dd>
                    </div>
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i class="fa-brands fa-node-js"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">Node.js</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">
                        {t("node_text")}
                      </dd>
                    </div>
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i className="fa-solid fa-code"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">C#</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">
                        {t("c#_text")}
                      </dd>
                    </div>
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i class="fa-brands fa-php"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">PHP</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">
                        {t("php_text")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50">
            <div className="text-center text-xl py-3 sm:py-20">
              <div className="w-75 text-center mx-auto flex flex-column">
                <Progress text="React.js" percent="95%"></Progress>
                <Progress text="Node.js" percent="85%"></Progress>
                <Progress text="PHP" percent="87%"></Progress>
                <Progress text="C#" percent="90%"></Progress>
                <Progress text="SQL" percent="79%"></Progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-[15%] md:mt-[5%] text-3xl text-center">
        <Tag text="h1">
          <span className="font-bold">{t("cv_title")}</span>
        </Tag>
      </h1>
      <div className="flex flex-col w-75 mx-auto">
        <div className="lg:w-50">
          <div className="flex-wrap flex mx-auto justify-center">
            <a
              href="http://ujjweb.hu/ujjweb/files/ujj_norbert_oneletrajz.pdf"
              className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
            >
              <Tag text="button" multiline={true}>
                {t("cv_hun")}
              </Tag>
            </a>

            <a
              href="http://ujjweb.hu/ujjweb/files/ujj_norbert_cv.pdf"
              className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
            >
              <Tag text="button" multiline={true}>
                {t("cv_eng")}
              </Tag>
            </a>

            <a
              href="http://ujjweb.hu/ujjweb/files/ujj_norbert_motivacios_level.pdf"
              className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
            >
              <Tag text="button" multiline={true}>
                {t("cover_letter_hun")}
              </Tag>
            </a>

            <a
              href="http://ujjweb.hu/ujjweb/files/ujj_norbert_cover_letter.pdf"
              className="flex w-[100px] h-[100px] m-4 text-center BG-C457B9D rounded-md"
            >
              <Tag text="button" multiline={true}>
                {t("cover_letter_eng")}
              </Tag>
            </a>
          </div>
        </div>
        <div className="lg:w-50 m-auto p-3">
          <h1 className="text-2xl">
            <Tag text="h1">
              <span className="font-bold">{t("knowlegde_title")}</span>
            </Tag>
          </h1>
          <p className="mt-2">{t("knowledge_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
