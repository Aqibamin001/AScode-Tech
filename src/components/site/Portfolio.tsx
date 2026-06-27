import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";

export default function Portfolio() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section
      id="work"
      className="relative bg-cream-100 py-16 sm:py-24 md:py-36 border-t border-cream-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10 mb-12 sm:mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/60">
              [ 03 — Selected work ]
            </span>
            <p className="mt-6 text-sm md:text-base text-ink/70 leading-relaxed max-w-sm">
              A small selection of products we have designed, engineered and
              shipped — each one live and serving real users today.
            </p>
          </div>
          <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            Recent projects,
            <br />
            shipped with care<span className="text-orange-ascode">.</span>
          </h2>
        </div>

        {/* Featured project */}
        {featured && (
          <motion.a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            data-cursor-hover="true"
            className="group block mb-6 md:mb-8"
          >
            <div className="grid grid-cols-12 gap-5 md:gap-8 items-center border border-cream-300 bg-cream-50 p-5 md:p-8 hover:border-orange-ascode transition-colors duration-500">
              <div className="col-span-12 lg:col-span-7 relative overflow-hidden border border-cream-300 aspect-[16/10] bg-cream-100">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] bg-orange-ascode text-cream-50 rounded-full">
                  Featured
                </span>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:pl-4">
                <span className="font-mono text-xs text-ink/55">
                  {featured.type} · {featured.year}
                </span>
                <h3 className="mt-3 h-editorial text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight group-hover:text-orange-ascode transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-4 text-ink/70 leading-relaxed">
                  {featured.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-ink/20 rounded-full text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium link-underline">
                  Visit live site ↗
                </span>
              </div>
            </div>
          </motion.a>
        )}

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {rest.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-cursor-hover="true"
              className="group block border border-cream-300 bg-cream-50 overflow-hidden hover:border-orange-ascode transition-colors duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-cream-100">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider bg-cream-50/90 text-ink rounded-full">
                  {p.type}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 text-[10px] uppercase tracking-wider bg-ink text-cream-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Visit ↗
                </span>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight group-hover:text-orange-ascode transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-[11px] text-ink/55 whitespace-nowrap">
                    {p.year}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed line-clamp-2">
                  {p.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] uppercase tracking-wider border border-ink/15 rounded-full text-ink/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
