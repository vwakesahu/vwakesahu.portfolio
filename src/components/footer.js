import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-full md:max-w-6xl">
        <div className="space-y-3 grid min-h-12 relative">
          <div className="border-t" />
          <div className="flex justify-between items-center">
            <p>vwakesahu.tech</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/vwakesahu"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="cursor-pointer hover:text-primary transition-all ease-in-out hover:scale-125" />
              </a>
              <a
                href="https://linkedin.com/in/vwakesahu"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn className="cursor-pointer hover:text-primary transition-all ease-in-out hover:scale-125" />
              </a>
              <a
                href="https://instagram.com/viveksahu___"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-primary transition-all ease-in-out hover:scale-125" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
