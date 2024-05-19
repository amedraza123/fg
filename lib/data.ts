import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",icon: React.createElement(FaReact),
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ahmed Raza",
    location: "Pakistan, Lahore",
    description:
      "After a brief period of intensive study, I embarked on my professional journey as a front-end developer, demonstrating rapid growth and adaptability in the tech industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Pakistan, Lahore",
    description:
      "Commencing my career in 2020, I specialized in front-end development, mastering modern frameworks and libraries. My dedication led to significant contributions and recognition in the field.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Software Engineer at Slack",
    location: "Remote",
    description:
      "In 2023, I joined Slack as a Software Engineer, leveraging my skills in both front-end and back-end development. This role allowed me to expand my expertise across the full technology stack, including React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB.",
      icon: React.createElement(FaReact), // Assuming WorkIcon is imported or defined elsewhere
    date: "2023 - Present",
  },
  
] as const;
export const projectsData = [
  {
    title: "Cv-Builder",
    description: "Since embarking on my journey in web development with the creation of my inaugural React project, I have discovered a profound appreciation and enthusiasm for the field. .",
    tags: ["React", "Next.js",  "Tailwind", ],
    imageUrl: corpcommentImg,
    url: "https://cv-builder78.netlify.app/" , // Ensuring consistency
  },
  {
    title: "Website Template for a tech company",
    description: " I'd especially love to work at a startup on a tight knit team where I can make an impact quickly. If you're hiring, let's chat!.",
    tags: ["React", "TailWind",],
    imageUrl: rmtdevImg,
    url: "https://enchanting-cascaron-b65207.netlify.app", // Ensuring consistency
  },
  {
    title: "Eccomerence-App",
    description: "My First React.js Project.",
    tags: ["React", "Tailwind",],
    imageUrl: wordanalyticsImg,
    url: "https://example.com/wordanalytics", // Ensuring consistency
  },
];



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Boots strap", 
  "Framer Motion",
] as const;
