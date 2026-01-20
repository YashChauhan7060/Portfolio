"use client";

import { useState } from 'react';
import { Github, ExternalLink, X, Users, Code2, Zap, MessageSquare, Lock, Cloud, Server, Database, Sparkles, ArrowRight } from 'lucide-react';
import { projects } from './projects';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const iconMap = {
    Zap: Zap,
    MessageSquare: MessageSquare,
    Lock: Lock,
    Cloud: Cloud,
    Server: Server,
    Database: Database
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5 text-white" /> : null;
  };

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
   
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium tracking-wide text-cyan-300">Featured Work</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          
          <div className="flex justify-center gap-1 mb-8">
            <div className="w-3 h-3 rounded-full bg-cyan-400" />
            <div className="w-12 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
            <div className="w-3 h-3 rounded-full bg-violet-400" />
          </div>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions with cutting-edge technologies and scalable architectures
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
            
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
              
        
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800 group-hover:border-slate-700 transition-all duration-500">
           
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${project.color} px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5`}>
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.webapp !== "#" && (
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

             
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

           
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <span className="text-sm font-medium text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}
                          style={{ opacity: hoveredIndex === index ? 1 : 0.5, transition: 'opacity 0.3s', transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-slate-900 rounded-3xl shadow-2xl w-full max-w-5xl my-8 border border-slate-800 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
     
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${selectedProject.color} opacity-10 blur-[100px]`} />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[80px]" />

          
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <div className="relative h-64 sm:h-80">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent`}>
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                
                  <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                      About This Project
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                
                  <div>
                    <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                      <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-slate-600 transition-colors group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedProject.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                            {getIcon(feature.icon)}
                          </div>
                          <h5 className="text-base font-semibold text-white mb-1">{feature.title}</h5>
                          <p className="text-sm text-slate-400">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                 
                  <div>
                    <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                      <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                      Technical Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.techHighlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
                        >
                          <Code2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

             
                  <div>
                    <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                      <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${selectedProject.color}`} />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-medium rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

               
                  {selectedProject.contributors && (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-400" />
                        Team Members
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.contributors.map((contributor, index) => (
                          <div
                            key={index}
                            className="px-5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 hover:border-violet-500/50 transition-colors"
                          >
                            <span className="text-slate-200 font-medium">{contributor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

              
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-semibold transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </a>
                    {selectedProject.webapp !== "#" && (
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r ${selectedProject.color} font-semibold hover:opacity-90 transition-opacity shadow-lg`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
