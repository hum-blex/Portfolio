"use client";
import React from "react";
import Image from 'next/image';

const Hero = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen md:min-h-screen w-full">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bg.jpg"
          alt="Profile Image"
          width={6000}
          height={4000}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center p-6 md:p-12">
        <div className="relative z-10 justify-center text-white md:absolute md:left-[65%] md:bottom-auto bottom-10">
          <h1 className="text-5xl md:text-black lg:text-8xl md:text-7xl font-bold md:mb-20 mb-1 md:leading-tight">
            <span className="inline md:block">Pranay </span>
            <span className="inline md:block">Kauri</span>
          </h1>
          <h2 className="text-2xl lg:text-5xl md:text-4xl font-medium md:mb-14 mb-1">
            FullStack Developer
          </h2>
          <p className="text-lg md:text-white lg:text-3xl md:text-2xl md:mt-4">
            Creating today, shaping tomorrow.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-8 inline-block bg-gray-200 text-gray-900 font-bold px-6 py-3 rounded-3xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:bg-gray-300 hover:shadow-xl"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
