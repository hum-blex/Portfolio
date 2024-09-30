"use client";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (section: string) => section === activeSection;

  const getNavItemClass = (section: string) => `
    h-6 w-6 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"} 
    group-hover:opacity-100 ${
      isActive(section) ? "text-lime-500 " : "text-white "
    }
  `;

  const getTextClass = (section: string) => `
    ml-2 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"} 
    group-hover:opacity-100 hidden md:block ${
      isActive(section) ? "text-lime-500 font-bold text-xl" : "text-white"
    }
  `;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-1/2 left-6 transform -translate-y-1/2 bg-gray-500 z-50
                  rounded-2xl p-2 md:p-3 md:py-6 transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? " w-10 md:w-40 bg-opacity-100"
                      : "w-2 md:w-4 bg-opacity-30"
                  } hover:w-10 md:hover:w-40  bg-opacity-100`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="flex flex-col space-y-6">
        {/* Home */}
        <li
          className="group flex items-center space-x-4 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span className="flex items-center">
            <HomeIcon className={getNavItemClass("home")} />
            <span className={getTextClass("home")}>Home</span>
          </span>
        </li>

        <li
          className="group flex items-center space-x-4 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className="flex items-center">
            <UserIcon className={getNavItemClass("about")} />
            <span className={getTextClass("about")}>About</span>
          </span>
        </li>

        <li
          className="group flex items-center space-x-4 cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          <span className="flex items-center">
            <ClipboardDocumentListIcon
              className={getNavItemClass("projects")}
            />
            <span className={getTextClass("projects")}>Projects</span>
          </span>
        </li>

        <li
          className="group flex items-center space-x-4 cursor-pointer"
          onClick={() => scrollToSection("experience")}
        >
          <span className="flex items-center">
            <BriefcaseIcon className={getNavItemClass("experience")} />
            <span className={getTextClass("experience")}>Experience</span>
          </span>
        </li>

        <li
          className="group flex items-center space-x-4 cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          <span className="flex items-center">
            <AcademicCapIcon className={getNavItemClass("skills")} />
            <span className={getTextClass("skills")}>Skills</span>
          </span>
        </li>

        <li
          className="group flex items-center space-x-4 cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          <span className="flex items-center">
            <EnvelopeIcon className={getNavItemClass("contact")} />
            <span className={getTextClass("contact")}>Contact</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
