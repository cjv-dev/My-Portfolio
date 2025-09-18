import React from 'react';

const Hero = () => {
  return (
    <main id="home" className=" bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center px-4 z-10 pt-28">
      <h1 className="text-4xl md:text-4xl font-bold text-black mb-4">Christian Jay Valdez</h1>
      <p className="text-xl md:text-2xl text-black">
        Aspiring Front-End Developer & UI/UX Designer from the Philippines
      </p>
      <p className="text-base text-black mt-2 max-w-lg">
        Passionate about building clean, responsive, and user-friendly interfaces.
      </p>

      <a
        href="https://drive.google.com/file/d/1jAux2MetRiGhpBHoqGbnQAzh7iPMiRE0/view?usp=sharing"
        className="mt-8 px-6 py-2 text-sm border border-black text-black rounded transition duration-200 hover:bg-blue-950 hover:text-white"
      >
        Download CV
      </a>
    </main>
  );
};

export default Hero;
