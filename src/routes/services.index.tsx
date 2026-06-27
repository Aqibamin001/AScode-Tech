import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — AScode Tech" },
      {
        name: "description",
        content:
          "Web & app development, automation, SEO, digital marketing, content, custom bots, trading bots, plugins, AI integration and more. Explore every service AScode Tech offers.",
      },
      { property: "og:title", content: "Services — AScode Tech" },
      {
        property: "og:description",
        content:
          "Full-stack digital studio: web, apps, automation, SEO, marketing, content, bots, plugins, AI.",
      },
      { property: "og:url", content: "https://as-code.tech/services" },
    ],
    links: [{ rel: "canonical", href: "https://as-code.tech/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <main className="bg-cream-100 pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ All Services ]</span>
          </div>
          <h1 className="col-span-12 md:col-span-7 h-editorial text-5xl md:text-7xl lg:text-[5.5rem]">
            Everything we
            <br />
            build for you<span className="text-orange-ascode">.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            >
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative block h-full border border-cream-300 bg-cream-50 p-7 md:p-8 overflow-hidden hover:border-orange-ascode transition-colors"
                data-cursor-hover="true"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-orange-ascode/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col h-full">
                  <span className="font-mono text-xs text-ink/50">{s.number}</span>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl tracking-tight group-hover:text-orange-ascode transition-colors">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed flex-1">{s.short}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-ink/20 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium link-underline">
                    Explore service →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 border-t border-cream-300 pt-12 md:pt-16 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <h3 className="col-span-12 md:col-span-7 h-editorial text-3xl md:text-5xl">
            Not sure which one you need<span className="text-orange-ascode">?</span>
          </h3>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink/70 mb-4">Tell us about the problem — we will recommend the right scope.</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
            >
              Start a conversation →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
