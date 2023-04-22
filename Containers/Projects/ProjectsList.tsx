// import { getDownloadURL, ref, listAll } from "firebase/storage";
import React from "react";
import ProjectCard from "../../Components/UI/Cards/ProjectCard";
import SkeletonLoading from "../../Components/UI/Utils/SkeletonLoading";
import { Sites } from "../../Data/Sites";
// import { storage } from "../../firebase";
import useSWR from "swr";
import { PUBLIC_URL } from "../../config";

const Projects = () => {
  const fetchProjects = async () => {
    const res = await fetch(PUBLIC_URL);
    return res.json();
  };

  const { data, error, isLoading } = useSWR(PUBLIC_URL, fetchProjects);

  if (error)
    return (
      <div className="section w-full min-h-[400px]">
        <p className="abs-center text-theme">Network Error!</p>
      </div>
    );
  if (isLoading)
    return (
      <div className="section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[400px]">
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
      </div>
    );

  console.log(data);

  return (
    <div className="section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[400px]">
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
