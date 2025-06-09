import React from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#141516] z-50 flex flex-wrap justify-between items-center">
      {/* Navbar Links */}
      <div className="w-full mx-4 sm:mx-10 md:mx-20 
                      text-[9px] xs:text-[10px] sm:text-[12px] md:text-[14px] 
                      flex justify-between font-[Public Sans] tracking-[0.2em] font-light">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            className=" cursor-pointer flex-1 flex justify-center items-center text-center 
                      text-white transition-all hover:text-[rgb(186,157,98)] 
                      shadow-[0_0_0_0.25px_rgb(186,157,98)] 
                      h-10 xs:h-11 sm:h-12 md:h-14"
          >
            {item}
          </Link>
        ))}

        {/* Dark Mode Toggle */}
        {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4">
          <DarkModeToggle />
        </div> */}
      </div>
    </nav>
  );
}
