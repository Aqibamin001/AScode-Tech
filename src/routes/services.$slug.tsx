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
      return {
        meta: [{ title: "Service — AScode Tech" }],
      };
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

  return (
    <main className="bg-cream-100">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-cream-300 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-orange-ascode/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <Link to="/services" className="text-xs uppercase tracking-[0.25em] text-ink/60 link-underline">
            ← All services
          </Link>
          <div className="mt-6 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">{s.hero.eyebrow}</span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4 h-editorial text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
              >
                {s.hero.headline.replace(s.hero.accent, "")}
                <span className="text-orange-ascode">{s.hero.accent}</span>.
              </motion.h1>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-ink/75 leading-relaxed text-lg">{s.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs border border-ink/30 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
                >
                  Get a quote →
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/30 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
                >
                  Other services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
            <span className="col-span-12 md:col-span-5 text-xs uppercase tracking-[0.25em] text-ink/60">
              [ What you get ]
            </span>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl md:text-6xl">
              Built around {s.title.toLowerCase()}<span className="text-orange-ascode">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {s.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border border-cream-300 bg-cream-50 p-7 md:p-8 hover:border-orange-ascode transition-colors"
              >
                <span className="font-mono text-xs text-ink/50">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl md:text-2xl tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16">
            <span className="col-span-12 md:col-span-5 text-xs uppercase tracking-[0.25em] text-ink/60">
              [ Process ]
            </span>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl md:text-6xl">
              How we run it<span className="text-orange-ascode">.</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {s.process.map((p) => (
              <li key={p.step} className="border-t-2 border-ink pt-5">
                <span className="font-mono text-xs text-ink/50">{p.step}</span>
                <h3 className="mt-2 font-display text-xl tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables + stack */}
      <section className="py-16 md:py-24 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Deliverables ]</span>
            <h2 className="mt-3 h-editorial text-3xl md:text-5xl">
              What lands in your inbox<span className="text-orange-ascode">.</span>
            </h2>
            <ul className="mt-8 space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-ascode shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="border border-cream-300 bg-cream-50 p-7 md:p-8">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Stack ]</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs bg-ink text-cream-50 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-cream-300">
                <span className="text-xs uppercase tracking-[0.25em] text-ink/60">{s.pricing.label}</span>
                <p className="mt-2 font-display text-4xl md:text-5xl tracking-tight">{s.pricing.price}</p>
                <p className="mt-2 text-sm text-ink/60">{s.pricing.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {s.faqs.length > 0 && (
        <section className="py-16 md:py-24 border-b border-cream-300">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ FAQs ]</span>
              <h2 className="mt-3 h-editorial text-3xl md:text-5xl">
                Common questions<span className="text-orange-ascode">.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 divide-y divide-cream-300 border-t border-cream-300">
              {s.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer font-display text-lg md:text-xl tracking-tight flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-orange-ascode text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-ink/70 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-ink text-cream-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <h2 className="col-span-12 md:col-span-7 h-editorial text-4xl md:text-6xl">
            Ready to ship {s.title.toLowerCase()}<span className="text-orange-ascode">?</span>
          </h2>
          <div className="col-span-12 md:col-span-5">
            <p className="text-cream-100/75 mb-5">
              Tell us about your project. We will get back within one business day with a scope and quote.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-ascode text-cream-50 text-sm font-medium hover:bg-cream-50 hover:text-ink transition-colors"
            >
              Start the conversation →
            </a>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-10">
            <h2 className="h-editorial text-3xl md:text-5xl">
              Other services<span className="text-orange-ascode">.</span>
            </h2>
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
                className="group border border-cream-300 bg-cream-50 p-6 hover:border-orange-ascode transition-colors"
                data-cursor-hover="true"
              >
                <span className="font-mono text-xs text-ink/50">{o.number}</span>
                <h3 className="mt-2 font-display text-xl tracking-tight group-hover:text-orange-ascode transition-colors">
                  {o.title}
                </h3>
                <p className="mt-2 text-xs text-ink/60 line-clamp-2">{o.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
