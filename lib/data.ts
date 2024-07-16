import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";

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
    name: "Experiences",
    hash: "#experience",
  },
  // {
  //     name: "Contact",
  //     hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Senior Full Stack Engineer",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://evolutioniq.com/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "EvolutionIQ"
      ),
      " | New York, NY"
    ),
    description:
      "Joined STD(Short Term Disability) team and built claims datatable, optimized it and improved it. Also, built claim analytics page. Used React.js, Material UI, TypeScript, Remix, Python, and FastAPI.",
    icon: React.createElement(FaReact),
    date: "Mar 2022 - Current",
  },
  {
    title: "Senior Full Stack Engineer",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://www.tradingpaints.com/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "Trading Paints"
      ),
      " | Allentown, PA"
    ),
    description:
      "Worked as a solo developer under CEO for this project and built version 2 of this car painting web app. Used React.js, Redux, Material UI, Konva.js, Node.js, TypeScript, Express.js, and MySQL.",
    icon: React.createElement(FaReact),
    date: "Jul 2019 - Feb 2022",
  },
  {
    title: "Senior Front End Engineer",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://surrealevents.com/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "SURREAL Events"
      ),
      " | Alpharetta, GA"
    ),
    description:
      "I was a first Front End developer in this company, and developed the Virtual Event app from scratch to production level. Collaborated with Game Team and Back End Team, and integrated game streaming with WebRTC and WebSocket. As the company grows, I worked as a Senior Front End Engineer and led & mentored junior developers. Tech is based on React.js, TypeScript, Next.js, Redux and Material UI.",
    icon: React.createElement(FaReact),
    date: "Mar 2016 - Jun 2019",
  },
  {
    title: "Full Stack Developer",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://rh.com/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "Restoration Hardware"
      ),
      " | Corte Madera, CA"
    ),
    description:
      "I was in Cart/Checkout team in this ecommerce project, enhanced page performance, and fixed bugs and issues. Also Established POS(Point Of Sale) feature in the Cart/Checkout process. Used React.js, TypeScript, Node.js, GraphQL, Prisma, Material UI, PostgreSQL",
    icon: React.createElement(FaReact),
    date: "Apr 2014 - Feb 2016",
  },
  {
    title: "BA in Computer Science",
    location: "Colgate University | Hamilton, NY",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2010 - Mar 2014",
  },
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "Typing Speed",
    description:
      "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: typingSpeedImage,
    projectUrl: "https://github.com/Codefreyy/typing-speed-game",
    demoUrl: "https://joy-typing-speed.netlify.app/",
  },
  {
    title: "Game Hub",
    description:
      "A responsive game grid application that offers search and filter functionality, and features infinite scrolling using React Query. It also includes robust form validation with Zod and efficient state management with Zustand.",
    tags: ["React", "TypeScript", "Zod", "React Query", "Chakra UI"],
    imageUrl: gameHubImage,
    projectUrl: "https://github.com/Codefreyy/New-Game-hub",
    demoUrl: "https://joy-gamehub.netlify.app/",
  },
  {
    title: "Breddit",
    description: `A modern full-stack Reddit clone features infinite scrolling, secure authentication via NextAuth and Google, and a custom feed for authenticated users. It utilizes Upstash Redis for advanced caching and React-Query for efficient data fetching, ensuring a responsive and user-friendly experience with optimistic updates.
            `,
    tags: ["JavaScript", "HTML", "CSS3"],
    imageUrl: breadditImage,
    projectUrl: "https://github.com/Codefreyy/Breddit",
    demoUrl: "https://joy-breaddit-reddit-clone.netlify.app/",
  },
];

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node",
  "Next",
  "Remix",
  "Express",
  "HTML",
  "CSS",
  "jQuery",
  "Material UI",
  "TailwindCSS",
  "Boostrap",
  "Styled Components",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "GCP",
  "Firebase",
  "Docker",
  "GraphQL",
  "Prisma",
  "D3",
  "WebRTC",
  "WebSocket",
  "Redux",
  "Jest",
  "Canvas",
  "Konva",
  "UI/UX",
  "Figma",
  "Jira",
  "Jenkins",
  "Stripe",
  "Twilio",
  "Webpack",
  "ESLint",
  "Git",
  "Github",
  "Bitbucket",
];
