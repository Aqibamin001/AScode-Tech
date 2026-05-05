import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";

export default function Portfolio() {
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
              <motion.a
                key={p.id}
                href={`/work/${p.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                className={`col-span-12 ${span} group text-left focus:outline-none block`}
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
                    <span className="text-xs uppercase tracking-widest">Open preview ({p.images.length}) ↗</span>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight">{p.title}</h3>
                  <span className="text-xs text-ink/60 whitespace-nowrap">{p.type} · {p.year}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
