"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiStripe,
  SiJest,
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiMui,
  SiAmazon,
  SiVercel,
  SiReactrouter,
} from "react-icons/si";
import { FiFileText, FiPackage } from "react-icons/fi";
import { AiFillApi } from "react-icons/ai";
import { DiMaterializecss } from "react-icons/di";
import { GiAtom } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { FaServer } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import Image from "next/image";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  skills?: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  details: string[];
}

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

interface TechItem {
  name: string;
  icon: React.ReactNode;
  priority?: boolean;
}

interface TechCategories {
  languages: TechItem[];
  frontend: TechItem[];
  backend: TechItem[];
  tools: TechItem[];
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [techCategory, setTechCategory] = useState("languages");
  const [imageError, setImageError] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const education: EducationItem[] = [
    {
      institution: "FreeCodeCamp",
      degree: "Certifications: Responsive Web Design & JavaScript Algorithms",
      period: "Jun 2024 - Jul 2024",
      skills: ["Web Development", "HTML", "CSS", "JavaScript"],
    },
    {
      institution: "Brunel University",
      degree: "MA Digital Games: Theory & Games Design",
      period: "Sep 2022 - Sep 2023",
      skills: ["Game Development", "Unity Engine", "C#", "3D Modeling"],
    },
    {
      institution: "Brunel University",
      degree: "Computer Science BSc: Second Class Honours",
      period: "Sep 2018 - Sep 2021",
      skills: ["Software Development", "Java", "SQL"],
    },
  ];

  const experience: ExperienceItem[] = [
    {
      company: "Outlier AI",
      role: "Contract Software Developer",
      period: "Sep 2024 - Present",
      details: [
        "Refactored 50+ modules of junior developers' code, reducing bugs and improving runtime efficiency",
        "Audited and debugged AI-generated code for compliance with performance standards",
        "Enhanced Large Language Model (LLM) outputs through JavaScript framework integrations",
      ],
    },
    {
      company: "CodingSamurai",
      role: "Web Development Intern",
      period: "Feb 2025 - Mar 2025",
      details: [
        "Developed full-stack MERN e-commerce application with JWT authentication and Stripe integration",
        "Engineered WebSockets-based chat application using Socket.IO for real-time communication",
        "Contributed to live projects under mentorship during intensive 4-week internship",
      ],
    },
    {
      company: "DataAnnotation",
      role: "Web Developer - AI Trainer",
      period: "Apr 2024 - Sep 2024",
      details: [
        "Designed JavaScript/TypeScript coding prompts for AI chatbot training",
        "Evaluated AI-generated code for correctness and best practices adherence",
        "Authored technical explanations to improve chatbot instructional logic",
      ],
    },
  ];

  const projects: ProjectItem[] = [
    {
      title: "AI Chat Assistant",
      description:
        "An AI-powered Mern Assistant deployed on AWS EC2 with CI/CD using github actions and Jest testing.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "AWS EC2",
        "React Query",
        "GitHub Actions",
        "Jest",
        "Docker",
      ],
      link: "http://ec2-35-176-122-105.eu-west-2.compute.amazonaws.com/",
      github: "https://github.com/DevKhan786/chatgpt-clone",
      image: "/chat-app.png",
    },
    {
      title: "Amazon Clone",
      description:
        "Next.js e-commerce platform deployed on Vercel with CI/CD, integrating Firebase, Firestorage & Stripe.",
      tech: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "Stripe",
        "NextAuth",
        "Zustand",
        "Tailwind CSS",
        "DummyJSON API",
      ],
      link: "https://amazon-clone-sigma-ashen.vercel.app/",
      github: "https://github.com/DevKhan786/amazon-clone",
      image: "/amazon-clone.png",
    },
    {
      title: "Social Platform (NOT YET DEPLOYED)",
      description:
        "A gaming-centric social platform with real-time updates, profile management, unit testing and more.",
      tech: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "Recharts",
        "Unit testing",
        "Context API",
        "Tailwind CSS",
        "Jest",
      ],
      link: "/to-be-deployed",
      github: "https://github.com/DevKhan786/blog-app",
      image: "/socialapp.png",
    },
  ];

  const technologies: TechCategories = {
    languages: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, priority: true },
      { name: "TypeScript", icon: <SiTypescript />, priority: true },
      { name: "HTML5", icon: <SiHtml5 />, priority: true },
      { name: "CSS3", icon: <SiCss3 />, priority: true },
    ],
    frontend: [
      { name: "React.js", icon: <SiReact />, priority: true },
      { name: "Next.js", icon: <SiNextdotjs />, priority: true },
      { name: "Redux", icon: <SiRedux />, priority: true },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, priority: true },
      { name: "React Query", icon: <SiReactrouter />, priority: true },
      { name: "Zustand", icon: <FiPackage /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Shadcn UI", icon: <DiMaterializecss /> },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs />, priority: true },
      { name: "Express.js", icon: <SiExpress />, priority: true },
      { name: "MongoDB", icon: <SiMongodb />, priority: true },
      { name: "Mongoose", icon: <SiMongodb />, priority: true },
      { name: "Firebase", icon: <SiFirebase />, priority: true },
      { name: "REST APIs", icon: <AiFillApi /> },
      { name: "WebSockets", icon: <SiSocketdotio /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
      { name: "MERN Stack", icon: <SiReact /> },
      { name: "Cloud Functions", icon: <VscServerProcess /> },
    ],
    tools: [
      { name: "Git", icon: <SiGit />, priority: true },
      { name: "GitHub", icon: <SiGithub />, priority: true },
      { name: "Figma", icon: <SiFigma />, priority: true },
      { name: "Stripe", icon: <SiStripe />, priority: true },
      { name: "Jest Testing", icon: <SiJest />, priority: true },
      { name: "CI/CD Pipelines", icon: <FaServer /> },
      { name: "AWS EC2", icon: <SiAmazon /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Agile Development", icon: <GiAtom /> },
      { name: "WebSockets", icon: <SiSocketdotio /> },
      { name: "GitHub Actions", icon: <SiGithub /> },
      { name: "Unit Testing", icon: <SiJest /> },
    ],
  };

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <SiGithub />,
      link: "https://github.com/DevKhan786",
    },
    {
      name: "LinkedIn",
      icon: <BiLogoLinkedin />,
      link: "https://linkedin.com/in/hamzakhan786",
    },
    { name: "CV", icon: <FiFileText />, link: "/current.pdf" },
  ];

  const handleImageError = () => {
    setImageError(true);
  };

  const getFilteredTechnologies = (techList: TechItem[]) => {
    if (showAllTech) {
      return techList;
    }

    return techList.filter((tech) => tech.priority);
  };

  return (
    <div className="min-h-screen bg-black py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg overflow-hidden mb-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-4 bg-black p-0">
                {["home", "resume", "tech", "projects"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-none text-sm py-1 px-2 bg-black text-white 
                              data-[state=active]:bg-white data-[state=active]:text-black 
                              hover:bg-indigo-800 cursor-pointer transition-all duration-300"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "home" && (
                <Card className="bg-black border border-indigo-600 shadow-md shadow-indigo-900/30">
                  <CardHeader className="text-center py-6 sm:py-10">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="flex justify-center mb-4 sm:mb-6"
                    >
                      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-indigo-600 overflow-hidden shadow-lg shadow-indigo-900/40 hover:border-white transition-all duration-300">
                        {!imageError ? (
                          <Image
                            src="/profile.jpg"
                            alt="Hamza Khan"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl text-white font-bold">
                              HK
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight"
                    >
                      Hamza Khan
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-base sm:text-lg text-indigo-400 mb-4 sm:mb-6"
                    >
                      Full Stack & Front-end Developer
                    </motion.p>
                    <div className="flex justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 sm:p-3 rounded-full bg-indigo-900/50 hover:bg-black 
                                    border border-indigo-600 hover:border-white cursor-pointer
                                    transition-all duration-300"
                        >
                          <span className="text-xl sm:text-2xl text-white">
                            {link.icon}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-5">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Node.js",
                        "MongoDB",
                      ].map((skill, index) => (
                        <Badge
                          key={index}
                          className="bg-indigo-600 hover:bg-black text-white hover:text-white border border-transparent 
                                hover:border-white px-2 py-0.5 text-xs transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              )}

              {activeTab === "tech" && (
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="lg:w-1/4">
                    <div className="bg-black rounded-lg border border-indigo-600 p-2 shadow-md shadow-indigo-900/30">
                      <h3 className="text-white font-medium text-sm mb-2 px-2 border-b border-indigo-600 pb-2">
                        Categories
                      </h3>
                      <div className="space-y-1">
                        {Object.keys(technologies).map((category) => (
                          <button
                            key={category}
                            onClick={() => setTechCategory(category)}
                            className={`w-full text-left px-3 py-2 text-xs sm:text-sm rounded-md transition-all duration-300 cursor-pointer
                                      ${
                                        techCategory === category
                                          ? "bg-indigo-600 text-white"
                                          : "bg-black text-white hover:bg-indigo-800 border border-indigo-600"
                                      }`}
                          >
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowAllTech(!showAllTech)}
                        className="w-full mt-3 text-center px-3 py-2 text-xs rounded-md 
                                 bg-black text-white border border-indigo-600 hover:bg-indigo-800
                                 transition-all duration-300"
                      >
                        {showAllTech ? "Show Top Skills" : "Show All Skills"}
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-3/4">
                    <Card className="bg-black border border-indigo-600 h-auto shadow-md shadow-indigo-900/30">
                      <CardHeader className="py-3 px-4 border-b border-indigo-800/50">
                        <h3 className="text-sm font-medium text-white capitalize flex items-center justify-between">
                          <span>{techCategory}</span>
                          <span className="text-xs text-indigo-400">
                            {showAllTech
                              ? "Showing All Skills"
                              : "Showing Priority Skills"}
                          </span>
                        </h3>
                      </CardHeader>
                      <CardContent className="p-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                          {getFilteredTechnologies(
                            technologies[
                              techCategory as keyof typeof technologies
                            ]
                          ).map((tech, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.02 }}
                              className={`flex items-center p-2 sm:p-3 rounded-lg border
                                      transition-all duration-300 cursor-pointer
                                      ${
                                        tech.priority
                                          ? "bg-indigo-900/30 border-indigo-500 hover:bg-black hover:border-white"
                                          : "bg-black border-indigo-700 hover:border-white"
                                      }`}
                            >
                              <span className="text-indigo-400 text-lg sm:text-xl mr-2 sm:mr-3">
                                {tech.icon}
                              </span>
                              <span className="text-white text-xs sm:text-sm">
                                {tech.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div className="grid grid-cols-1 gap-10 ">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      className="bg-black rounded-lg border border-indigo-600 overflow-hidden shadow-md shadow-indigo-900/30"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3 h-36 sm:h-auto relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={2000}
                            height={2000}
                            className="w-full h-full object-cover sm:border-r border-indigo-600"
                          />
                        </div>
                        <div className="sm:w-2/3 p-3 sm:p-4">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-indigo-400 text-xs mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.tech.map((tech, i) => (
                              <Badge
                                key={i}
                                className="bg-indigo-600 hover:bg-black text-white hover:text-white 
                                        border border-transparent hover:border-white text-[10px] px-1.5 py-0
                                        transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button
                                className="w-full h-8 bg-indigo-600 hover:bg-black text-white hover:text-white 
                                            border border-transparent hover:border-white text-xs cursor-pointer
                                            transition-all duration-300"
                              >
                                Live Demo
                              </Button>
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button
                                className="w-full h-8 bg-black text-white hover:bg-indigo-600 
                                            border border-indigo-600 hover:border-white text-xs cursor-pointer
                                            flex items-center justify-center transition-all duration-300"
                              >
                                <SiGithub className="mr-1" size={14} />
                                Code
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "resume" && (
                <div className="space-y-4">
                  <Card className="bg-black border border-indigo-600 shadow-md shadow-indigo-900/30">
                    <CardHeader className="py-2 px-3 border-b border-indigo-800/50">
                      <h3 className="text-sm sm:text-base font-medium text-white">
                        Experience
                      </h3>
                    </CardHeader>
                    <CardContent className="p-3 space-y-4">
                      {experience.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-indigo-500 hover:border-white pl-2 sm:pl-3 
                                   hover:bg-indigo-900/20 rounded-r-md transition-all duration-300"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h3 className="text-sm sm:text-base font-medium text-white">
                              {exp.company}
                            </h3>
                            <p className="text-indigo-300 text-[10px] sm:text-xs">
                              {exp.period}
                            </p>
                          </div>
                          <p className="text-indigo-400 text-xs mb-2">
                            {exp.role}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {[
                              "JavaScript",
                              "TypeScript",
                              "LLM",
                              "Code Review",
                            ].map(
                              (skill, i) =>
                                index === 0 && (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="border-indigo-500 text-indigo-300 text-[10px] px-1.5 py-0"
                                  >
                                    {skill}
                                  </Badge>
                                )
                            )}
                            {["MERN", "Redux", "Websockets", "JWT"].map(
                              (skill, i) =>
                                index === 1 && (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="border-indigo-500 text-indigo-300 text-[10px] px-1.5 py-0"
                                  >
                                    {skill}
                                  </Badge>
                                )
                            )}
                            {[
                              "JavaScript",
                              "TypeScript",
                              "LLM",
                              "Code Review",
                            ].map(
                              (skill, i) =>
                                index === 2 && (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="border-indigo-500 text-indigo-300 text-[10px] px-1.5 py-0"
                                  >
                                    {skill}
                                  </Badge>
                                )
                            )}
                          </div>

                          <div className="space-y-1">
                            {exp.details.map((detail, i) => (
                              <p
                                key={i}
                                className="text-indigo-200 text-[10px] sm:text-xs leading-relaxed"
                              >
                                • {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-black border border-indigo-600 shadow-md shadow-indigo-900/30">
                    <CardHeader className="py-2 px-3 border-b border-indigo-800/50">
                      <h3 className="text-sm sm:text-base font-medium text-white">
                        Education
                      </h3>
                    </CardHeader>
                    <CardContent className="p-3 space-y-3">
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-indigo-500 hover:border-white pl-2 sm:pl-3 
                                   hover:bg-indigo-900/20 rounded-r-md transition-all duration-300"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h3 className="text-sm font-medium text-white">
                              {edu.institution}
                            </h3>
                            <p className="text-indigo-300 text-[10px]">
                              {edu.period}
                            </p>
                          </div>
                          <p className="text-indigo-400 text-xs mb-2">
                            {edu.degree}
                          </p>
                          {edu.skills && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {edu.skills.map((skill, i) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className="border-indigo-500 hover:border-white text-indigo-300
                                           hover:bg-black text-[9px] px-1 py-0 transition-all duration-300"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
