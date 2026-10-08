import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiSqlalchemy,
  SiGit,
  SiPostman,
  SiSwagger,
  SiOllama,
  SiLinux,
} from "react-icons/si";

// `color` is the brand color revealed on hover in the skills grid
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#2965F1" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", icon: SiFastapi, color: "#05A894" },
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#D71F00" },
    ],
  },
  {
    category: "Tools & AI",
    items: [
      { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "Ollama / LLMs", icon: SiOllama, color: "#FFFFFF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

export default skills;
