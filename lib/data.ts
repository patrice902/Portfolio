import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carImage from "@/public/Car.png";
import lightFootImage from "@/public/Lightfoot.png";
import graphicsEditorImage from "@/public/graphics-editor.png";
import chessImage from "@/public/chess.gif";

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
    date: "May 2021 - Current",
  },
  {
    title: "Front End Lead",
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
    date: "Mar 2018 - Apr 2021",
  },
  {
    title: "Full Stack Developer",
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
    date: "Mar 2016 - Feb 2018",
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
    title: "Online Chess Tournament",
    description:
      "An Online Chess Tournament Web app that schedules chess tournaments for registered users, manages Match-making, and run online chess game having video chat.",
    tags: [
      "React",
      "JavaScript",
      "Material UI",
      "Redux",
      "HTML",
      "CSS",
      "Zoom",
      "Chess",
    ],
    imageUrl: chessImage,
    projectUrl: "https://github.com/patrice902/OnlineChess",
  },
  {
    title: "Graphics Editor",
    description:
      "You can put images, graphics and texts into the board, and can resize/rotate/clip/edit them. Also, multi-users can join this board and draw together having fun!",
    tags: [
      "React",
      "Redux",
      "Node",
      "Konva",
      "Socket.io",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    imageUrl: graphicsEditorImage,
    projectUrl: "https://github.com/patrice902/Graphics-Editor",
  },
  {
    title: "Car Painter",
    description: `You can create a scheme with a specific car model, and paint it with various logos, shapes and texts. And, you can export it and use it in games. Also, it supports multi-user/real-time collaboration for team work and fun!`,
    tags: [
      "React",
      "Redux",
      "Node",
      "Material UI",
      "Express",
      "MySQL",
      "Knex",
      "Objection",
      "Konva",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    imageUrl: carImage,
    // projectUrl: "https://github.com/patrice902/Car-Painter",
  },
  {
    title: "Lightfoot",
    description: `Lightfoot iOS/Android app helps drivers use less fuel, reduce harmful emissions and stay safe every time they drive.`,
    tags: [
      "React Native",
      "Expo",
      "Mobx",
      "React Native Paper",
      "TypeScript",
      "JavaScript",
      "Jest",
      "HTML",
      "CSS",
    ],
    imageUrl: lightFootImage,
    // projectUrl: "https://github.com/patrice902/Car-Painter",
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
