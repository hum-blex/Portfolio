"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

type Skill = {
  name: string;
  percentage: number;
  icon: string;
};

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const radius = 40; 
  const circumference = 2 * Math.PI * radius; 
  const progress = circumference - (skill.percentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.5 }
    );
const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef); 
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef); 
      }
    };
  }, []);

  return (
    <div ref= {cardRef} className="flex flex-col items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-gray-600">
    <div className="relative flex items-center justify-center w-24 h-24 mb-4">
      <svg className="absolute w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#00D1FF" 
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? progress:circumference}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <span className="absolute text-xl text-white font-bold">{skill.percentage}%</span>
    </div>
    <Image
      src={skill.icon}
      alt={skill.name}
      width={500}
      height={500}
      className="w-12 h-12 mb-3 rounded-lg shadow-md"
    />
    <h3 className="text-lg text-white font-semibold mt-2 tracking-wider">{skill.name}</h3>
  </div>
  
  );
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "ASP.NET Core", percentage: 80, icon: "/asp.net.png" },
    { name: "SQL Server", percentage: 80, icon: "/sql.jpg" },
    { name: "Entity Framework", percentage: 80, icon: "/ef.png" },
    { name: "Next.js", percentage: 40, icon: "/next.svg" },
    { name: "TypeScript", percentage: 35, icon: "/ty.png" },
    { name: "TailwindCSS", percentage: 60, icon: "/tw.png" },
    {name : "Figma", percentage: 70, icon:"/figma.png"},
    {name: "Photoshop", percentage:50, icon:"/ps.png"},
    
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center p-8 bg-black"
    >
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
