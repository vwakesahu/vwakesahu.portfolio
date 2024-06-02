import React from "react";

const Flow = ({images}) => {
  return (
    <div className="text-[1.5rem] md:text-[2rem] font-semibold">
      <p>Flow</p>
      <div className="grid md:grid-cols-2 items-center justify-center gap-4 md:gap-10">
        <img src={images[0]} />
        <img src={images[1]} className="h-[84%]" />
      </div>
    </div>
  );
};

export default Flow;
