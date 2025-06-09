import React from "react";
import SkillsCard from "../components/SkillsCard"; // Ensure correct file name
import SkillsSection from "./SkillsSection";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col h-auto xl:h-[110vw] items-start px-[5vw] sm:px-[8vw] lg:px-[10vw] pt-[10vw] bg-[#141516]"
    >
      {/* Skills Title */}
      <div className="font-light tracking-[0.3em] uppercase font-sans text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl pb-[5vw]">
        Skills
      </div>
      <div className="text-white text-sm sm:text-md md:text-xl lg:text-3xl xl:text-5xl leading-tight font-serifDisplay">
      I specialize in Machine Learning, Web Development, and Networking. My problem-solving mindset, adaptability, and teamwork fuel my passion for innovation.
      </div>

      {/* Skills and Education Sections */}
      <div className="flex flex-col lg:flex-row flex-wrap pt-[10vw] w-full items-center justify-evenly gap-10 lg:gap-20">
        
        {/* Skills Section */}
        <div className="flex flex-col mb-[50px] xl:mb-[0] w-full lg:w-[45%]">
          <div className="font-light tracking-[0.3em] uppercase font-sans text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl pl-[5vw]">
            Skills
          </div>
          <div className="h-auto max-h-[900px] w-full flex items-start">
            <div className="relative flex flex-col items-center min-h-[60vh] xl:h-[60vw] bg-[#141516] py-12">
              
              {/* Timeline Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-600 hidden lg:block"></div>

              {/* Timeline Dots - Aligned Properly */}
              <div className="absolute  flex-col items-center justify-between h-full hidden lg:flex">
                <div className="w-4 h-4 bg-[rgb(186,157,98)] rounded-full absolute top-[20%]"></div>
                <div className="w-4 h-4 bg-[rgb(186,157,98)] rounded-full absolute top-[50%]"></div>
                <div className="w-4 h-4 bg-[rgb(186,157,98)] rounded-full absolute top-[80%]"></div>
              </div>
            </div>
            <div className="p-[3vw]">
              <SkillsSection />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col mt-[50px] xl:mt-[0] w-full lg:w-[45%]">
          <div className="font-light tracking-[0.3em] uppercase font-sans text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl pl-[5vw]">
            Education
          </div>
          <div className="h-auto max-h-[900px] w-full flex items-start">
            <div className="relative flex flex-col items-center min-h-[60vh] xl:h-[60vw] bg-[#141516] py-12">
              
              {/* Timeline Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-600 hidden lg:block"></div>

              {/* Timeline Dots - Aligned Properly */}
              <div className="absolute  flex-col items-center justify-between h-full hidden lg:flex">
                <div className="w-4 h-4 bg-[rgb(186,157,98)] rounded-full absolute top-[20%]"></div>
                <div className="w-4 h-4 bg-[rgb(186,157,98)] rounded-full absolute top-[50%]"></div>
                <div className="w-4 h-4 bg-[rgb(186,157,98)] rounded-full absolute top-[80%]"></div>
              </div>
            </div>
            <div className="p-[3vw]">
              <SkillsCard
                heading="B.Tech in Computer Science and Engineering (CSE)"
                heading2="Maulana Abul Kalam Azad University of Technology(MAKAUT)"
                timeperiod="September 2021 - Present"
                description="Current CGPA : 8.33"
              />
              <SkillsCard
                heading="Higher Secondary Examination"
                heading2="West Bengal Council of Higher Secondary Education (WBCHSE)"
                timeperiod="March 2019 - March 2020"
                description="Passed with 90% Marks scoring 451 out of 500"
              />
              <SkillsCard
                heading="Secondary Examination"
                heading2="West Bengal Board of Secondary Education (WBBSE)"
                timeperiod="January 2017 - March 2018"
                description="Passed with 90% Marks scoring 635 out of 700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
