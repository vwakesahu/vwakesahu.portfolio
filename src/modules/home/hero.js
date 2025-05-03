import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import React from "react";
const navItems = ["@vwakesahu", "portfolio"];
const Hero = () => {
  const handleOpenResume = () => {
    const link = document.createElement("a");
    link.href = "/resumeV (1).pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };
  return (
    <div className="w-full grid gap-10">
      <Navbar
        arr={navItems}
        duration={2000}
        href={"https://github.com/vwakesahu/vwakesahu.portfolio"}
        newTab={true}
      />
      <p className="text-[4.5rem] md:text-[7.4rem] font-semibold leading-extra-tight selection:bg-yellow-200">
        It&rsquo;s time. Ready to build your idea over six weeks?
      </p>
      <div>
        <Button className="rounded-none py-8 px-12" onClick={handleOpenResume}>
          See Resume
        </Button>
      </div>
    </div>
  );
};

export default Hero;
