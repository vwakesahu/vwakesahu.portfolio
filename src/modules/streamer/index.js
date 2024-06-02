import React from "react";
import LivePreview from "../../components/livePreview";
import Flow from "../../components/flow";
import Navbar from "@/components/navbar";

const navItems = ["Streamer", "Home"];
const imgPaths = [
  "/streamer/desk-main.svg",
  "/streamer/mob-main.svg",
  "/streamer/mob-2.svg",
];

const Index = () => {
  return (
    <div className="md:flex md:items-center md:justify-center">
      <div className="w-full md:max-w-6xl">
        <div>
          <Navbar arr={navItems} duration={1500} href={"/"} />
          <div className="grid gap-10">
            <LivePreview href={"https://streamer-pi.vercel.app/"} />
            <Flow images={imgPaths} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
