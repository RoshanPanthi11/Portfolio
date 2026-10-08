import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import profile from "../../../data/profile";

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
];

function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-10">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-display text-lg font-bold">
            Roshan<span className="text-gradient">.</span>
          </a>
          <p className="mt-1 text-sm text-zinc-400">
            © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-full p-3 text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              <Icon />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/30 hover:text-white"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
