import React from "react";

const LivePreview = () => {
  return (
    <div>
      <div className="mt-10 md:mt-0 flex flex-col gap-10">
        <p className="text-3xl md:text-[3rem] font-semibold">Live Preview</p>
        <iframe
          src="https://jobshunt-six.vercel.app/"
          scrolling="no"
          className="border md:hidden md:aspect-video md:w-[35rem] w-full h-[350px]"></iframe>
      </div>

      <div className="flex gap-10">
        <div class="relative hidden md:inline-block font-medium group mt-12">
          <div class="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-blue-500 -translate-x-0 -translate-y-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
          <div class="absolute inset-0 w-full h-full bg-background hover:border-2 hover:border-blue-500 group-hover:bg-blue-500"></div>
          <div
            class="relative md:w-[35rem] h-[355px] text-blue-500 group-hover:text-white"
            style={{
              direction: "rtl",
            }}>
            <iframe
              src="https://jobshunt-six.vercel.app/"
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

        <div class="relative hidden md:inline-block font-medium group mt-12">
          <div class="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-blue-500 -translate-x-0 -translate-y-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
          <div class="absolute inset-0 w-full h-full bg-background hover:border-2 hover:border-blue-500 group-hover:bg-blue-500"></div>
          <div
            class="relative md:w-[10.8rem] h-[355px] text-blue-500 group-hover:text-white"
            style={{
              direction: "rtl",
            }}>
            <iframe
              src="https://jobshunt-six.vercel.app/"
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
