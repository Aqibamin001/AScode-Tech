import { motion } from "framer-motion";

/**
 * Lite hero background — replaces the previous heavy WebGL/three.js scene.
 * Pure CSS + SVG + framer-motion. Loads instantly, no GPU cost.
 */
export default function Hero3D() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-cream-100" aria-hidden>
      {/* Soft radial wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(255,79,0,0.18) 0%, rgba(255,79,0,0) 60%), radial-gradient(50% 50% at 15% 85%, rgba(28,28,28,0.10) 0%, rgba(28,28,28,0) 60%)",
        }}
      />

      {/* Subtle grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] text-ink"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Floating gradient blob — orange */}
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: [0, -24, 0], x: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] right-[8%] w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,79,0,0.55), rgba(255,79,0,0) 70%)",
        }}
      />

      {/* Floating gradient blob — ink */}
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: [0, 26, 0], x: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[6%] left-[4%] w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(28,28,28,0.35), rgba(28,28,28,0) 70%)",
        }}
      />

      {/* Floating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[55%] left-[55%] w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] rounded-full border border-ink/15"
        style={{ transform: "translate(-50%,-50%)" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute top-[55%] left-[55%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full border border-orange-ascode/15"
        style={{ transform: "translate(-50%,-50%)" }}
      />

      {/* Tiny floating dots */}
      {[
        { top: "20%", left: "18%", d: 6 },
        { top: "70%", left: "30%", d: 9 },
        { top: "35%", left: "70%", d: 8 },
        { top: "82%", left: "78%", d: 10 },
      ].map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className="absolute rounded-full bg-orange-ascode/70"
          style={{ top: p.top, left: p.left, width: p.d, height: p.d }}
        />
      ))}
    </div>
  );
}
