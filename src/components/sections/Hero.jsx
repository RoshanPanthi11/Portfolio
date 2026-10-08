import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiReact, SiFastapi, SiNodedotjs } from "react-icons/si";
import { ArrowRight, Download, MapPin, ChevronDown } from "lucide-react";

import profileImage from "../../assets/images/panthidai.jpeg";
import profile from "../../../data/profile";

const roles = ["Full Stack Developer", "React & Next.js Developer", "FastAPI Backend Developer"];

const facts = [
  { value: "BSc", label: "CSIT Graduate" },
  { value: "10+", label: "Projects Built" },
  { value: "1", label: "Internship" },
];

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
];

const floatingBadges = [
  { icon: SiReact, label: "React", color: "text-sky-400", className: "-left-4 top-16 md:-left-10" },
  { icon: SiFastapi, label: "FastAPI", color: "text-teal-400", className: "-right-2 top-1/2 md:-right-8" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-400", className: "bottom-10 left-2 md:left-0" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// Details start once the intro (badge + name) has animated in
const detailsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-semibold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-24"
    >
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-accent-2/10 blur-[140px]" />
        <div className="bg-grid absolute inset-0" />
      </div>

      {/* Mobile order: intro → photo → details. Desktop: text left, photo right. */}
      <div className="relative mx-auto grid w-full max-w-7xl px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-x-16 lg:px-10">
        {/* INTRO */}
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-1.5 text-sm text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl xl:text-8xl"
          >
            Hi, I'm Roshan
            <br />
            <span className="text-zinc-400">Panthi.</span>
          </motion.h1>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-2 mt-10 w-full max-w-[240px] sm:max-w-[340px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:mt-6 lg:max-w-[480px] lg:self-start"
        >
          <div className="relative aspect-square">
            {/* Spinning gradient ring */}
            <div
              aria-hidden
              className="absolute -inset-[3px] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--color-accent),transparent_30%,var(--color-accent-2)_55%,transparent_80%,var(--color-accent))]"
            />
            <div aria-hidden className="absolute -inset-10 rounded-full bg-accent/10 blur-3xl" />

            <img
              src={profileImage}
              alt="Portrait of Roshan Panthi"
              className="relative h-full w-full rounded-full border-4 border-ink object-cover"
            />

            {floatingBadges.map(({ icon: Icon, label, color, className }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { delay: 0.8 + i * 0.15, duration: 0.5 },
                  y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
                }}
                className={`absolute flex items-center gap-2 rounded-2xl border border-white/10 bg-surface/80 px-3.5 py-2 text-sm font-medium text-zinc-200 shadow-xl backdrop-blur-xl ${className}`}
              >
                <Icon className={`text-lg ${color}`} />
                {label}
              </motion.div>
            ))}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-400">
            <MapPin size={15} />
            {profile.location}
          </p>
        </motion.div>

        {/* DETAILS */}
        <motion.div
          variants={detailsContainer}
          initial="hidden"
          animate="show"
          className="lg:col-start-1 lg:row-start-2 lg:self-start"
        >

          <motion.p variants={item} className="mt-6 text-xl text-zinc-300 sm:text-2xl">
            <RotatingRole /> <span className="text-zinc-400">based in Nepal.</span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            I build fast, responsive web apps end to end — polished React &
            Next.js interfaces on top of secure, well-structured FastAPI and
            Node.js backends. Lately I've been exploring AI apps with local LLMs.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-ink shadow-[0_10px_40px_-10px_rgba(180,167,245,0.35)] transition hover:shadow-[0_10px_50px_-6px_rgba(180,167,245,0.5)]"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-medium text-zinc-200 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              <Download size={18} />
              Download CV
            </a>

            <div className="flex items-center gap-1 sm:ml-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full p-3 text-lg text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur"
          >
            {facts.map((fact) => (
              <div key={fact.label} className="px-4 py-4 text-center sm:px-6">
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {fact.value}
                </dd>
                <dd className="mt-1 text-xs text-zinc-400 sm:text-sm">{fact.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:text-white lg:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.span>
      </a>
    </section>
  );
}

export default Hero;
