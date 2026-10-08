import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import profile from "../../../data/profile";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav link for whichever section sits in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent to-accent-2"
      />

      <div
        className={`mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${
          scrolled
            ? "mt-3 w-[calc(100%-1.5rem)] max-w-5xl border-white/10 bg-ink/70 px-4 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-6"
            : "w-full max-w-7xl border-transparent px-6 py-5 lg:px-10"
        }`}
      >
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-white"
          aria-label="Roshan Panthi — back to top"
        >
          Roshan<span className="text-gradient">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "page" : undefined}
              className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id ? "text-white" : "text-zinc-300 hover:text-white"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent/85 sm:inline-flex"
          >
            <FileText size={16} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-3 flex flex-col rounded-3xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base transition ${
                  active === link.id
                    ? "bg-white/[0.06] text-white"
                    : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 font-semibold text-ink"
            >
              <FileText size={18} />
              View Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
