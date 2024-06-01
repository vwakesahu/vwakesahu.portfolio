import React from "react";
import WordRotate from "./ui/wordRotate";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Navbar = ({ arr, duration, href, newTab }) => {
  const pathName = usePathname();
  return (
    <div className="space-y-3 md:min-h-24 min-h-12 relative flex justify-between">
      {newTab ? (
        <a href={href} target="_blank">
          <WordRotate
            className="w-full hover:text-primary cursor-pointer"
            words={arr}
            duration={duration}
          />
        </a>
      ) : (
        <Link href={href}>
          <WordRotate
            className="w-full hover:text-primary cursor-pointer"
            words={arr}
            duration={duration}
          />
        </Link>
      )}

      {/* <p className=></p> */}
      <div className="border-b absolute md:bottom-12 bottom-0 w-full" />

      {pathName === "/" && (
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
      )}
    </div>
  );
};

export default Navbar;
