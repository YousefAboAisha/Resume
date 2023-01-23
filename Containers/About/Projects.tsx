import React from "react"
import ProjectCard from "../../Components/UI/ProjectCard"

const Projects = () => {
  return (
    <div className="section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects
