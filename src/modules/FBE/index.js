import Flow from "@/components/flow";
import LivePreview from "@/components/livePreview";
import React from "react";

const imgPaths = ["/fbe/desk-main.svg", "/fbe/mob-main.svg"];

const Index = () => {
  return (
    <div className="grid gap-10">
      <LivePreview href={"https://frames-by-engineer.vercel.app/"} />
      <Flow images={imgPaths} />
    </div>
  );
};

export default Index;
