import React from "react";
import ProjectCard from "../../Components/UI/ProjectCard";
import { Sites } from "../../Data/Sites";

const Projects = () => {
  return (
    <div className="section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Sites.map((elem, index) => {
        return (
          <ProjectCard
            key={index}
            src={elem.href}
            title={elem.title}
            tags={elem.tags}
            alt={elem.alt}
            githubLink={elem.github_link}
            liveLink={elem.live_link}
          />
        );
      })}
    </div>
  );
};

export default Projects;
