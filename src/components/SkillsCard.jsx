import React from "react";

export default function SkillsCard({ heading, heading2, timeperiod, description }) {
  return (
    <>
      <div className="flex flex-col items-start w-full max-w-2xl p-2 sm:p-4">
        {/* Company Name */}
        <div className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white pb-2">
          {heading}
        </div>

        {/* Job Title */}
        <div className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-white pb-2">
          {heading2}
        </div>

        {/* Date */}
        <div className="text-xs sm:text-sm md:text-lg flex justify-between tracking-[0.2em] font-light text-gray-600">
          {timeperiod}
        </div>

        {/* Spacing */}
        <div className="mt-4 sm:mt-6"></div>

        {/* Description */}
        <div className="flex items-start font-publicSans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extralight tracking-[0.1em] leading-6 sm:leading-8 md:leading-[4em] text-gray-400">
          {description}
        </div>
      </div>
    </>
  );
}
