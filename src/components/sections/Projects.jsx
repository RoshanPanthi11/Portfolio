import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import projects from "../../../data/projects";
import profile from "../../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

const categoryStyles = {
  AI: "text-fuchsia-300 bg-fuchsia-400/10 ring-fuchsia-400/20",
  Backend: "text-emerald-300 bg-emerald-400/10 ring-emerald-400/20",
  "Full Stack": "text-sky-300 bg-sky-400/10 ring-sky-400/20",
  Frontend: "text-amber-300 bg-amber-400/10 ring-amber-400/20",
};

// Track the cursor so a soft spotlight follows it across the card
function handleSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleSpotlight}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-white/20 md:p-8"
    >
      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x) var(--y), rgba(180,167,245,0.08), transparent 60%)",
        }}
      />
      {/* Top accent line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${categoryStyles[project.category]}`}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10">
              <Star size={12} className="fill-amber-300 text-amber-300" />
              Featured
            </span>
          )}
        </div>
        <span className="font-mono text-sm text-zinc-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start gap-2 hover:text-gradient"
        >
          {project.title}
          <ArrowUpRight
            size={22}
            className="mt-1 shrink-0 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          />
        </a>
      </h3>

      <p className="relative mt-4 flex-1 leading-7 text-zinc-300">{project.description}</p>

      <ul className="relative mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="relative mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.08]"
        >
          <FaGithub />
          Source
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent/85"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Selected"
          highlight="work."
          description="From AI assistants and secure FastAPI backends to real-time apps and polished frontends — a selection of things I've built."
        />

        <Reveal className="mb-10 -mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            {filters.map((f) => {
              const count =
                f === "All" ? projects.length : projects.filter((p) => p.category === f).length;

              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`relative isolate whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === f ? "text-ink" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {f}
                  <span className={`ml-1.5 text-xs ${filter === f ? "text-ink/60" : "text-zinc-500"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-zinc-300 transition hover:border-white/25 hover:text-white"
          >
            <FaGithub className="text-lg" />
            See more on GitHub
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
