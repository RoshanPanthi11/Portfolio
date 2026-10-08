import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Copy, Check, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import profile from "../../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const socials = [
  { icon: FaGithub, href: profile.github, label: "GitHub", handle: "@RoshanPanthi11" },
  { icon: FaLinkedinIn, href: profile.linkedin, label: "LinkedIn", handle: "Roshan Panthi" },
];

const inputClass =
  "peer w-full rounded-2xl border border-white/10 bg-black/30 px-5 pb-3 pt-6 text-white placeholder-transparent outline-none transition focus:border-accent/60 focus:bg-black/40 focus:ring-4 focus:ring-accent/10";

const labelClass =
  "pointer-events-none absolute left-5 top-2 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-2";

function Field({ as = "input", label, name, ...props }) {
  const Component = as;

  return (
    <div className="relative">
      <Component id={name} name={name} placeholder={label} className={inputClass} {...props} />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title="Let's build"
          highlight="something together."
          description="Have a project idea, a job opportunity, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          {/* LEFT */}
          <Reveal className="flex min-w-0 flex-col gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">Email</p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex min-w-0 items-center gap-3 text-lg text-white transition hover:text-accent-2"
                >
                  <Mail size={20} className="shrink-0 text-zinc-300" />
                  <span className="break-all">{profile.email}</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
                Location
              </p>
              <p className="mt-3 flex items-center gap-3 text-lg text-white">
                <MapPin size={20} className="text-zinc-300" />
                {profile.location}
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Nepal Time (UTC+5:45)
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {socials.map(({ icon: Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/25 hover:bg-white/[0.05]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] text-lg text-zinc-300 transition group-hover:bg-accent group-hover:text-ink">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white">{label}</span>
                    <span className="block truncate text-xs text-zinc-400">{handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1} className="min-w-0">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="user_name" type="text" autoComplete="name" required />
                <Field
                  label="Your email"
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <Field label="Subject" name="subject" type="text" required />
              <Field as="textarea" label="Your message" name="message" rows={6} required />

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent-2 py-4 font-semibold text-ink shadow-[0_10px_40px_-12px_rgba(180,167,245,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                    <CheckCircle2 size={16} />
                    Thanks! Your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center justify-center gap-2 rounded-xl bg-red-400/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle size={16} />
                    Something went wrong. Please email me directly instead.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
