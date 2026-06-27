import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].slug);
  const activeItem = SERVICES.find((s) => s.slug === active)!;

  return (
    <section id="services" className="relative bg-cream-100 py-16 sm:py-24 md:py-36 border-t border-cream-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10 mb-10 sm:mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/60">
              [ 01 — Services ]
            </span>
          </div>
          <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            A full-stack
            <br />
            digital studio<span className="text-orange-ascode">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <ul className="divide-y divide-cream-300 border-t border-cream-300">
              {SERVICES.map((s) => (
                <li
                  key={s.slug}
                  onMouseEnter={() => setActive(s.slug)}
                  className="group"
                  data-cursor-hover="true"
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block py-6 md:py-8 flex items-baseline gap-6 md:gap-10 transition-colors"
                  >
                    <span className="font-mono text-xs text-ink/50 w-10 shrink-0">{s.number}</span>
                    <div className="flex-1 flex items-baseline justify-between gap-6 flex-wrap">
                      <h3
                        className={`font-display text-2xl md:text-4xl tracking-tight transition-colors ${
                          active === s.slug ? "text-orange-ascode" : "text-ink group-hover:text-orange-ascode"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span className="text-sm text-ink/60">{s.tags.slice(0, 3).join(" · ")}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
              >
                View all services →
              </Link>
            </div>
          </div>

          <motion.div
            key={activeItem.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-5 md:sticky md:top-28 self-start"
          >
            <div className="relative border border-cream-300 bg-cream-50 p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-ascode/10 blur-2xl" />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.25em] text-ink/60">
                  Currently viewing · {activeItem.number}
                </span>
                <h4 className="mt-4 font-display text-3xl md:text-4xl tracking-tight">
                  {activeItem.title}
                </h4>
                <p className="mt-4 text-ink/75 leading-relaxed">{activeItem.short}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeItem.tags.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs border border-ink/30 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services/$slug"
                  params={{ slug: activeItem.slug }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium link-underline"
                >
                  Explore {activeItem.title.toLowerCase()} →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
