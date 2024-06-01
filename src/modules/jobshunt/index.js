import React from "react";
import LivePreview from "./livePreview";
import Flow from "./flow";

const Index = () => {
  return (
    <div className="grid gap-10">
      <LivePreview />
      <Flow />
    </div>
  );
};

export default Index;
