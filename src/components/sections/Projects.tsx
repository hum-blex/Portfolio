"use client";
import { useState } from 'react';
import Image from 'next/image';
import {sans} from '../fonts';
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectList: Project[] = [
    {
      title: 'Parcel',
      description: `"Parcel" is a web-based application aiming to provide secure email communication and efficient file transfer for businesses.
      It is built on .NET Framework and the application ensures security through email encryption, converting content into ciphertext that requires decryption with a key. Offering file transfer option, "Parcel" serves as a versatile solution for sharing
sensitive documents within organizations, encompassing prototypes, budget reports, and confidential files. `,
      tech: ['ASP.NET Core', 'MVC', 'AES'],
      image: '/parcel.png', 
    },
    {
      title: 'BizzBuzz',
      description: 'Bizz-Buzz is a form of e-commerce that we have designed for small businesses to expand and venture into this digital world. Our platform provides users with features like product reviews, thorough product descriptions, and a secure payment method. Built a scalable e-commerce platform using the MERN stack with a NoSQL database for efficient data storage and retrieval, powered by the dynamic and interactive features of JavaScript.',
      tech: ['MERN Stack', 'NoSQL'],
      image: '/bizzbuzz.png', 
    },
    {
      title: 'Wheels 2 Train',
      description: `Wheels 2 Train is a single player focus-inducing game inspired by its andriod counterpart named "2 Cars" made by Ketchapp.The main functionality of this game is to check one's potential to focus on 2 different objects simultaneously. C++ is the core programming language for this game with QT as its graphical framework and SQL as its database. `,
      tech: ['C++','QT','SQL'],
      image: '/w2t.jpg', 
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={`${sans.className} h-auto bg-gradient-to-b from-neutral-800 to-zinc-950 text-white p-8`}>
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openModal(project)}
          >
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

            <div className="bg-gray-500 p-2 rounded-md">
              <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-zinc-700 text-sm py-1 px-2 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white hover:text-gray-400"
            >
              &times;
            </button>

            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              height= {600}
              width={1000}
              className=" object-cover rounded-md mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>

            <p className="mb-4">{selectedProject.description}</p>

            <div className="bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
              <ul className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-zinc-700 text-sm py-1 px-2 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

           
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
