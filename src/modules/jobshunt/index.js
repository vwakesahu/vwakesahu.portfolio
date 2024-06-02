import React from "react";
import LivePreview from "../../components/livePreview";
import Flow from "../../components/flow";
import Navbar from "@/components/navbar";

const navItems = ["Jobshunt", "Home"];
const imgPaths = ["/jobshunt/desk-main.svg", "/jobshunt/mob-main.svg"];

const Index = () => {
  return (
    <div className="md:flex md:items-center md:justify-center">
      <div className="w-full md:max-w-6xl">
        <div>
          <Navbar arr={navItems} duration={1500} href={"/"} />
          <div className="grid gap-10">
            <LivePreview href={"https://jobshunt-six.vercel.app/"} />
            <Flow images={imgPaths} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
