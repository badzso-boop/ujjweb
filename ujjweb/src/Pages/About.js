import React from "react";

import Tag from "../Components/Tag";
import Progress from "../Components/ProgressBar";

import norbiKep from "../img/norbi.jpeg";

const ABout = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="mt-[15%] md:mt-[5%] text-4xl text-center">
        <Tag text="h1">
          <span className="font-bold">Rólam</span>
        </Tag>
      </h1>

      <div class="container mx-auto p-4">
        <div class="flex flex-col lg:flex-row items-center lg:items-start">
          <div class="lg:w-1/2 p-4">
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
              Mosolygós fiú
              <span className="E63946">"{">"}</span>
              <img src={norbiKep} className="rounded-xl w-3/4 m-auto mt-2" alt="Mosolygós fiú" />
            </div>
          </div>
          <div class="lg:w-1/2 p-4">
            <div class="py-6 sm:py-40">
              <div class="mx-auto max-w-7xl">
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                  <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i class="fa-solid fa-user"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">Személyiségem</span>
                        </Tag>
                      </dt>
                      <dd class="mt-2 text-base leading-7">
                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                        suspendisse semper morbi. Odio urna massa nunc massa.
                      </dd>
                    </div>
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">Önkénteskedés</span>
                        </Tag>
                      </dt>
                      <dd class="mt-2 text-base leading-7">
                        Sit quis amet rutrum tellus ullamcorper ultricies libero
                        dolor eget. Sem sodales gravida quam turpis enim lacus
                        amet.
                      </dd>
                    </div>
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i class="fa-solid fa-code"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">Programozás</span>
                        </Tag>
                      </dt>
                      <dd class="mt-2 text-base leading-7">
                        Quisque est vel vulputate cursus. Risus proin diam nunc
                        commodo. Lobortis auctor congue commodo diam neque.
                      </dd>
                    </div>
                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg BG-C457B9D">
                          <i class="fa-solid fa-comments"></i>
                        </div>
                        <Tag text="h4">
                          <span className="font-bold">Közösségi élet</span>
                        </Tag>
                      </dt>
                      <dd class="mt-2 text-base leading-7">
                        Arcu egestas dolor vel iaculis in ipsum mauris.
                        Tincidunt mattis aliquet hac quis. Id hac maecenas ac
                        donec pharetra eget.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-75 text-center mx-auto flex flex-column">
        <h2 className="text-2xl my-4">
          <Tag text="h2">
            <span className="font-bold">SKillset</span>
          </Tag>
        </h2>

        <h5>Lehet atrakom majd mashova :)</h5>

        <Progress text="React.js" percent="95%"></Progress>
        <Progress text="Node.js" percent="85%"></Progress>
        <Progress text="PHP" percent="87%"></Progress>
        <Progress text="C#" percent="90%"></Progress>
        <Progress text="SQL" percent="79%"></Progress>
      </div>
    </div>
  );
};

export default ABout;
