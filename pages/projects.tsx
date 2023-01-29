import React from "react"
import Landing from "../Components/Landing"
import ProjectsList from "../Containers/Projects/ProjectsList"

const about = () => {
  return (
    <main className="mb-24">
      <Landing
        hasBlurColors={false}
        mainImg={"/projects.png"}
        width={550}
        height={550}
        normalHeading={"Watch my Recent"}
        highlightHeading={"projects"}
      />

      <ProjectsList />
    </main>
  )
}

export default about
