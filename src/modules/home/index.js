import React from "react";
import Hero from "./hero";
import { Projects } from "./projects";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />

      <div className="w-full mt-32 space-y-5">
        <p className="text-2xl font-medium">Projects</p>
        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
