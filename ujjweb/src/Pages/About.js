import React from "react";
import { useTranslation } from "react-i18next";

import Tag from "../Components/Tag";

import norbiKep from "../img/norbi.jpeg";

const ABout = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-[70px]">
      <h1 className="mt-[15%] md:mt-[5%] text-4xl text-center">
        <Tag text="h1">
          <span className="font-bold">Rólam</span>
        </Tag>
      </h1>

      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 p-4">
            <div className="text-center text-xl">
              <span className="E63946">{"<"}</span>
              <span className="A8DADC">img</span>
              <span className="E63946"> </span>
              <span className="A8DADC">src</span>
              <span className="E63946">="</span>
              norbi.png
              <span className="E63946">" </span>
              <span className="A8DADC">alt</span>
              <span className="E63946">="</span>
              {t("img_text")}
              <span className="E63946">"{">"}</span>
              <img
                src={norbiKep}
                className="rounded-xl w-3/4 m-auto mt-2"
                alt="Mosolygós fiú"
              />
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <div className="py-6 sm:py-40">
              <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i className="fa-solid fa-user"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">{t("title1")}</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">{t("text1")}</dd>
                    </div>
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                        <i class="fa-solid fa-book"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">{t("title2")}</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">{t("text2")}</dd>
                    </div>
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i className="fa-solid fa-code"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">{t("title3")}</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">{t("text3")}</dd>
                    </div>
                    <div className="relative pl-16">
                      <dt className="text-base font-semibold leading-7">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i className="fa-solid fa-comments"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">{t("title4")}</span>
                        </Tag>
                      </dt>
                      <dd className="mt-2 text-base leading-7">{t("text4")}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABout;
