import React from "react";

const Flow = ({ images }) => {
  return (
    <div className="text-[1.5rem] md:text-[2rem] font-semibold">
      <p>Flow</p>
      <div className="flex mt-10 md:flex-row flex-col md:items-end items-center justify-start gap-4 md:gap-10">
        {images.map((image, index) => (
          <img key={index} src={image} className={index > 0 ? "h-[84%]" : ""} />
        ))}
      </div>
    </div>
  );
};

export default Flow;
