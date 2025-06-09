import React from "react";
import p1 from "../assets/123456.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen flex justify-center px-4 md:pl-[250px] lg:pl-[500px] items-center overflow-hidden bg-[#141516]"
    >
      {/* Background Image - Adjusts on Small Screens */}
      <div
        className="absolute top-0 left-0 h-full w-full md:w-1/2 bg-cover bg-center  bg-no-repeat z-0"
        style={{ backgroundImage: `url(${p1})` }}
      ></div>

      {/* Content - Responsive Adjustments */}
      <div className="w-full sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-auto md:h-[55vh] z-10 flex flex-col items-start text-white">
        {/* ABOUT Heading */}
        <div className="flex items-center">
          <hr className="w-8 sm:w-12 h-[1px] bg-gray-600 border-0 mr-2 sm:mr-4" />
          <p className="font-light tracking-[0.3em] uppercase font-sans text-[rgb(186,157,98)] text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            ABOUT
          </p>
        </div>

        {/* Paragraph - Adjusts Font & Line Height */}
        <p className="text-white flex h-full w-full items-center font-publicSans text-[10px] sm:text-xs md:text-sm lg:text-xl xl:text-2xl font-extralight tracking-[0.1em] leading-6 sm:leading-8 md:leading-[4em]">
        With a Deep Passion for Technology, I specialize in Machine Learning, Web Development, and Networking, crafting Seamless Digital Experiences. Constantly exploring New Innovations, I thrive on Solving Complex Challenges, Pushing Boundaries, and Transforming Ideas Into Reality through Code and Creativity.</p>

        {/* Button - Adjusts Width Responsively */}
        
        <button
  className="w-full font-light tracking-[0.3em] font-sans uppercase bg-[#2c2c2d] text-[rgb(186,157,98)] hover:text-black hover:bg-white py-6 px-4 mt-4"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/my_resume.pdf";
    link.download = "Raunaq_Alam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download CV
</button>



      </div>
    </section>
  );
}
