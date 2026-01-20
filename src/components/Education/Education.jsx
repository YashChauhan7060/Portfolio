import React, { useState, useEffect } from "react";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { education } from './data.jsx';



const EducationCard = ({ edu, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div
      className={`flex w-full ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-center education-card-enter ${isVisible ? 'education-card-visible' : ''}`}
      style={{ '--delay': `${index * 0.2}s` }}
    >
      <div className={`relative w-full max-w-xl ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
      
        <div 
          className={`absolute top-8 ${isEven ? 'lg:right-0' : 'lg:left-0'} hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/50 z-10 timeline-dot`}
        >
          <GraduationCap className="w-6 h-6 text-white" />
        </div>

       
        <div className="relative group education-card">
         
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500" />
          
          <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300">
        
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-purple-400" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 font-medium mt-1">
                  {edu.school}
                </p>
              </div>
            </div>

           
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{edu.date}</span>
              </div>
              {edu.location && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{edu.location}</span>
                </div>
              )}
            </div>

           
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-purple-500/30 mb-4">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-white">
                Grade: {edu.grade}
              </span>
            </div>

           
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {edu.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden bg-slate-900">
   
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/20 to-slate-900" />
      
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto">
      
        <div className="text-center mb-16 sm:mb-20 section-header">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EDUCATION
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            My education has been a journey of learning and development. Here are the details of my academic background.
          </p>
        </div>

       
        <div className="relative">
         
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-600 to-purple-500/20 hidden lg:block timeline-line" />

          <div className="space-y-12 lg:space-y-16">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }

        .section-header {
          animation: fadeInUp 0.6s ease-out;
        }

        .education-card-enter {
          opacity: 0;
        }

        .education-card-visible {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: var(--delay);
        }

        .timeline-dot {
          animation: scaleIn 0.4s ease-out forwards;
          animation-delay: calc(var(--delay) + 0.3s);
        }

        .timeline-line {
          background: linear-gradient(to bottom, #3b82f6, #9333ea, rgba(147, 51, 234, 0.2));
        }

        .education-card:hover {
          transform: scale(1.02) translateY(-5px);
          transition: transform 0.3s ease;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          .education-card-enter {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;