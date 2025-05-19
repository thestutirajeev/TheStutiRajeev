import React from "react";
import {
  FaJava, FaPython, FaGitAlt, FaDatabase, FaReact, FaNodeJs,
} from "react-icons/fa";
import {
  SiCplusplus, SiSpringboot, SiMongodb, SiMysql, SiPostman,
  SiDialogflow, SiStripe, SiExpress,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-700" /> },
      { name: "Python", icon: <FaPython className="text-yellow-600" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    ],
  },
  {
    category: "Frameworks/Stacks",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
      {
        name: "MERN Stack",
        icon: (
          <div className="flex gap-1">
            <SiMongodb className="text-green-700" />
            <SiExpress className="text-gray-700" />
            <FaReact className="text-blue-500" />
            <FaNodeJs className="text-green-600" />
          </div>
        ),
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Oracle", icon: <FaDatabase className="text-red-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-800" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "DialogFlow", icon: <SiDialogflow className="text-yellow-400" /> },
      { name: "Stripe API", icon: <SiStripe className="text-indigo-700" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-brown-700 mb-12">Skills</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {skillsData.map((group, idx) => (
          <div key={idx} className="p-6 bg-brown-50 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-brown-800 mb-4">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-800">
                  <div className="text-xl">{skill.icon}</div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
