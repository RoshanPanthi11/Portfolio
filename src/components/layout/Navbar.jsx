import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Roshan
          <span className="text-zinc-500">.</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 transition hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#09090B]/95 backdrop-blur-xl">
          <nav className="flex flex-col p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-zinc-300 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;