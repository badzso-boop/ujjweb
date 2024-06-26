import React, { useEffect, useState } from "react";
import axios from "axios";
import ReferenceCard from "../Components/ReferenceCard";
import { useTranslation } from 'react-i18next';

const References = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${apiUrl}/projects`, { withCredentials: true });
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mb-[70px]">
      <h1 className="mt-[15%] md:mt-[5%] text-3xl text-center">
        <span className="font-bold">{t("r_title")}</span>
      </h1>

      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ReferenceCard
            key={index}
            kep={project.kep}
            cim={project.cim}
            leiras={project.leiras}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default References;
