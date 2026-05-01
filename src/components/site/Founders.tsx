import { motion } from "framer-motion";
import { FOUNDERS } from "@/data/portfolio";

export default function Founders() {
  return (
    <section id="team" className="relative bg-cream-100 py-24 md:py-36 border-t border-cream-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ 04 — The studio ]</span>
          </div>
          <h2 className="col-span-12 md:col-span-7 h-editorial text-5xl md:text-7xl lg:text-[5.5rem]">
            Led by two
            <br />
            hands-on makers<span className="text-orange-ascode">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {FOUNDERS.map((f, i) => (
            <motion.article
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group ${i === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden border border-cream-300 aspect-[4/5] bg-cream-200">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-cream-50/90 backdrop-blur text-xs font-mono">
                  0{i + 1} / 02
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight">{f.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-orange-ascode">{f.role}</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-ascode mt-3 animate-float" />
              </div>
              <p className="mt-4 text-ink/75 max-w-md leading-relaxed">{f.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
