import { Link1Icon } from "@radix-ui/react-icons";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const LivePreview = ({ href }) => {
  return (
    <div>
      <div className="mt-10 md:mt-0 flex flex-col gap-10">
        <div className="flex gap-4 items-center">
          <p className="text-[1.5rem] md:text-[2rem] font-semibold">Live Preview</p>
          <a
            href={href}
            target="_blank"
            className="w-10 h-10 rounded-full border-2 hover:border-black flex items-center justify-center hover:-rotate-45 hover:bg-primary transition-all ease-in-out duration-500 cursor-pointer hover:scale-125">
            <Link1Icon className="rounded-full" />
          </a>
        </div>

        <iframe
          src={href}
          scrolling="no"
          className="border md:hidden md:aspect-video md:w-[35rem] w-full h-[350px]"></iframe>
      </div>

      <div className="flex gap-10">
        <div className="relative hidden md:inline-block font-medium group mt-12">
          <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-black -translate-x-0 -translate-y-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
          <div className="absolute inset-0 w-full h-full bg-background border-2 border-black group-hover:bg-black"></div>
          <div
            className="relative md:w-[35rem] h-[355px] text-black group-hover:text-white"
            style={{
              direction: "rtl",
            }}>
            <iframe
              src={href}
              scrolling="no"
              style={{
                transform: "scale(0.28,0.28) translate(2535px,-1600px)",
                width: "1980px",
                height: "1250px",
              }}
              className="md:aspect-video w-full"
            />
          </div>
        </div>

        <div className="relative hidden md:inline-block font-medium group mt-12">
          <div className="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-black -translate-x-0 -translate-y-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
          <div className="absolute inset-0 w-full h-full bg-background border-2 border-black group-hover:bg-black"></div>
          <div
            className="relative md:w-[10.8rem] h-[355px] text-black group-hover:text-white"
            style={{
              direction: "rtl",
            }}>
            <iframe
              src={href}
              scrolling="no"
              style={{
                transform: "scale(0.28,0.28) translate(765px,-1600px)",
                width: "600px",
                height: "1250px",
              }}
              className="md:aspect-video w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
