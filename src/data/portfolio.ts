import {
  FaBootstrap,
  FaCloud,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCloudinary,
  SiGeeksforgeeks,
  SiJavascript,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineSecurity,
  MdSmartToy,
} from "react-icons/md";
import { TbApi, TbBrandSocketIo, TbCodeDots, TbNetwork } from "react-icons/tb";
import type { IconType } from "react-icons";
import interviewAssistantImage from "../assets/interview-assistant.jpg";
import talkyImage from "../assets/talky.jpg";
import urlShortenerImage from "../assets/url-shortener.png";
import wanderlustImage from "../assets/wanderlust.jpg";
import blogifyImage from "../assets/Blog.jpg";
import notesAppImage from "../assets/Notes.jpg";

export const personal = {
  name: "Harsh Sahu",
  role: "Full Stack Developer",
  heroRole: "Full Stack Developer - MERN Stack Developer",
  tagline:
    "Building scalable and secure web applications with MERN Stack and modern backend technologies.",
  location: "Jhansi, Uttar Pradesh, India",
  phone: "+91 6388875540",
  email: "harshsahu1109@gmail.com",
  linkedin: "https://linkedin.com/in/harsh-sahu1109",
  github: "https://github.com/harshsahu11",
  resume:
    "https://drive.google.com/file/d/1dxvRm9539YgjmPu_bmlzuTDIaXIKWFzY/view?usp=sharing",
};

export const navItems = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

export const socials = [
  { label: "GitHub", href: personal.github, icon: FaGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${personal.email}`, icon: MdEmail },
];

export const tickerSkills = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "REST APIs",
];

export const aboutCards = [
  {
    title: "Education",
    lines: [
      "Hindustan College Of Science and Technology",
      "B.Tech CSE",
      "CGPA: 8.3",
    ],
    icon: TbCodeDots,
  },
  { title: "Location", lines: ["Jhansi, Uttar Pradesh"], icon: MdLocationOn },
  { title: "Specialization", lines: ["Full Stack Development"], icon: FaReact },
  {
    title: "Backend",
    lines: ["Node.js", "Express.js", "REST APIs"],
    icon: FaNodeJs,
  },
  { title: "Database", lines: ["MongoDB", "MySQL"], icon: FaDatabase },
  {
    title: "Achievements",
    lines: ["500+ LeetCode Problems", "200+ GeeksforGeeks Problems"],
    icon: SiLeetcode,
  },
];

export const stats = [
  { value: 4, suffix: "+", label: "Major Projects" },
  { value: 500, suffix: "+", label: "LeetCode Problems" },
  { value: 200, suffix: "+", label: "GeeksforGeeks Problems" },
  { value: 8.3, suffix: "", label: "CGPA", decimals: 1 },
];

export type SkillGroup = {
  title: string;
  icon: IconType;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: FaReact,
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind Css"],
  },
  {
    title: "Backend Development",
    icon: FaNodeJs,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  { title: "Databases", icon: FaDatabase, skills: ["MongoDB", "MySQL"] },
  { title: "Programming", icon: FaJava, skills: ["Java", "JavaScript"] },
  {
    title: "Tools",
    icon: SiPostman,
    skills: ["Git", "GitHub", "Postman", "Cloudinary", "MongoDB Atlas"],
  },
  {
    title: "Core CS",
    icon: TbNetwork,
    skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

export const progressSkills = [
  { label: "Frontend Development", value: 90, icon: FaReact },
  { label: "Backend Development", value: 92, icon: FaNodeJs },
  { label: "DSA & Problem Solving", value: 95, icon: TbCodeDots },
  { label: "Database Design", value: 88, icon: FaDatabase },
];

export const projects = [
  {
    title: "WanderLust",
    description:
      "Full-stack accommodation marketplace built for listing discovery, secure hosting workflows, and cloud-based media management.",
    highlights: [
      "Built end-to-end listing CRUD workflows with authentication-protected routes.",
      "Implemented role-based access control so only authorized users can manage listings.",
      "Integrated Cloudinary for scalable image upload, storage, and delivery.",
      "Designed MongoDB schemas to support search, filters, reviews, and listing management.",
    ],
    features: [
      "JWT Authentication",
      "RBAC",
      "Cloudinary Integration",
      "MongoDB Optimization",
    ],
    tech: ["MongoDB", "Express.js", "Node.js", "EJS", "Cloudinary"],
    icon: FaCloud,
    image: wanderlustImage,
    visual: "marketplace",
    gradient: "from-[#f4b64f]/30 via-[#10182b] to-[#00d9ff]/20",
    github: "https://github.com/Harshsahu11/WanderLust",
    live: "https://wanderlustproject-lj8s.onrender.com",
  },
  {
    title: "Talky",
    description:
      "Real-time messaging platform focused on secure one-to-one chat, live communication, and persistent conversation history.",
    highlights: [
      "Built real-time message delivery using Socket.IO for instant communication.",
      "Created JWT-protected APIs for user authentication and private chat access.",
      "Managed conversation and message persistence with MongoDB collections.",
      "Structured React UI for smooth chat interactions and clean state handling.",
    ],
    features: [
      "Socket.IO",
      "JWT Authentication",
      "REST APIs",
      "Real-time Communication",
    ],
    tech: ["MongoDB", "React", "Node.js", "Express", "Socket.IO"],
    icon: TbBrandSocketIo,
    image: talkyImage,
    visual: "chat",
    gradient: "from-[#00d9ff]/26 via-[#10182b] to-[#f4b64f]/16",
    github: "https://github.com/Harshsahu11/Talky",
    live: "https://talky-dbta.onrender.com",
  },
  {
    title: "URL Shortener",
    description:
      "Backend-focused URL shortening system with short-code generation, fast redirects, and traffic analytics.",
    highlights: [
      "Generated unique short URLs and mapped them to original long links.",
      "Implemented fast redirect logic using Express routes and MongoDB lookups.",
      "Tracked click analytics to measure link usage and traffic activity.",
      "Designed a simple, practical workflow for link creation, storage, and retrieval.",
    ],
    features: [
      "Link Generation",
      "Click Analytics",
      "MongoDB Storage",
      "Fast Redirection",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
    icon: TbApi,
    image: urlShortenerImage,
    visual: "analytics",
    gradient: "from-[#18233e] via-[#f4b64f]/18 to-[#00d9ff]/18",
    github: "https://github.com/Harshsahu11/URL_Shortener",
    live: "",
  },
  {
    title: "Interview AI Assistant",
    description:
      "AI-powered interview preparation assistant for practicing technical, behavioral, and HR-style questions.",
    highlights: [
      "Created an AI-assisted workflow for generating interview practice prompts.",
      "Helped users structure stronger answers for technical and HR rounds.",
      "Designed a clean frontend experience focused on repeated practice and readiness.",
      "Built the project to demonstrate prompt-driven UI thinking and AI product workflows.",
    ],
    features: [
      "AI Question Flow",
      "Answer Assistance",
      "Interview Practice",
      "Candidate Preparation",
    ],
    tech: ["React", "JavaScript", "AI Integration", "Tailwind CSS"],
    icon: MdSmartToy,
    image: interviewAssistantImage,
    visual: "ai",
    gradient: "from-[#00d9ff]/22 via-[#111a30] to-[#f4b64f]/24",
    github: "https://github.com/Harshsahu11/Interview-Assistant-ai",
    live: "https://interview-assistant-ai-bv3f.onrender.com",
  },
  {
    title: "Blogify",
    description:
      "A modern full-stack blogging platform that enables users to create, edit, publish, and manage blogs with an intuitive content management interface and responsive user experience.",

    highlights: [
      "Built complete blog creation and publishing workflows with rich content management.",
      "Implemented secure authentication and authorization for content creators.",
      "Designed responsive UI for seamless reading and writing experience across devices.",
      "Developed CRUD operations for creating, editing, deleting, and managing blog posts.",
    ],

    features: [
      "Blog Publishing",
      "Rich Content Editor",
      "User Authentication",
      "Responsive Design",
    ],

    tech: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "CSS3"],

    icon: TbCodeDots,
    image: blogifyImage,
    visual: "blog",

    gradient: "from-[#ff8a65]/20 via-[#10182b] to-[#42a5f5]/20",

    github: "https://github.com/Harshsahu11/Blogify",
    live: "https://blogify-ryzp.onrender.com/",
  },
  {
    title: "Notes App",
    description:
      "A responsive note management application that allows users to create, organize, and delete notes efficiently through a clean and user-friendly interface.",

    highlights: [
      "Built dynamic note creation and deletion functionality using React state management.",
      "Implemented responsive UI with real-time updates without page reloads.",
      "Designed structured note cards for better readability and organization.",
      "Focused on component-based architecture and reusable React components.",
    ],

    features: [
      "Create Notes",
      "Delete Notes",
      "Real-time Updates",
      "Responsive UI",
    ],

    tech: ["React", "JavaScript", "HTML5", "CSS3"],

    icon: FaReact,
    image: notesAppImage,
    visual: "notes",

    gradient: "from-[#ffd54f]/20 via-[#10182b] to-[#81c784]/20",

    github: "https://github.com/Harshsahu11/Notes-App",
    live: "https://notesappsync.netlify.app/",
  },
];

export const experience = {
  role: "Full Stack Web Developer Intern",
  company: "Unified Mentor",
  duration: "Nov 2024 - Dec 2024",
  description:
    "Built a MERN-based logistics platform for shipment booking workflows.",
  responsibilities: [
    "Designed REST APIs",
    "Developed backend services",
    "Built database schemas",
    "Implemented validation and error handling",
    "Optimized MongoDB queries using indexing",
  ],
  tech: ["MongoDB", "Node.js", "Express.js", "React.js", "REST APIs"],
};

export const achievements = [
  { title: "Solved 500+ LeetCode Problems", icon: SiLeetcode },
  { title: "Solved 200+ GeeksforGeeks Problems", icon: SiGeeksforgeeks },
  { title: "HackerRank Java Certification", icon: FaJava },
  {
    title: "Full Stack Developer Certification (RCPL India)",
    icon: MdOutlineSecurity,
  },
  {
    title: "Built multiple production-level MERN applications",
    icon: SiMongodb,
  },
];

export const iconMap = {
  React: FaReact,
  Node: FaNodeJs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  JavaScript: SiJavascript,
  HTML5: FaHtml5,
  Bootstrap: FaBootstrap,
  Cloudinary: SiCloudinary,
};
