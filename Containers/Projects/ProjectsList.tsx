// import { getDownloadURL, ref, listAll } from "firebase/storage";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../Components/UI/Cards/ProjectCard";
import SkeletonLoading from "../../Components/UI/Utils/SkeletonLoading";
import { Sites } from "../../Data/Sites";
// import { storage } from "../../firebase";

const Projects = () => {
  // const storageRef = ref(storage, `/sites/`);
  // const [files, setFiles] = useState([""]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const getFiles = async () => {
  //   try {
  //     const res = await listAll(storageRef);
  //     const urls = await Promise.all(
  //       res.items.map(async (item) => {
  //         return await getDownloadURL(item);
  //       })
  //     );
  //     console.log(urls);

  //     setFiles(urls);
  //   } catch (error) {
  //     console.error("Error getting list of files:", error);
  //   }
  // };

  // useEffect(() => {
  //   getFiles();
  // }, []);

  const getData = () => {
    setLoading(true);
    fetch(
      "https://resume-e8543-default-rtdb.europe-west1.firebasedatabase.app/projects/-NTIzBqbs0G8oQ-CapFj.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[400px]">
      {loading ? (
        <>
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </>
      ) : (
        Sites.map((elem, index) => {
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
        })
      )}
    </div>
  );
};

export default Projects;
