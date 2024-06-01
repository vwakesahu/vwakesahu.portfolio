import React from "react";
import WordRotate from "./ui/wordRotate";

const Navbar = ({arr, duration}) => {
  return (
    <div className="space-y-3 md:min-h-24 min-h-12 relative">
      <WordRotate
        className="w-full hover:text-primary cursor-pointer"
        words={arr}
        duration={duration}
      />
      {/* <p className=></p> */}
      <div className="border-b absolute md:bottom-12 bottom-0 w-full" />
    </div>
  );
};

export default Navbar;
