import { motion } from "framer-motion";
import skills from "../../../data/skills";

function About() {
  return (
    <section
  id="about"
  className="relative overflow-hidden bg-[#09090B] pt-16 pb-16 text-white"
>
      {/* Background Glow */}
      <div className="absolute -top-52 left-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-500/5 blur-[180px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
            About Me
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">

            More Than Just

            <br />

            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Writing Code.
            </span>

          </h2>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <p className="text-lg leading-9 text-zinc-400">

              I'm <span className="text-white font-medium">
                Roshan Panthi
              </span>, a passionate Full Stack Web Developer with a
              Bachelor's degree in Computer Science and Information
              Technology.

              <br /><br />

              During my internship, I worked on real-world web
              applications where I transformed Figma designs into
              production-ready interfaces, developed reusable
              components, integrated REST APIs, and built responsive
              user experiences using modern web technologies.

              <br /><br />

              I enjoy solving problems through clean code,
              thoughtful design, and scalable architecture.
              My goal is to build digital experiences that are
              fast, intuitive and enjoyable for users.

            </p>

            {/* Skills */}

            <div className="flex flex-wrap gap-4 mt-14">

              {skills.map((skill) => {

                const Icon = skill.icon;

                return (

                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-3 text-zinc-300 hover:border-white/20"
                  >

                    <Icon className="text-lg" />

                    {skill.name}

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
                    <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <div className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.03)]">

              <div className="space-y-10">

                <div>

                  <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                    Education
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    BSc CSIT Graduate
                  </h3>

                  <p className="mt-3 leading-8 text-zinc-500">
                    Strong academic foundation in software development,
                    database systems, networking and modern web
                    technologies.
                  </p>

                </div>

                <div className="border-t border-white/10 pt-8">

                  <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                    Experience
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    Frontend Developer Intern
                  </h3>

                  <p className="mt-3 leading-8 text-zinc-500">
                    Developed responsive web interfaces,
                    integrated REST APIs,
                    collaborated with designers,
                    and built production-ready
                    applications using React,
                    Next.js and Tailwind CSS.
                  </p>

                </div>

                <div className="border-t border-white/10 pt-8">

                  <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                    Current Focus
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    {[
                      "Web Development",
                      "Responsive Design",
                      "React",
                      "Next.js",
                      "REST APIs",
                      "UI / UX",
                    ].map((item) => (

                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;