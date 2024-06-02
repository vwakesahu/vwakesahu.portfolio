import Flow from "@/components/flow";
import LivePreview from "@/components/livePreview";
import Navbar from "@/components/navbar";
import React from "react";

const imgPaths = ["/fbe/desk-main.svg", "/fbe/mob-main.svg"];
const navItems = ["Frames", "Home"];

const Index = () => {
  return (
    <div className="md:flex md:items-center md:justify-center">
      <div className="w-full md:max-w-6xl">
        <div>
          <Navbar arr={navItems} duration={1500} href={"/"} />
          <div className="grid gap-10">
            <LivePreview href={"https://frames-by-engineer.vercel.app/"} />
            <Flow images={imgPaths} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
