import { Zap, MessageSquare, Lock, Cloud, Server, Database } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "CareerSphere",
    subtitle: "Real-Time Professional Networking Platform",
    description: "A full-stack Job Portal & Professional Networking Application built using the MERN Stack. This platform integrates a LinkedIn-style networking system, allowing users to connect, share multimedia posts, and interact in real-time using Socket.io.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT", "Cloudinary", "Multer"],
    github: "https://github.com/YashChauhan7060/CareerSphere",
    webapp: "https://careersphere-frontend.onrender.com",
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: "Zap",
        title: "Real-Time Networking",
        desc: "Instant connection requests and live updates"
      },
      {
        icon: "MessageSquare",
        title: "Live Engagement",
        desc: "Real-time likes and comments across all users"
      },
      {
        icon: "Lock",
        title: "Secure Auth",
        desc: "JWT authentication with HTTP-only cookies"
      },
      {
        icon: "Cloud",
        title: "Media Management",
        desc: "Cloudinary integration for optimized storage"
      }
    ],
    techHighlights: [
      "Socket.io for real-time communication",
      "Bcrypt password hashing",
      "Multer for file uploads",
      "Custom authentication middleware"
    ]
  },
  {
    id: 2,
    title: "Sangam Samvad",
    subtitle: "Scalable Blog Platform",
    description: "A production-grade Blog Application built using Microservices Architecture. Demonstrates modern backend engineering with service decoupling, caching, asynchronous communication, and secure authentication.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    tags: ["Node.js", "Microservices", "Redis", "RabbitMQ", "PostgreSQL", "Docker", "OAuth", "Express.js"],
    github: "https://github.com/YashChauhan7060/Sangam-Samvad",
    webapp: "#",
    color: "from-purple-500 to-pink-500",
    features: [
      {
        icon: "Server",
        title: "Microservices",
        desc: "Decoupled services for scalability"
      },
      {
        icon: "Database",
        title: "Redis Caching",
        desc: "Optimized performance with caching"
      },
      {
        icon: "MessageSquare",
        title: "RabbitMQ",
        desc: "Asynchronous event-driven communication"
      },
      {
        icon: "Lock",
        title: "Google OAuth",
        desc: "Secure authentication + JWT"
      }
    ],
    techHighlights: [
      "Event-driven microservices architecture",
      "Docker containerization",
      "Horizontally scalable design",
      "REST API with JWT validation"
    ],
    contributors: ["Yash Chauhan", "Mahi Agnihotri", "Ansh Maheshwari"]
  }
];