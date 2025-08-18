import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCanva,
  SiGooglechrome,
  SiWix
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="bg-black min-h-screen text-white px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Title */}
        <h1 className="mb-12 font-bold tracking-wider text-center text-2xl">
           SKILLS
        </h1>

        {/* 🎨 TOOLS */}
        <div className="flex flex-col border md:flex-row items-start gap-170 p-6 rounded-lg transition duration-300 hover:bg-gray-900">
          <div className="flex items-center gap-2 text-5xl font-bold text-white md:w-40">
            <span className="text-sm text-gray-400">01</span>
            <h3>TOOLS</h3>
          </div>
          <div className="flex flex-wrap mt-5 justify-start gap-6 ">
            <FaFigma className="text-pink-500 text-5xl transition transform hover:-translate-y-2 duration-300" />
            <SiCanva className="transition transform hover:-translate-y-2 duration-300 text-blue-400 text-5xl" />
            <SiGooglechrome className="text-yellow-400 text-5xl transition transform hover:-translate-y-2 duration-300" />
           
          </div>
        </div>

        {/* 💻 TECH STACK */}
        <div className="flex flex-col border md:flex-row items-start gap-130 p-6 rounded-lg transition duration-300 hover:bg-gray-900">
          <div className="flex items-center gap-2 text-5xl font-bold text-white md:w-40">
            <span className="text-sm text-gray-400">02</span>
            <h3 className="whitespace-nowrap">TECH STACK</h3>
          </div>
          <div className="flex flex-wrap  mt-5 justify-start gap-6">
            <FaHtml5 className="text-orange-500 text-5xl transition transform hover:-translate-y-2 duration-300" />
            <FaCss3Alt className="text-blue-500 text-5xl transition transform hover:-translate-y-2 duration-300" />
            <FaJs className="text-yellow-400 text-5xl transition transform hover:-translate-y-2 duration-300" />
            <SiTailwindcss className="text-teal-400 text-5xl transition transform hover:-translate-y-2 duration-300" />
            <FaReact className="text-cyan-400 text-5xl transition transform hover:-translate-y-2 duration-300" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
