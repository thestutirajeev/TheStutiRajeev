import React from "react";

const experiences = [
  {
    title: "Android Development Intern",
    company: "Digipodium, Lucknow",
    duration: "Jan 2023 – May 2023",
    points: [
      "Built key app features in Kotlin, reducing load time by 25% through code optimization.",
      "Participated in UI/UX design, implementation, and testing phases.",
      "Delivered a client-ready, technically sound Android application."
    ],
  },
  {
    title: "Java Development Intern",
    company: "PriyaQubit Pvt Ltd, Hyderabad",
    duration: "Aug 2022 – Nov 2022",
    points: [
      "Developed and optimized Java modules, improving code efficiency by 20%.",
      "Collaborated with R&D to implement backend features and debug issues.",
      "Strengthened skills in OOP and software workflows."
    ],
  }
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-brown-700 mb-12 text-center">
        Experience
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 relative">

        {/* Timeline line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-brown-300 z-0"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative md:w-1/2 lg:w-1/3 bg-white shadow-md p-6 rounded-xl border-l-4 border-brown-600 md:border-l-0 md:border-t-4"
          >
            {/* Dot */}
            <div className="hidden md:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brown-600 rounded-full border-4 border-white z-10"></div>

            <h3 className="text-xl font-semibold text-brown-800">
              {exp.title}
            </h3>
            <p className="text-sm text-gray-600 italic">
              {exp.company} | {exp.duration}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
