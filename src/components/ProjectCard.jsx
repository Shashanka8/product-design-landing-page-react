import React from "react";

function ProjectCard({ imgSrc, text }) {
  return (
    <div className="project-card m-2.5 md:m-5">
      <div className="project-card-header p-[30px] md:p-[60px] bg-[#1e1e1e]">
        <img src={imgSrc} alt={imgSrc} className="h-[240px] w-full" />
      </div>
      <h3 className="font-extrabold text-[22px] mt-5 mb-2.5">{text}</h3>
      <h5 className="text-base text-customred cursor-pointer">
        KNOW MORE &#8594;
      </h5>
    </div>
  );
}

export default ProjectCard;
