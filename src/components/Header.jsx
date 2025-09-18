import React from 'react';

const Header = () => {
  return (
    <header className="fixed whitespace-nowrap top-0 left-0 mt-2 mx-100 px-7 py-3 border space-x-10 flex justify-between items-center rounded-2xl bg-blue-950 text-white z-50">
      <nav className="flex space-x-10 text-[13px]">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <p>|</p>
      </nav>

      <a
        href="#about"
        className="flex items-center justify-center px-4 py-1 text-[13px] font-semibold bg-white text-black rounded-2xl hover:bg-gray-200 cursor-pointer"
      >
        Get Started
      </a>
    </header>
  );
};

export default Header;
