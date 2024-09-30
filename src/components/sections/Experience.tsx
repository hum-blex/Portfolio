const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Dot Net Intern",
      company: "Tulips Technologies",
      duration: "4th July - 4th October 2024",
      technologies: [
        "ASP.Net Web API",
        "SQL Server",
        "Postman",
        "EntityFramework",
        "Dynamic SQL",
        "GitLab",
        "Stored Procedures",
      ],
      description:
        "Contributed to multiple projects by building RESTful APIs using ASP.NET Web API. Developed both static and dynamic stored procedures for efficient data management, and utilized Postman and Swagger for testing and API documentation. Implemented functionality to import and export Excel files via APIs, streamlining data exchange processes.",
    },
  ];

  return (
    <section
      id="experience"
      className="h-auto bg-gradient-to-b from-black via-gray-800 to-black text-white p-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <p className="text-gray-100 font-bold italic">
              {experience.company} &nbsp;•&nbsp; {experience.duration}
            </p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
              <ul className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-700 py-1 px-3 rounded-full font-semibold text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 md:font-semibold text-gray-300">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
