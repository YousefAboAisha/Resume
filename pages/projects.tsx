import React from "react";
import Landing from "../Components/Landing";
import ProjectsList from "../Containers/Projects/ProjectsList";

const Projects = () => {
  return (
    <main className="mb-24">
      <Landing
        hasBlurColors={false}
        mainImg={"/projects.png"}
        width={450}
        height={450}
        normalHeading={"Watch my Recent"}
        highlightHeading={"projects"}
      />

      <ProjectsList />
    </main>
  );
};

export default Projects;
