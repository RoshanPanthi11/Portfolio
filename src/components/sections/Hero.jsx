import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import profileImage from "../../assets/images/panthidai.jpeg";



function Hero() {
  return (
   <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#09090B] pt-16 text-white"
>
      {/* Background Blur */}
      <div className="absolute -top-52 left-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-500/5 blur-[180px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.35em] text-xs text-zinc-500 mb-5">
              Full Stack Developer
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">

              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                Roshan
              </span>

              <br />

              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                Panthi
              </span>

            </h1>

            <p className="mt-10 max-w-xl text-lg leading-9 text-zinc-500">
              Passionate about crafting modern digital experiences
              using React, Node.js, and MongoDB.
              I enjoy building responsive interfaces, scalable
              applications, and clean user experiences that make an
              impact.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 hover:bg-white/10 transition duration-300"
              >
                Get In Touch

                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </a>

             <a
  href="/roshanpanthi3.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-8 py-4 hover:border-white/30 transition duration-300"
>
  <FaDownload />
  Resume
</a>

            </div>

            {/* Social */}

            <div className="flex items-center gap-8 mt-12">

              <a
                href="https://github.com/RoshanPanthi11"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition duration-300 text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/roshan-panthi-7408a3357/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition duration-300 text-xl"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:roshanpanthi13@gmail.com"
                className="text-zinc-500 hover:text-white transition duration-300 text-xl"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>
                    {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 5,
                repeat: Infinity,
              },
            }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-white/10 blur-[120px]" />

              <div className="absolute -inset-4 rounded-full border border-white/10" />

              <img
                src={profileImage}
                alt="Roshan Panthi"
                className="relative h-[330px] w-[330px] md:h-[480px] md:w-[480px] rounded-full object-cover border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.08)]"
              />

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;