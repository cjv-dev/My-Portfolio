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
            src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/346256712_139290952390633_3798380128457331196_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEVG3ZwbVht0jFziu2EzsALR_BtEHETmVhH8G0QcROZWGG-IA6Qk-io1tbX8-US3ePzT8KFzdt4Y3Xkt84sMs7a&_nc_ohc=5Xnlwi5PB84Q7kNvwGyju1o&_nc_oc=AdluTXe-M0lv0VG38kaFYD84LEFz03MNCzTlV09aFm2KsTBBW-cGarMPlnPsi_894Sg&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=ML6rAwX9yH1C64d6jgNhiQ&oh=00_AfYs3ORrsBQNtEyhCtJVMBXcBd9u9YZXrOjht_rzYhWoYQ&oe=68D16E97"
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
