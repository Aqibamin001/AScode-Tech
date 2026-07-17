import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-cream-100 py-16 sm:py-24 md:py-36 border-t border-cream-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10 mb-12 sm:mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/60">
              [ 01 — Services ]
            </span>
            <p className="mt-6 text-sm md:text-base text-ink/70 leading-relaxed max-w-sm">
              Twelve disciplines under one roof — from editorial websites and
              mobile apps to AI agents, trading systems and platform plugins.
            </p>
          </div>
          <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            A full-stack
            <br />
            digital studio<span className="text-orange-ascode">.</span>
          </h2>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                data-cursor-hover="true"
                className="group relative block h-full overflow-hidden border border-cream-300 bg-cream-50 p-6 md:p-7 transition-all duration-500 hover:border-orange-ascode hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(255,79,0,0.45)]"
              >
                {/* corner glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-orange-ascode/0 blur-3xl transition-all duration-700 group-hover:bg-orange-ascode/25" />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs text-ink/50">{s.number}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 group-hover:text-orange-ascode transition-colors">
                    Explore →
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-2xl md:text-[1.65rem] leading-tight tracking-tight text-ink group-hover:text-orange-ascode transition-colors">
                  {s.title}
                </h3>

                <p className="relative mt-3 text-sm text-ink/70 leading-relaxed line-clamp-3">
                  {s.short}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-1.5">
                  {s.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-ink/15 rounded-full text-ink/65 group-hover:border-orange-ascode/40 group-hover:text-orange-ascode/90 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>


              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-cream-300 pt-8">
          <p className="text-sm text-ink/65 max-w-md">
            Not sure which one you need? We will help you scope it in a 20-min
            call — no pitch.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
            >
              View all services →
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/30 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
