import React from 'react';
import { Code2, Database, Server, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Server className="w-5 h-5" />, name: "Node.js", color: "bg-green-500" },
    { icon: <Database className="w-5 h-5" />, name: "Databases", color: "bg-blue-500" },
    { icon: <Code2 className="w-5 h-5" />, name: "APIs", color: "bg-purple-500" },
    { icon: <Zap className="w-5 h-5" />, name: "Performance", color: "bg-yellow-500" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
     
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                YC
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold">Yash Chauhan</h3>
                <p className="text-gray-400 mt-2">Backend Developer</p>
              </div>
            </div>
          </div>

         
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Hello there! 👋</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm <span className="text-white font-semibold">Yash Chauhan</span>, a passionate backend developer 
                who loves building robust and scalable server-side applications. I specialize in creating 
                efficient APIs, optimizing database performance, and architecting backend systems that power 
                amazing user experiences.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I transform complex business requirements into clean, maintainable code. Whether it's 
                designing RESTful APIs, implementing microservices, or optimizing database queries, 
                I'm always excited to tackle challenging backend problems.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition duration-300 hover:scale-105 transform"
              >
                <div className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white`}>
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

     
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
            <p className="text-gray-100 mb-6">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}