"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FaUserGraduate, FaCode, FaPaintBrush } from "react-icons/fa";
import { newsreader } from "@/components/fonts";

export default function AboutMe() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <section
        id="about"
        className={`${newsreader.className} min-h-screen flex flex-col justify-center p-8`}
      >
        <h2 className="text-4xl font-semibold text-center mb-8">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-12">
          <FaUserGraduate className="text-6xl text-blue-500 mb-6 md:mb-0" />
          <p className="text-lg text-center md:text-left max-w-3xl">
            Hi, I&apos;m Pranay Kauri, a final year Computer Science student at
            Kathmandu University, Nepal. I specialize in backend development
            with ASP.NET and SQL Server, and I&apos;m currently expanding my
            expertise in frontend development with technologies like Next.js and
            TypeScript.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-12">
          <FaCode className="text-6xl text-green-500 mb-6 md:mb-0" />
          <p className="text-lg text-center md:text-left max-w-3xl">
            I build robust, scalable web applications and take pride in writing
            clean, efficient code. Whether it&apos;s backend APIs with Entity
            Framework or crafting modern, responsive interfaces using
            TailwindCSS, I’m always striving for excellence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-12">
          <FaPaintBrush className="text-6xl text-yellow-500 mb-6 md:mb-0" />
          <p className="text-lg text-center md:text-left max-w-3xl">
            In addition to coding, I enjoy designing user interfaces. With
            proficiency in Photoshop and Figma, I bring creativity into my
            projects to ensure not just functionality but also user-friendly and
            aesthetically pleasing designs.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => scrollToSection("skills")}
            className="bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-full transition transform hover:scale-105"
          >
            Check Out My Skills
          </button>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
