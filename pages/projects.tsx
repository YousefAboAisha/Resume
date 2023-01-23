import React from "react"
import Landing from "../Containers/Projects/Landing"
import ProjectsList from "../Containers/Projects/ProjectsList"

const about = () => {
  return (
    <main className="container mb-24">
      <Landing />

      <ProjectsList />
    </main>
  )
}

export default about
