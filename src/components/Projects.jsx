import React from "react";

import Project1Screenshot from "../assets/Project1-Screenshot.jpg";
import Project2Screenshot from "../assets/Project2-Screenshot.jpg";
import Project3Screenshot from "../assets/Project3-Screenshot.jpg";
import Project4Screenshot from "../assets/Project4-Screenshot.jpg";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectData = [
    {
      imgSrc: Project1Screenshot,
      text: "The Vintage",
    },
    {
      imgSrc: Project2Screenshot,
      text: "Foodasa",
    },
    {
      imgSrc: Project3Screenshot,
      text: "Marco Accent",
    },
    {
      imgSrc: Project4Screenshot,
      text: "Mozaik",
    },
  ];

  return (
    <section className="mt-[800px] lg:mt-[850px] px-[3%] lg:pl-[10%] lg:pr-[12%] mb-[50px]">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="font-extrabold">FEATURED PROJECTS</h2>
          <p className="mt-2.5 font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
        </div>
        <div className="text-right">
          <button className="text-white bg-customred font-bold px-[30px] py-[15px]">
            VIEW ALL
          </button>
        </div>
      </div>

      <div className="projects-cards grid grid-cols-1 sm:grid-cols-2">
        {projectData.map((project) => (
          <ProjectCard key={project.imgSrc} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
