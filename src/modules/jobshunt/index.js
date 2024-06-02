import React from "react";
import LivePreview from "../../components/livePreview";
import Flow from "../../components/flow";

const imgPaths = ["/jobshunt/desk-main.svg", "/jobshunt/mob-main.svg"];

const Index = () => {
  return (
    <div className="grid gap-10">
      <LivePreview href={"https://jobshunt-six.vercel.app/"} />
      <Flow images={imgPaths} />
    </div>
  );
};

export default Index;
