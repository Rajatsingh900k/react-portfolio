import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { RiJavascriptFill, RiTailwindCssLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import profileImg from '../assets/MyPic.png';
import projectImg1 from '../assets/projects/cryptoWebApp.png';
import projectImg2 from '../assets/projects/groceryStore.png';

export const assets = {
    profileImg
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Tailwind', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB','MySQL']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Figma']
  }
];



export const projects = [
  {
    title: "Crypto WebApp",
    description: "A Crypto Web App that allows users to track real-time cryptocurrency prices, view detailed coin statistics, and analyze market trends with interactive charts.",
    image: projectImg1,
    tech: ["React","SCSS","JavaScript"],
    icons: [FaReact, RiJavascriptFill, BsFiletypeScss],
    demo: "https://react-crypto-app-ecru.vercel.app/",
    code: "https://github.com/Rajatsingh900k/react-crypto-app",
  },
  {
    title: "Grocery Store Management System",
    description: "The Grocery Store Management System is a web application designed to simplify and automate daily store operations. ",
    image: projectImg2,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaPython, SiMysql, RiJavascriptFill, FaHtml5, FaCss3 ],
    demo: "#",
    code: "https://github.com/Rajatsingh900k/Grocery-Store-webApp",
  }
];


export const workData = [
  {
    role: "Trainee ASE",
    company: "Accenture",
    duration: "Aug 2025 - Jan 2026",
    description:
      "As a Trainee Associate Software Engineer at Accenture, I am gaining hands-on experience in various technologies while building a strong technical foundation. My training includes learning SAP S/4HANA Materials Management, where I’m developing skills in enterprise resource planning, procurement processes, and system configuration to prepare for real-world project implementation.",
    color: "pink"
  },
  {
    role: "SDET Intern",
    company: "Automation Anywhere",
    duration: "Nov 2024 - Jan 2025",
    description:
      "As an SDET Intern at Automation Anywhere, I contributed to developing and executing automated test scripts to ensure the quality and reliability of software products. I worked closely with the QA and development teams to identify bugs, enhance test coverage, and improve automation frameworks, ensuring efficient and scalable testing processes.",
    color: "purple"
  }
];
