import React from "react";
import LivePreview from "../../components/livePreview";
import Flow from "../../components/flow";
import Navbar from "@/components/navbar";
import { Story } from "@/components/story";
import { AlertHeadsUps } from "@/components/alert";

const BoilerPlate = ({ projectData, pathName }) => {
  return (
    <div className="md:flex md:items-center md:justify-center">
      <div className="w-full md:max-w-6xl">
        <div>
          <Navbar arr={projectData.navItems} duration={1500} href={"/"} />
          <div className="grid gap-16">
            <Story
              title={projectData.title}
              description={projectData.description}
              icons={projectData.icons}
            />
            {pathName === "/streamer" && <AlertHeadsUps />}

            <Flow images={projectData.imgPaths} />
            <LivePreview href={projectData.livePreview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoilerPlate;
