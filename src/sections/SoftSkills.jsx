import React from 'react';

const SoftSkills = () => {
  const softSkills = [
    { skill: "Communication", level: 90 },
    { skill: "Teamwork", level: 85 },
    { skill: "Problem Solving", level: 80 },
    { skill: "Adaptability", level: 70 },
    { skill: "Time Management", level: 75 }
  ];

  return (
    <section className="w-full p-4 sm:p-6">
      <div className="space-y-6">
        {softSkills.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-4xl mx-auto">
            <span className="text-xs sm:text-sm md:text-md flex justify-between tracking-[0.2em] font-light text-gray-400 w-full sm:w-[25vw]">
              {item.skill}
            </span>
            <div className="flex w-full h-[3px] bg-transparent mt-1">
              {/* Progress Bar */}
              <div
                className="flex h-[3px] rounded-full bg-gradient-to-l from-[rgb(186,157,98)] to-[#141516] shadow-lg transition-all duration-500"
                style={{ flexBasis: `${item.level}%` }}
              ></div>
            </div>
            {/* Progress Percentage */}
            <span className="text-[rgb(186,157,98)] text-sm">{item.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;