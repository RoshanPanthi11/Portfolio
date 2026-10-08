import { GraduationCap, Briefcase, Sparkles, Rocket } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const focusAreas = [
  "Full Stack Development",
  "REST API Design",
  "Responsive UI",
  "Authentication & RBAC",
  "Clean Architecture",
];

const learning = [
  "Advanced FastAPI",
  "System Design",
  "AI Engineering",
  "RAG",
  "Cloud Deployment",
  "Scalable Backends",
];

const card =
  "group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-8 transition-colors duration-300 hover:border-white/20";

function CardLabel({ icon: Icon, children }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent-2 ring-1 ring-white/10">
        <Icon size={17} />
      </span>
      {children}
    </p>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title="More than just"
          highlight="writing code."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Bio */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className={card}>
              <CardLabel icon={Sparkles}>Who I Am</CardLabel>

              <div className="mt-7 space-y-5 text-lg leading-8 text-zinc-300">
                <p>
                  I'm <span className="font-medium text-white">Roshan Panthi</span>, a
                  passionate Full Stack Web Developer with a Bachelor's degree in
                  Computer Science and Information Technology.
                </p>
                <p>
                  During my internship, I worked on real-world web applications where I
                  transformed <span className="text-zinc-200">Figma designs</span> into
                  production-ready interfaces, developed reusable components, integrated{" "}
                  <span className="text-zinc-200">REST APIs</span>, and built responsive
                  user experiences using modern web technologies.
                </p>
                <p>
                  Today I work across the stack — from React and Next.js frontends to{" "}
                  <span className="text-zinc-200">FastAPI</span> and Node.js backends —
                  and I'm exploring AI-powered apps with locally running LLMs. I enjoy
                  clean code, thoughtful design and scalable architecture.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.1}>
            <div className={card}>
              <CardLabel icon={GraduationCap}>Education</CardLabel>
              <h3 className="mt-6 font-display text-2xl font-semibold">BSc CSIT Graduate</h3>
              <p className="mt-3 leading-7 text-zinc-300">
                Strong academic foundation in software development, database systems,
                networking and modern web technologies.
              </p>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal delay={0.2}>
            <div className={card}>
              <CardLabel icon={Briefcase}>Experience</CardLabel>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                Frontend Developer Intern
              </h3>
              <p className="mt-3 leading-7 text-zinc-300">
                Built responsive interfaces, integrated REST APIs and collaborated with
                designers to ship production apps with React, Next.js and Tailwind CSS.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Currently learning */}
        <Reveal delay={0.1} className="mt-5">
          <div className={`${card} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
            <CardLabel icon={Rocket}>Currently Learning</CardLabel>
            <div className="flex flex-wrap gap-2.5">
              {learning.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-1.5 text-sm text-violet-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
