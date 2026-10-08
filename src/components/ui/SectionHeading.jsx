import Reveal from "./Reveal";

function SectionHeading({ index, eyebrow, title, highlight, description }) {
  return (
    <Reveal className="mb-14 md:mb-20 max-w-3xl">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
        <span className="text-accent-2">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent to-accent-2" />
        {eyebrow}
      </p>

      <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-300">{description}</p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
