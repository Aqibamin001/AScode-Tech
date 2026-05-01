import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PROJECTS } from "@/data/portfolio";

type Project = (typeof PROJECTS)[number];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIdx, setImgIdx] = useState(0);

  const open = (project: Project) => {
    setSelected(project);
    setImgIdx(0);
  };
  const close = () => setSelected(null);

  return (
    <section id="work" className="relative bg-cream-100 py-16 sm:py-24 md:py-36 border-t border-cream-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10 mb-10 sm:mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/60">[ 03 — Selected work ]</span>
          </div>
          <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            Recent projects,
            <br />
            shipped with care<span className="text-orange-ascode">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => {
            const span =
              i % 5 === 0 ? "md:col-span-8"
              : i % 5 === 1 ? "md:col-span-4"
              : i % 5 === 2 ? "md:col-span-5"
              : i % 5 === 3 ? "md:col-span-7"
              : "md:col-span-6";

            return (
              <motion.button
                key={p.id}
                onClick={() => open(p)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                className={`col-span-12 ${span} group text-left focus:outline-none`}
                data-cursor-hover="true"
              >
                <div className="relative overflow-hidden border border-cream-300 aspect-[4/3] bg-cream-50">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs uppercase tracking-widest">View gallery ({p.images.length})</span>
                    <span className="text-xs">→</span>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight">{p.title}</h3>
                  <span className="text-xs text-ink/60 whitespace-nowrap">{p.type} · {p.year}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(v) => !v && close()}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[92vh] bg-cream-50 border border-cream-300 p-0 overflow-hidden flex flex-col">
          {selected && (
            <div className="flex flex-col min-h-0 overflow-y-auto">
              <DialogHeader className="px-6 md:px-10 pt-8 pb-4 border-b border-cream-300">
                <span className="text-xs uppercase tracking-[0.25em] text-ink/60">
                  {selected.type} · {selected.year}
                </span>
                <DialogTitle className="font-display text-3xl md:text-5xl tracking-tight mt-1 text-ink">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-ink/70 text-base md:text-lg max-w-2xl">
                  {selected.summary}
                </DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selected.stack.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs border border-ink/30 rounded-full text-ink/80">{t}</span>
                  ))}
                </div>
              </DialogHeader>

              <div className="bg-cream-200 relative w-full max-h-[62vh] overflow-auto flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selected.images[imgIdx]}
                    src={selected.images[imgIdx]}
                    alt={`${selected.title} screenshot ${imgIdx + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="block w-full h-auto object-contain"
                  />
                </AnimatePresence>
                <div className="absolute bottom-3 right-3 px-3 py-1 text-xs bg-ink/70 text-cream-50 rounded-full">
                  {imgIdx + 1} / {selected.images.length}
                </div>
              </div>

              <div className="p-4 md:p-6 flex gap-3 overflow-x-auto bg-cream-100 border-t border-cream-300">
                {selected.images.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setImgIdx(i)}
                    className={`relative flex-shrink-0 w-28 md:w-36 aspect-[4/3] overflow-hidden border transition-all ${
                      i === imgIdx ? "border-orange-ascode" : "border-cream-300 hover:border-ink/50"
                    }`}
                    aria-label={`Show image ${i + 1}`}
                  >
                    <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-contain bg-cream-50" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
