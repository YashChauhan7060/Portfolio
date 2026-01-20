import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0e27] to-[#050811] text-white py-8 px-4 overflow-hidden">
   
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
       
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block">
            Yash Chauhan
          </h2>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact Us", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-white text-xs font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-5"></div>

        <div className="flex justify-center gap-3 mb-5">
          {[
            { icon: <FaGithub size={16} />, link: "https://github.com/YashChauhan7060" },
            { icon: <FaTwitter size={16} />, link: "https://x.com/YashChauha50967" },
            { icon: <FaLinkedin size={16} />, link: "https://www.linkedin.com/in/yashchauhan24/" },
            { icon: <FaInstagram size={16} />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500">
          © 2027 Yash Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;