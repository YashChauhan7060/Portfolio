import React, { useState, useEffect } from 'react';
import { Code2, Database, Server, Zap, Award, Trophy, Target } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('coding');
  const [codingProfiles, setCodingProfiles] = useState([
    {
      platform: "LeetCode",
      rank: "Loading...",
      currentRating: "...",
      maxRating: "...",
      problemsSolved: "...",
      username: "yash05_",
      url: "https://leetcode.com/u/yash05_/",
      color: "from-orange-500 to-yellow-500",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      loading: true
    },
    {
      platform: "CodeForces",
      rank: "Loading...",
      currentRating: "...",
      maxRating: "...",
      problemsSolved: "...",
      username: "yashchuc22",
      url: "https://codeforces.com/profile/yashchuc22",
      color: "from-blue-500 to-cyan-500",
      logo: "https://codeforces.org/s/0/apple-icon-180x180.png",
      loading: true
    },
    {
      platform: "CodeChef",
      rank: "Loading...",
      currentRating: "...",
      maxRating: "...",
      problemsSolved: "...",
      username: "yashchauhan05",
      url: "https://www.codechef.com/users/yashchauhan05",
      color: "from-amber-600 to-orange-500",
      logo: "https://cdn.codechef.com/images/cc-logo.svg",
      loading: true
    },
    {
      platform: "AtCoder",
      rank: "Loading...",
      currentRating: "...",
      maxRating: "...",
      problemsSolved: "...",
      username: "yash05",
      url: "https://atcoder.jp/users/yash05",
      color: "from-gray-500 to-gray-400",
      logo: "https://img.atcoder.jp/assets/atcoder.png",
      loading: true
    }
  ]);

  const backendSkills = [
    {
      category: "Runtime & Frameworks",
      skills: [
        { name: "Node.js", icon: <Server className="w-5 h-5" /> },
        { name: "Express.js", icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      category: "Real-time & Messaging",
      skills: [
        { name: "Socket.IO", icon: <Code2 className="w-5 h-5" /> },
        { name: "RabbitMQ", icon: <Database className="w-5 h-5" /> }
      ]
    },
    {
      category: "Caching & Performance",
      skills: [
        { name: "Redis", icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      category: "Authentication & Security",
      skills: [
        { name: "JWT", icon: <Award className="w-5 h-5" /> },
        { name: "OAuth", icon: <Trophy className="w-5 h-5" /> }
      ]
    },
    {
      category: "Architecture",
      skills: [
        { name: "Microservices", icon: <Server className="w-5 h-5" /> },
        { name: "REST API", icon: <Code2 className="w-5 h-5" /> },
        { name: "System Design", icon: <Target className="w-5 h-5" /> }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        { 
          name: "GitHub", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        { 
          name: "VS Code", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        { 
          name: "Postman", 
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        },
        { 
          name: "MongoDB Compass", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "Render", 
          logo: "https://www.vectorlogo.zone/logos/render/render-icon.svg"
        }
      ]
    }
  ];

  useEffect(() => {
    const fetchProfileData = async () => {
      // Fetch CodeForces data
      try {
        const cfResponse = await fetch('https://codeforces.com/api/user.info?handles=yashchuc22');
        const cfData = await cfResponse.json();
        if (cfData.status === 'OK' && cfData.result.length > 0) {
          const user = cfData.result[0];
          setCodingProfiles(prev => prev.map(profile => 
            profile.platform === 'CodeForces' ? {
              ...profile,
              rank: user.rank || 'Unrated',
              currentRating: user.rating?.toString() || 'N/A',
              maxRating: user.maxRating?.toString() || 'N/A',
              loading: false
            } : profile
          ));
        }
      } catch (error) {
        console.error('Error fetching CodeForces data:', error);
        setCodingProfiles(prev => prev.map(profile => 
          profile.platform === 'CodeForces' ? {
            ...profile,
            rank: 'Expert',
            currentRating: '1676',
            maxRating: '1676',
            problemsSolved: '300+',
            loading: false
          } : profile
        ));
      }

      // Fetch LeetCode data (using public API)
      try {
        const lcQuery = `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
                reputation
              }
            }
          }
        `;
        
        const lcResponse = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: lcQuery,
            variables: { username: 'yash05_' }
          })
        });
        
        const lcData = await lcResponse.json();
        if (lcData.data?.matchedUser) {
          const user = lcData.data.matchedUser;
          const totalSolved = user.submitStats.acSubmissionNum.find(item => item.difficulty === 'All')?.count || 0;
          
          setCodingProfiles(prev => prev.map(profile => 
            profile.platform === 'LeetCode' ? {
              ...profile,
              rank: 'Guardian',
              currentRating: '2157',
              maxRating: '2167',
              problemsSolved: totalSolved.toString(),
              loading: false
            } : profile
          ));
        }
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        setCodingProfiles(prev => prev.map(profile => 
          profile.platform === 'LeetCode' ? {
            ...profile,
            rank: 'Guardian',
            currentRating: '2157',
            maxRating: '2167',
            problemsSolved: '1500+',
            loading: false
          } : profile
        ));
      }

      // Set fallback data for CodeChef and AtCoder (they don't have public APIs without authentication)
      setCodingProfiles(prev => prev.map(profile => {
        if (profile.platform === 'CodeChef') {
          return {
            ...profile,
            rank: '2-Star',
            currentRating: '1588',
            maxRating: '1655',
            problemsSolved: '46',
            loading: false
          };
        }
        if (profile.platform === 'AtCoder') {
          return {
            ...profile,
            rank: '9 Kyu',
            currentRating: '335',
            maxRating: '335',
            problemsSolved: '15+',
            loading: false
          };
        }
        return profile;
      }));
    };

    fetchProfileData();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my technical skills and expertise honed through competitive programming and backend development
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-full p-2 border border-gray-700 inline-flex">
            <button
              onClick={() => setActiveTab('coding')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'coding'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Coding Profiles
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'backend'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Backend Skills
            </button>
          </div>
        </div>

        {activeTab === 'coding' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-3">Data Structures & Algorithms Enthusiast</h3>
              <p className="text-lg text-gray-100">
                Passionate about refining my problem-solving logic through consistent practice on various programming platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {codingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${profile.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
                  <div className="relative bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-transparent transition duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`bg-white w-12 h-12 rounded-lg flex items-center justify-center p-2`}>
                        <img 
                          src={profile.logo} 
                          alt={profile.platform}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-400">View Profile →</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{profile.platform}</h4>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-3`}>
                      {profile.rank}
                    </p>
                    <div className="space-y-1 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Current Rating:</span>
                        <span className="font-semibold">
                          {profile.loading ? (
                            <span className="inline-block animate-pulse">...</span>
                          ) : (
                            profile.currentRating
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Max Rating:</span>
                        <span className="font-semibold">
                          {profile.loading ? (
                            <span className="inline-block animate-pulse">...</span>
                          ) : (
                            profile.maxRating
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Problems Solved:</span>
                        <span className="font-semibold">
                          {profile.loading ? (
                            <span className="inline-block animate-pulse">...</span>
                          ) : (
                            profile.problemsSolved
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'backend' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {backendSkills.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition duration-300 group"
                >
                  <h4 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-purple-400 transition duration-300">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-3 bg-gray-900 rounded-lg p-3 border border-gray-700 hover:border-gray-600 transition duration-300"
                      >
                        {skill.logo ? (
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-6 h-6"
                          />
                        ) : (
                          <div className="text-blue-400">
                            {skill.icon}
                          </div>
                        )}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;