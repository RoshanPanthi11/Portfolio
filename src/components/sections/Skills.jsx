import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";
import skills from "../../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Tools & AI": Wrench,
};

function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-accent-2/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="My"
          highlight="tech stack."
          description="Tools and technologies I use to design, build and ship applications end to end — from pixel-perfect interfaces to secure, well-structured APIs."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, groupIndex) => {
            const CategoryIcon = categoryIcons[group.category];

            return (
              <Reveal key={group.category} delay={groupIndex * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/20 sm:p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent-2 ring-1 ring-white/10">
                        <CategoryIcon size={18} />
                      </span>
                      {group.category}
                    </h3>
                    <span className="font-mono text-xs text-zinc-500">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {group.items.map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <motion.li
                          key={skill.name}
                          whileHover={{ y: -3 }}
                          transition={{ duration: 0.2 }}
                          style={{ "--brand": skill.color }}
                          className="group/skill flex items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-3 py-3 sm:gap-3 sm:px-4 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                        >
                          <Icon
                            aria-hidden
                            className="shrink-0 text-xl text-zinc-300 transition-colors duration-300 group-hover/skill:text-[var(--brand)]"
                          />
                          <span className="text-sm leading-tight text-zinc-300">{skill.name}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
