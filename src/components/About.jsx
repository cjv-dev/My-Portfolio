import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // 20% visible bago mag-trigger
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-gray-50 py-10 min-h-screen justify-center flex items-center"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Image (walang animation) */}
        <div>
          <img
            src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/346256712_139290952390633_3798380128457331196_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gCGmfFJGQAcQ7kNvwExg9g3&_nc_oc=AdnjH3b3_Te4vuv-0ujLEGdmbbDEuYRYo9HftEnQhIrpkbRfrGgjFUqbq6PiUXNQBXQ&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=gsP_1Ns7H7j6e0LzmjS6CA&oh=00_AfVeiTXX0c8C2Pjqn7cM-2qG9YPwW60LVW3pTyRANt-hPw&oe=68A8C857"
            alt="CJ Valdez"
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>

        {/* Text (may fade in/out) */}
        <div
          ref={textRef}
          className={`space-y-4 transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-black">
            Hi, I'm Christian Jay Valdez
          </h2>
          <p className="text-black">UI/UX Designer & Front-End Developer</p>
          <p className="text-black">
            I specialize in building clean, fast, and responsive websites that
            prioritize user experience and accessibility.
          </p>
          <p className="text-black">
            I graduated with a degree in Computer Technology — proudly a Dean’s
            Lister and recipient of the Best in Thesis award.
          </p>

          <a
            href="#"
            className="mt-8 px-6 py-2 text-sm border border-black bg-blue-950 text-white hover:underline rounded transition duration-200 inline-block"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
