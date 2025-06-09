import React from "react";
import "./styles.css"; // Import external styles if needed

export default function Home() {
  return (
    <section id="home" className="relative h-screen flex overflow-hidden bg-[#141516]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Radial Gradient Effect */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_5%,rgba(0,0,0,1)_80%)] opacity-30"></div> */}

        {/* Dynamic Circles for Different Screen Sizes */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] border-l-4 border-t-4 border-[rgb(186,157,98)] rounded-bl-full opacity-40"></div>
        <div className="absolute top-0 right-0 w-[180px] sm:w-[280px] md:w-[350px] lg:w-[450px] h-[180px] sm:h-[280px] md:h-[350px] lg:h-[450px] border-l-4 border-t-4 border-[rgb(186,157,98)] rounded-bl-full opacity-40"></div>
        <div className="absolute top-0 right-0 w-[150px] sm:w-[250px] md:w-[320px] lg:w-[400px] h-[150px] sm:h-[250px] md:h-[320px] lg:h-[400px] border-l-4 border-t-4 border-[rgb(186,157,98)] rounded-bl-full opacity-30"></div>
        <div className="absolute top-0 right-0 w-[120px] sm:w-[220px] md:w-[280px] lg:w-[350px] h-[120px] sm:h-[220px] md:h-[280px] lg:h-[350px] border-l-4 border-t-4 border-[rgb(186,157,98)] rounded-bl-full opacity-20"></div>
      </div>

      {/* Main Layout */}
      <div className="w-screen h-screen flex items-center justify-center sm:justify-between px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Left-Side: Text Content */}
        <div className="w-full sm:w-[80%] md:w-[55%] lg:w-[45%] flex items-start text-left">
          <div>
            <div className="flex items-center space-x-3 mb-[10vw] md:mb-0">
              <hr className="w-12 h-[1px] bg-gray-600 border-0" />
              <p className="font-light tracking-[0.3em] uppercase font-sans text-[rgb(186,157,98)] text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                Code. Learn. Evolve.
              </p>
            </div>

            <h1 className="text-white text-[18px] sm:text-[30px] md:text-[42px] lg:text-[55px] xl:text-[72px] leading-tight font-serifDisplay">
              I am Raunaq, <br />
              a coder <br />
              & problem solver. <br />
              Driven by innovation.
            </h1>
          </div>
        </div>

        {/* Right-Side: Social Links (Hidden on Small Screens) */}
        <div className="absolute right-0 bottom-1/2 -translate-y-1/2 hidden sm:flex w-8 md:w-12 
                justify-center items-end rotate-[-90deg] space-x-2 sm:space-x-3 
                text-[1rem] font-normal uppercase tracking-[0.3em] text-gray-600">
          <a
            href="https://x.com/RaunaqAlam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer">Twitter/X</a>
          <a
            href="https://github.com/Raunaq2102001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer">Github</a>
          <a href="https://www.linkedin.com/in/raunaq-alam-a95bbb32a/"
            target="_blank"
            rel="noopener noreferrer" className="hover:text-white cursor-pointer">LinkedIn</a>
          <a href="https://www.instagram.com/your_instagram_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer">Instagram</a>

        </div>


      </div>
    </section>
  );
}
