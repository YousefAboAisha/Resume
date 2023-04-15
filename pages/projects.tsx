import React from "react";
import Landing from "../Components/Landing";
import ProjectsList from "../Containers/Projects/ProjectsList";

const about = () => {
  return (
    <main className="mb-24">
      <Landing
        hasBlurColors={false}
        mainImg={"/projects2.svg"}
        width={450}
        height={450}
        normalHeading={"Watch my Recent"}
        highlightHeading={"projects"}
        className="mt-6"
      />

      <ProjectsList />
    </main>
  );
};

export default about;
