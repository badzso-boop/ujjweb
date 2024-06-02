import React from "react";

import Tag from "../Components/Tag";
import InputTag from "../Components/InputTag";

const Contact = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="mt-[15%] md:mt-[5%] text-3xl text-center">
        <Tag text="h1">
          <span className="font-bold">Kapcsolat</span>
        </Tag>
      </h1>

      <div id="form" className="flex flex-col">
        <div className="my-3 flex flex-col">
          <div className="w-[90%] m-auto">
            <span>
              <InputTag type="text" placeholder="Feladó"></InputTag>
            </span>
            <input
              type="text"
              placeholder="Feladó"
              className="rounded-md p-2 text-black w-full m-auto mt-2"
            />
          </div>
        </div>

        <div className="my-3 flex flex-col">
          <div className="w-[90%] m-auto">
            <span>
              <InputTag type="text" placeholder="Tárgy"></InputTag>
            </span>
            <input
              type="text"
              placeholder="Tárgy"
              className="rounded-md p-2 text-black w-full mt-2 m-auto"
            />
          </div>
        </div>

        <div className="my-3 flex flex-col">
          <div className="w-[90%] m-auto">
            <span className="text-left">
              <InputTag type="textarea" placeholder="Üzenet"></InputTag>
            </span>
            <textarea
              type="textarea"
              placeholder="Üzenet"
              className="rounded-md p-2 text-black w-full h-[200px] mt-2 m-auto"
            />
          </div>
        </div>
      </div>

      <div className="p-2 w-full">
        <div className="py-6 sm:py-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <Tag text="h4">
                        <span className="font-bold">Telefon:</span>
                      </Tag>
                      <br />
                      <span>
                        <a className="underline" href="tel:+36704228587">
                          +36704228587
                        </a>
                      </span>
                    </div>
                  </dt>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <Tag text="h4">
                        <span className="font-bold">Email:</span>
                      </Tag>
                      <br />
                      <span>
                        <a
                          className="underline"
                          href="mailto:norbert.ujj@gmail.com"
                        >
                          norbert.ujj@gmail.com
                        </a>
                      </span>
                    </div>
                  </dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
