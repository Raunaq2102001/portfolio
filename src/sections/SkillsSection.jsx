import React from "react";
import SoftSkills from "./SoftSkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired, faShieldAlt, faBug } from "@fortawesome/free-solid-svg-icons";

import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs, FaCode ,FaLinux 
} from "react-icons/fa";
import { 
  SiC, SiMysql, SiMongodb, SiTensorflow, SiAnaconda, SiJupyter, SiSelenium 
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-500" /> },
    { name: "React JS", icon: <FaReact size={50} className="text-blue-400" /> },
    { name: "GitHub", icon: <FaGithub size={50} className="text-white" /> },
    { name: "Node JS", icon: <FaNodeJs size={50} className="text-green-500" /> },
    { name: "Python", icon: <FaPython size={50} className="text-blue-300" /> },
    { name: "Java", icon: <FaJava size={50} className="text-red-500" /> },
    { name: "C", icon: <SiC size={50} className="text-blue-600" /> },
    { name: "SQL", icon: <SiMysql size={50} className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={50} className="text-orange-500" /> },
    { name: "Anaconda", icon: <SiAnaconda size={50} className="text-green-400" /> },
    { name: "Jupyter", icon: <SiJupyter size={50} className="text-orange-400" /> },
    { name: "Selenium", icon: <SiSelenium size={50} className="text-green-500" /> },
   
    { name: "MATLAB", icon: <FaCode size={50} className="text-red-600" /> } ,// Placeholder icon
    { name: "Wireshark", icon: <FontAwesomeIcon icon={faNetworkWired} size="2x" className="text-blue-500" /> },
  { name: "Metasploit", icon: <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-red-500" /> },
  { name: "Burp Suite", icon: <FontAwesomeIcon icon={faBug} size="2x" className="text-orange-500" /> },

    { name: "Linux", icon: <FaLinux size={50} className="text-white" /> }
];



  return (
    <section>
      {/* Title */}
      <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white pb-[3vw]">Technical Skills</h2>

      {/* Skills Grid with Vertical Scroll */}
      <div className="max-w-4xl mx-auto">
        <div className="h-[50vw] sm:h-[45vw] md:h-[38vw] lg:h-[30vw] xl:h-[25vw] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-md">
                {skill.icon}
                <span className="text-white font-medium mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white py-[3vw]">Soft Skills</h2>

      <SoftSkills/>


    </section>
  );
}