import React from "react";

const Flow = () => {
  return (
    <div className="text-[1.5rem] md:text-[2rem] font-semibold">
      <p>Flow</p>
      <div className="grid md:grid-cols-2 items-center justify-center gap-4 md:gap-10 mt-10">
        <img src="/jobshunt/desk-main.svg" />
        <img src="/jobshunt/mob-main.svg" className="h-[84%]" />
      </div>
    </div>
  );
};

export default Flow;
