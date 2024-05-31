import { Button } from "@/components/ui/button";
import WordRotate from "@/components/ui/wordRotate";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full grid gap-10">
      <div className="space-y-3 min-h-24 relative">
        <WordRotate
          className="w-full hover:text-primary cursor-pointer"
          words={["@vwakesahu", "portfolio"]}
          duration={1000}
        />
        {/* <p className=></p> */}
        <div className="border-b absolute bottom-12 w-full" />
      </div>
      <p className="text-[4.5rem] md:text-[7.4rem] font-semibold leading-extra-tight selection:bg-yellow-200">
        It&rsquo;s time. Ready to build your idea over six weeks?
      </p>
      <div>
        <Button className="rounded-none py-8 px-12">See my projects</Button>
      </div>
    </div>
  );
};

export default Hero;
