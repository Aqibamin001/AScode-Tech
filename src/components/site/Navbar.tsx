import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Team", href: "/#team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream-100/75 backdrop-blur-md border-b border-cream-300"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2.5 h-2.5 bg-orange-ascode rounded-full group-hover:scale-125 transition-transform" />
          <span className="font-display font-black text-lg tracking-tight">
            AScode<span className="text-orange-ascode">.</span>Tech
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-ink/80 hover:text-ink transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
        >
          Start a project
          <span aria-hidden>→</span>
        </a>

        <button
          className="md:hidden p-2 rounded border border-cream-300"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-5 h-[2px] bg-ink mb-1.5" />
          <div className="w-5 h-[2px] bg-ink mb-1.5" />
          <div className="w-5 h-[2px] bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-100 border-t border-cream-300 px-6 py-6 flex flex-col gap-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-lg font-display"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium w-fit"
            onClick={() => setOpen(false)}
          >
            Start a project →
          </a>
        </div>
      )}
    </motion.header>
  );
}
