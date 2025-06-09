import React from "react";
import EmailComposer from "./EmailComposer";
import { useState } from "react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="contact"
      className="flex flex-col h-auto items-start px-[5vw] sm:px-[8vw] lg:px-[10vw] bg-[#141516]"
    >
      <div className="h-[1px] border-b-[1px] w-full border-b-gray-400 mb-[5vw]"></div>

      {/* Section Title */}
      <div className="font-light tracking-[0.3em] uppercase font-sans text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl pb-[5vw]">
        Get In Touch
      </div>

      {/* Description */}
      <div className="text-white text-sm sm:text-md md:text-xl lg:text-3xl xl:text-5xl leading-tight font-serifDisplay">
        I love to hear from you. Whether you have a question or just want to chat about design, tech & art — shoot me a message.
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-[5vw] ">
        <div className="w-full md:w-[30vw] h-auto md:h-[10vw] flex flex-col justify-evenly mb-5 md:mb-0">
          <div className="font-light tracking-[0.3em] uppercase font-sans text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl mb-[2vw]">
            Reach me at
          </div>

          <p className="tracking-[0.1em]">
            {/* Email */}
            <a
              href="mailto:rlam2102001@gmail.com"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl flex justify-between items-center font-light text-gray-600 hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              ralam2102001@gmail.com
            </a>
          </p>
          <p className="tracking-[0.1em]">
            <a
              href="tel:+919851750052"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl flex justify-between font-light text-gray-600 hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              +91 98517 50052
            </a>
          </p>
        </div>
        <div className="w-full md:w-[30vw] h-auto md:h-[10vw] flex flex-col justify-evenly mb-5 md:mb-0">
          <div className="font-light tracking-[0.3em] uppercase font-sans text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl mb-[2vw]">
            Social
          </div>

          <p className="flex flex-wrap items-center text-gray-600 tracking-[0.1em] font-light gap-2">
            {/* GitHub */}
            <a
              href="https://github.com/Raunaq2102001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              GitHub
            </a>,

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/raunaq-alam-a95bbb32a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              LinkedIn
            </a>,

            {/* Instagram */}
            <a
              href="https://www.instagram.com/your_instagram_username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              Instagram
            </a>
          </p>
          <p className="flex flex-wrap items-center text-gray-600 tracking-[0.1em] font-light gap-2">
            {/* GitHub */}
            <a
              href="https://x.com/RaunaqAlam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              X/Twitter
            </a>,

            {/* LinkedIn */}
            <a
              href="https://www.facebook.com/raunaq.alam.56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              FaceBook
            </a>,

            {/* Instagram */}
            <a
              href="mailto:Md.Raunaq.Alam@gcettb.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-[rgb(186,157,98)] cursor-pointer"
            >
              OutLook
            </a>
          </p>
        </div>
        <div className="w-full md:w-[30vw] h-auto md:h-[10vw] flex items-start justify-start">
        <button
        onClick={() => setIsOpen(true)}
        className="w-full font-light tracking-[0.3em] font-sans uppercase bg-[#2c2c2d] text-[rgb(186,157,98)] hover:text-black hover:bg-white py-6 px-4 mt-8"
      >
        Say Hello.
      </button>
      <EmailComposer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <div className="h-[1px] border-b-[1px] w-full border-b-gray-400 my-[10vw]"></div>
      
      

    </section>
  );
}