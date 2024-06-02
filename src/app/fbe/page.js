'use client'
import Navbar from "@/components/navbar";
import Index from "@/modules/FBE";
import React from "react";
const navItems = ["Frames", "Home"];
const FBE = () => {
  return (
    <div className="md:flex md:items-center md:justify-center">
      <div className="w-full md:max-w-6xl">
        <Navbar arr={navItems} duration={1500} href={'/'} />
        <Index />
      </div>
    </div>
  );
};

export default FBE;
