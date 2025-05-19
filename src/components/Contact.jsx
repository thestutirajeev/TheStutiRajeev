import React from "react";
import { Mail, Linkedin, Github, Instagram, Twitter, Camera } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import profilePic from "../assets/P2.png";
import backgroundimage from "../assets/bg2.png";

const Contact = () => {
  const links = [
    {
      icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:thestutirajeev@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/thestutirajeev",
    },
    {
      icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/thestutirajeev",
    },
    {
      icon: <SiLeetcode  className="w-5 h-5" />, label: "LeetCode", href: "https://leetcode.com/thestutirajeev",
    },
    {
      icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/thestutirajeev",
    },
    {
      icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://twitter.com/thestutirajeev",
    },
  ];

  return (
    <section id="contact" className="py-16 px-6 md:px-12 "
      style={{ backgroundImage: `url(${backgroundimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Left: Image */}
        <div className="hidden md:block">
          <img
            src={profilePic}
            alt="Stuti Rajeev"
            className="rounded-2xl w-full max-w-sm mx-auto shadow-lg"
          />
        </div>

        {/* Middle: Message */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">Let’s Connect!</h2>
          <p className="text-brown-700 mb-6 text-lg max-w-2xl">
            I'm always open to exciting opportunities—be it a role that aligns with my skills,
            collaboration on meaningful projects, or simply exchanging ideas. <br className="hidden md:inline" />
            If you have a suggestion, an opportunity, or just want to connect—feel free to reach out.
            I'd love to hear from you! <br></br>Email me at <span className="font-semibold text-brown-800"> thestutirajeev@gmail.com</span>.
          </p>

          {/* Right: Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center md:justify-start">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brown-700 bg-white shadow px-4 py-2 rounded-lg hover:text-brown-900 hover:shadow-md transition"
              >
                {link.icon}
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
