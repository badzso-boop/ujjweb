import React, { useEffect, useState } from "react";
import axios from "axios";
import ReferenceCard from "../Components/ReferenceCard";

const References = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3069/api/ujjweb/projects", {
          credentials: 'include',
          method: 'GET'
        });
  
        if (!response.ok) {
          throw new Error(`Error fetching projects: ${response.statusText}`);
        }
  
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="mb-[70px]">
      <h1 className="mt-[15%] md:mt-[5%] text-3xl text-center">
        <span className="font-bold">Referenciák</span>
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
