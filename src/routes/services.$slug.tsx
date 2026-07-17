import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SERVICES, getServiceBySlug } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) {
      return { meta: [{ title: "Service — AScode Tech" }] };
    }
    return {
      meta: [
        { title: `${s.title} — AScode Tech` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — AScode Tech` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `https://as-code.tech/services/${s.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `https://as-code.tech/services/${s.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <main className="bg-cream-100 min-h-screen pt-40 pb-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ 404 ]</span>
        <h1 className="mt-4 h-editorial text-5xl md:text-7xl">
          Service not found<span className="text-orange-ascode">.</span>
        </h1>
        <p className="mt-4 text-ink/70">
          That service does not exist — but we probably still offer it. Browse all services below.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
        >
          View all services →
        </Link>
      </div>
    </main>
  );
}

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4);
  const headlineRest = s.hero.headline.replace(s.hero.accent, "").trimEnd();

  return (
    <main className="bg-cream-100">
      {/* ============== HERO ============== */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-cream-300">
        {/* Decorative grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full bg-orange-ascode/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-ink/5 blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink/55">
            <Link to="/" className="hover:text-orange-ascode transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-ascode transition-colors">Services</Link>
            <span>/</span>
            <span className="text-ink/80">{s.title}</span>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-ink/20 bg-cream-50/60 backdrop-blur text-[11px] uppercase tracking-[0.25em] text-ink/70">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-ascode" />
                {s.hero.eyebrow.replace(/[\[\]]/g, "").trim()}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-6 h-editorial text-5xl md:text-7xl lg:text-[5.75rem] leading-[0.95] tracking-tight"
              >
                {headlineRest}{" "}
                <span className="relative inline-block text-orange-ascode">
                  {s.hero.accent}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-2 h-[6px] bg-orange-ascode/25 rounded-full"
                  />
                </span>
                <span className="text-orange-ascode">.</span>
              </motion.h1>
              <p className="mt-8 text-lg md:text-xl text-ink/75 leading-relaxed max-w-2xl">
                {s.description}
              </p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="relative border border-cream-300 bg-cream-50 p-7 md:p-8 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)]">
                <span className="font-mono text-xs text-ink/50">{s.number}</span>
                <h3 className="mt-2 font-display text-2xl tracking-tight">{s.tagline}</h3>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-ink/20 rounded-full text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="/#contact"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
                >
                  Get a quote →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FEATURES ============== */}
      <section className="py-20 md:py-28 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ What you get ]</span>
              <p className="mt-6 text-ink/70 max-w-sm leading-relaxed">
                Capabilities included on every {s.title.toLowerCase()} engagement.
              </p>
            </div>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl md:text-6xl leading-[1.02]">
              Built around {s.title.toLowerCase()}
              <span className="text-orange-ascode">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {s.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative border border-cream-300 bg-cream-50 p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-orange-ascode hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(255,79,0,0.5)]"
              >
                <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange-ascode/0 blur-2xl transition-colors duration-700 group-hover:bg-orange-ascode/25" />
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs text-ink/45">
                    0{i + 1}
                  </span>
                  <span className="text-orange-ascode opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
                <h3 className="relative mt-4 font-display text-xl md:text-2xl tracking-tight">
                  {f.title}
                </h3>
                <p className="relative mt-3 text-sm md:text-base text-ink/70 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PROCESS (vertical timeline) ============== */}
      <section className="py-20 md:py-28 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
            <span className="col-span-12 md:col-span-5 text-xs uppercase tracking-[0.25em] text-ink/60">
              [ Process ]
            </span>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl md:text-6xl">
              How we ship<span className="text-orange-ascode">.</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            <div
              aria-hidden
              className="hidden md:block absolute top-6 left-0 right-0 h-px bg-cream-300"
            />
            {s.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative pt-14"
              >
                <span className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 rounded-full bg-ink text-cream-50 font-mono text-sm">
                  {p.step}
                </span>
                <h3 className="font-display text-xl md:text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== DELIVERABLES + STACK ============== */}
      <section className="py-20 md:py-28 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Deliverables ]</span>
            <h2 className="mt-3 h-editorial text-3xl md:text-5xl">
              What lands in your inbox<span className="text-orange-ascode">.</span>
            </h2>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {s.deliverables.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 border border-cream-300 bg-cream-50 p-4 hover:border-orange-ascode/60 transition-colors"
                >
                  <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-orange-ascode/15 text-orange-ascode text-sm shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-ink/80 leading-relaxed">{d}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="sticky top-28 border border-cream-300 bg-cream-50 p-7 md:p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Stack ]</span>
              <p className="mt-3 text-ink/70 text-sm leading-relaxed">
                Battle-tested tools we reach for on this kind of work.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs bg-ink text-cream-50 rounded-full hover:bg-orange-ascode transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQs ============== */}
      {s.faqs.length > 0 && (
        <section className="py-20 md:py-28 border-b border-cream-300">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ FAQs ]</span>
              <h2 className="mt-3 h-editorial text-3xl md:text-5xl">
                Common questions<span className="text-orange-ascode">.</span>
              </h2>
              <p className="mt-5 text-ink/70 text-sm leading-relaxed max-w-sm">
                Still curious? Drop us a line — we reply within one business day.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 divide-y divide-cream-300 border-y border-cream-300">
              {s.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="cursor-pointer font-display text-lg md:text-xl tracking-tight flex items-center justify-between gap-4 list-none">
                    <span>{f.q}</span>
                    <span className="text-orange-ascode text-2xl transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-ink/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============== CTA ============== */}
      <section className="relative py-20 md:py-28 bg-ink text-cream-100 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-orange-ascode/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-20 w-[460px] h-[460px] rounded-full bg-orange-ascode/15 blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-end relative">
          <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl md:text-6xl leading-[1.02]">
            Ready to ship {s.title.toLowerCase()}
            <span className="text-orange-ascode">?</span>
          </h2>
          <div className="col-span-12 md:col-span-5">
            <p className="text-cream-100/75 mb-6 leading-relaxed">
              Tell us about your project. We will get back within one business
              day with a scope, timeline and quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-ascode text-cream-50 text-sm font-medium hover:bg-cream-50 hover:text-ink transition-colors"
              >
                Start the conversation →
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream-100/30 text-cream-100 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
              >
                Other services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== OTHER SERVICES ============== */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-10 md:mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Keep exploring ]</span>
              <h2 className="mt-3 h-editorial text-3xl md:text-5xl">
                Other services<span className="text-orange-ascode">.</span>
              </h2>
            </div>
            <Link to="/services" className="text-sm font-medium link-underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                data-cursor-hover="true"
                className="group relative border border-cream-300 bg-cream-50 p-6 overflow-hidden hover:border-orange-ascode hover:-translate-y-1 transition-all duration-500"
              >
                <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full bg-orange-ascode/0 blur-2xl transition-colors duration-700 group-hover:bg-orange-ascode/25" />
                <span className="relative font-mono text-xs text-ink/50">{o.number}</span>
                <h3 className="relative mt-3 font-display text-xl tracking-tight group-hover:text-orange-ascode transition-colors">
                  {o.title}
                </h3>
                <p className="relative mt-2 text-xs text-ink/60 line-clamp-2 leading-relaxed">
                  {o.tagline}
                </p>
                <span className="relative mt-5 inline-flex text-[11px] uppercase tracking-[0.2em] text-ink/50 group-hover:text-orange-ascode transition-colors">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
