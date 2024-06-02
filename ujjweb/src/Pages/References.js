import React from "react";

import Tag from "../Components/Tag";
import ReferenceCard from "../Components/ReferenceCard";

const data = [
  {
    kep: "random1.png",
    cim: "Poetry",
    leiras: "Ez egy 3 mondatos leiras lesz majd egy valtozoban tarolva. Ez egy 3 mondatos leiras lesz majd egy valtozoban tarolva. Ez egy 3 mondatos leiras lesz majd egy valtozoban tarolva.",
    link: "/contact"
  },
  {
    kep: "random2.png",
    cim: "Art",
    leiras: "Ez egy másik 3 mondatos leiras lesz majd egy valtozoban tarolva. Ez egy másik 3 mondatos leiras lesz majd egy valtozoban tarolva. Ez egy másik 3 mondatos leiras lesz majd egy valtozoban tarolva.",
    link: "/gallery"
  },
  {
    kep: "random3.png",
    cim: "Science",
    leiras: "Tudományos leiras lesz majd egy valtozoban tarolva. Tudományos leiras lesz majd egy valtozoban tarolva. Tudományos leiras lesz majd egy valtozoban tarolva.",
    link: "/research"
  },
  {
    kep: "random4.png",
    cim: "Technology",
    leiras: "Technológiai leiras lesz majd egy valtozoban tarolva. Technológiai leiras lesz majd egy valtozoban tarolva. Technológiai leiras lesz majd egy valtozoban tarolva.",
    link: "/tech"
  },
  {
    kep: "random5.png",
    cim: "History",
    leiras: "Történelmi leiras lesz majd egy valtozoban tarolva. Történelmi leiras lesz majd egy valtozoban tarolva. Történelmi leiras lesz majd egy valtozoban tarolva.",
    link: "/history"
  }
];

const References = () => {
  return (
    <div className="mb-[70px]">
      <h1 className="mt-[15%] md:mt-[5%] text-3xl text-center">
        <Tag text="h1">
          <span className="font-bold">Referenciák</span>
        </Tag>
      </h1>

      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <ReferenceCard
            key={index}
            kep={item.kep}
            cim={item.cim}
            leiras={item.leiras}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default References;
