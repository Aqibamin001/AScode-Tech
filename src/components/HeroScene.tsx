import { motion } from "framer-motion";
import { TrendUp, ChartLineUp, Lightning, Brain } from "@phosphor-icons/react";

/** Lightweight CSS-3D hero scene — no Three.js, fast to load. */
export function HeroScene() {
  return (
    <div className="scene-3d relative h-[440px] w-full md:h-[520px]">
      {/* ambient gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-3xl opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 30%, rgba(0,71,255,0.18) 0%, rgba(0,71,255,0) 70%), radial-gradient(40% 40% at 20% 80%, rgba(0,71,255,0.10) 0%, rgba(0,71,255,0) 70%)",
        }}
      />
      {/* grid floor */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-48 opacity-40"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.06), transparent), repeating-linear-gradient(0deg, rgba(10,10,10,0.05) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(10,10,10,0.05) 0 1px, transparent 1px 28px)",
          maskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="anim-float glass-card absolute left-[4%] top-[8%] w-[78%] rounded-2xl p-5"
        style={{ transform: "rotateX(8deg) rotateY(-6deg)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Revenue projection</p>
            <p className="mt-1 font-display text-2xl font-bold">$1,284,450</p>
          </div>
          <div className="rounded-md bg-[var(--color-accent)]/10 px-2 py-1 text-xs font-medium text-[var(--color-accent)]">
            +38.2%
          </div>
        </div>
        <Sparkline />
        <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-muted-foreground">
          <Stat label="MRR" value="$92K" />
          <Stat label="Burn" value="$41K" />
          <Stat label="Runway" value="14mo" />
        </div>
      </motion.div>

      {/* Floating KPI cards */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="anim-float-2 glass-card absolute right-[2%] top-[36%] w-[42%] rounded-2xl p-4"
        style={{ transform: "rotateX(-6deg) rotateY(10deg)" }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground/5">
            <Brain weight="duotone" className="h-4 w-4 text-[var(--color-accent)]" />
          </span>
          <div>
            <p className="text-xs font-medium">Market Analysis</p>
            <p className="text-[10px] text-muted-foreground">SaaS · Global</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          <Bar w="92%" /><Bar w="74%" /><Bar w="58%" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="anim-drift glass-card absolute bottom-[6%] left-[10%] w-[44%] rounded-2xl p-4"
        style={{ transform: "rotateX(6deg) rotateY(4deg)" }}
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Break-even</p>
          <ChartLineUp weight="duotone" className="h-4 w-4 text-[var(--color-accent)]" />
        </div>
        <p className="mt-1 font-display text-xl font-bold">Month 7</p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-foreground/5">
          <div className="h-full w-7/12 rounded-full bg-[var(--color-accent)]" />
        </div>
      </motion.div>

      {/* Tag chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="glass-card absolute right-[10%] bottom-[14%] flex items-center gap-2 rounded-full px-3 py-1.5"
      >
        <Lightning weight="fill" className="h-3.5 w-3.5 text-[var(--color-accent)]" />
        <span className="text-xs font-medium">Generated in 42s</span>
      </motion.div>

      {/* particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute h-1 w-1 rounded-full bg-[var(--color-accent)]/40"
          style={{
            top: `${(i * 7.3) % 100}%`,
            left: `${(i * 11.7) % 100}%`,
            animation: `drift ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Sparkline() {
  const pts = [38, 30, 42, 36, 52, 48, 60, 58, 72, 68, 84, 92];
  const w = 320, h = 64, max = 100;
  const d = pts
    .map((v, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - (v / max) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full">
      <defs>
        <linearGradient id="sl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0047FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0047FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill="url(#sl)" />
      <path d={d} stroke="#0047FF" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border/60 bg-white/60 px-2 py-1.5">
      <p className="font-mono uppercase tracking-wider">{label}</p>
      <p className="font-display text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
function Bar({ w }: { w: string }) {
  return (
    <div className="h-1.5 rounded-full bg-foreground/5">
      <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: w }} />
    </div>
  );
}

export { TrendUp };
