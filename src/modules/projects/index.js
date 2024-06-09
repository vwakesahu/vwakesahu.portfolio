import React from "react";
import { usePathname } from "next/navigation";
import { fbe, jobshunt, streamer } from "@/utils/data";
import BoilerPlate from "./boilerPlate";

const Projects = () => {
  const pathname = usePathname();
  let projectData;

  switch (pathname) {
    case "/jobshunt":
      projectData = jobshunt;
      break;
    case "/fbe":
      projectData = fbe;
      break;
    case "/streamer":
      projectData = streamer;
      break;
  }

  return (
    <div>
      {projectData ? (
        <BoilerPlate projectData={projectData} />
      ) : (
        <div className="min-h-[79vh]"></div>
      )}
    </div>
  );
};

export default Projects;
