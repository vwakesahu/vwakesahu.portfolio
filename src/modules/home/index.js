import React from "react";
import Hero from "./hero";
import { Projects } from "./projects";
import dynamic from "next/dynamic";
import ContactMe from "@/components/contactMe";

// const InProgress = dynamic(() => import("@/components/inProgress"), { ssr: false });

const Homepage = () => {
  return (
    <div className="md:flex md:flex-col md:items-center min-h-[100vh]">
      {/* <InProgress /> */}
      <div className="md:max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <Hero />

          <div className="w-full mt-32 space-y-5">
            <p className="text-2xl font-medium">Projects</p>
            <div>
              <Projects />
            </div>
          </div>

          {/* <ContactMe /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
