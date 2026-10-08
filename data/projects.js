// category drives the filter tabs in the Projects section.
// `live` is optional — add a deployed URL to show a "Live Demo" button.
const projects = [
  {
    id: 1,
    title: "CodeMentor AI",
    category: "AI",
    featured: true,
    description:
      "An AI-powered programming assistant backed by a locally running LLM via Ollama. Authenticated users can hold persistent, context-aware conversations, and a dedicated Learning Mode explains concepts step by step with examples, common mistakes and practice questions.",
    technologies: ["Python", "FastAPI", "Ollama", "SQLAlchemy", "MySQL", "JWT"],
    github: "https://github.com/RoshanPanthi11/chatbot",
  },

  {
    id: 2,
    title: "User Management & RBAC API",
    category: "Backend",
    featured: true,
    description:
      "A role-based access control backend with users, roles and fine-grained permissions. Built with a layered architecture (routers, services, CRUD, schemas), JWT authentication, bcrypt password hashing and Alembic database migrations.",
    technologies: ["FastAPI", "SQLAlchemy", "Alembic", "MySQL", "JWT", "Pydantic"],
    github: "https://github.com/RoshanPanthi11/fastapi-user-management",
  },

  {
    id: 3,
    title: "Real-time Chat Application",
    category: "Full Stack",
    description:
      "A full-stack real-time chat application using Socket.io for instant communication, with client-server event handling, user authentication and persistent chat data storage.",
    technologies: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    github: "https://github.com/RoshanPanthi11/CHAT-WEBSOCKET",
  },

  {
    id: 4,
    title: "Expense Tracker",
    category: "Full Stack",
    description:
      "An expense tracking app to manage income and expenses, visualize financial data with charts, and perform full CRUD operations through a friendly interface.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    github: "https://github.com/RoshanPanthi11/ExpensesTracker",
  },

  {
    id: 5,
    title: "MedShop",
    category: "Frontend",
    description:
      "A responsive online pharmacy storefront built with the Next.js App Router and TypeScript — featuring a hero banner, product categories, flash sales, testimonials and login / register pages.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/RoshanPanthi11/MedShop",
    live: "https://med-shop-virid.vercel.app",
  },

  {
    id: 6,
    title: "Video Encoding API",
    category: "Backend",
    description:
      "A video processing backend that accepts uploads and encodes them with FFmpeg in a background worker, tracking job status in MySQL and recovering failed or stuck jobs.",
    technologies: ["FastAPI", "FFmpeg", "SQLAlchemy", "MySQL", "Background Jobs"],
    github: "https://github.com/RoshanPanthi11/video_encoding",
  },

  {
    id: 7,
    title: "eKantipur News Scraper",
    category: "Backend",
    description:
      "An async web scraper that extracts top entertainment news and the Cartoon of the Day from ekantipur.com, handling lazy-loaded content and deduplicating results into clean JSON.",
    technologies: ["Python", "Playwright", "Async / Await", "uv"],
    github: "https://github.com/RoshanPanthi11/ekantipurscraps",
  },

  {
    id: 8,
    title: "Webshop Frontend",
    category: "Frontend",
    description:
      "A modern e-commerce frontend with reusable React components, dynamic product rendering, category browsing and shopping-cart functionality.",
    technologies: ["React", "Vite", "Tailwind CSS", "REST API"],
    github: "https://github.com/RoshanPanthi11/WebshopFrontend",
    live: "https://webshop-frontend-theta.vercel.app",
  },

  {
    id: 9,
    title: "Weather Application",
    category: "Frontend",
    description:
      "A responsive weather app that fetches real-time data from the OpenWeather API with city-based search and dynamic weather updates.",
    technologies: ["React", "JavaScript", "OpenWeather API", "CSS"],
    github: "https://github.com/RoshanPanthi11/WeatherApp",
  },
];

export default projects;
