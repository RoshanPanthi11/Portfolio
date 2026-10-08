import { motion } from "framer-motion";

// Fades + lifts children into view once, the first time they scroll on screen.
function Reveal({ children, delay = 0, y = 32, className = "", as = "div" }) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

export default Reveal;
