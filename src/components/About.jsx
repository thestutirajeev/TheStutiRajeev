import React from 'react';
import backgroundimage from "../assets/bg2.png";

const About = () => {
  return (
    <section id="about" className="relative bg-white py-20 px-4 md:px-12 overflow-hidden" 
    style={{ backgroundImage: `url(${backgroundimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-700">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am currently pursuing my final year of MCA at VIT Vellore, having previously completed my BCA from University of Lucknow. Over the past few years, I’ve developed a strong interest in full-stack development, particularly working with the MERN stack and Java-based backend systems. I believe in learning by doing — whether it’s building a personal project, contributing to a team effort, or exploring new technologies through hands-on experimentation. This approach has helped me gain practical experience and deepen my understanding of both frontend and backend development. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As I enter the final phase of my academic journey, I am now actively seeking a <span className="font-semibold text-brown-800">software engineering internship</span> where I can apply my skills in real-world scenarios, collaborate with professionals, and contribute meaningfully to an organization’s goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
