import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import projects from "../../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#09090B] py-16 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-52 left-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-500/5 blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
            Projects
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-black tracking-tight">
            Selected
            <br />

            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Work.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
            A collection of projects showcasing my experience in
            full-stack web development, responsive interfaces and
            modern application development.
          </p>

        </motion.div>

        {/* Projects */}

        <div>

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              className="py-12 border-b border-white/10"
            >

              {/* Technologies */}

              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Title */}

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">

                {project.title}

              </h3>

              {/* Description */}

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-500">

                {project.description}

              </p>

              {/* Button */}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 text-zinc-300 hover:text-white transition"
              >
                <FaGithub />

                <span>View Source</span>

                <FaArrowRight className="transition-transform group-hover:translate-x-1" />

              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;