import { Link } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, type Icon } from "@phosphor-icons/react";

export interface ServiceFeature {
  icon: Icon;
  title: string;
  body: string;
}

export interface ServiceStep {
  n: string;
  t: string;
  d: string;
}

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  bullets: string[];
  features: ServiceFeature[];
  process: ServiceStep[];
  stack: string[];
  faqs?: { q: string; a: string }[];
}

export function ServicePage({
  eyebrow,
  title,
  highlight,
  description,
  bullets,
  features,
  process,
  stack,
  faqs = [],
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:px-12 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          · {eyebrow} ·
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-6xl lg:text-7xl"
        >
          {title}{" "}
          {highlight && <span className="text-[var(--color-accent)]">{highlight}</span>}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-balance mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-12 px-6 text-base">
            <Link to="/auth">Start a project <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
            <Link to="/services">All services</Link>
          </Button>
        </div>

        <ul className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle weight="fill" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURES */}
      <section className="border-t border-border bg-[var(--color-surface)]/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What we deliver</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Built to perform. <span className="text-muted-foreground">Engineered to last.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-2xl border border-border/60 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background transition-colors group-hover:bg-[var(--color-accent)]">
                  <f.icon weight="duotone" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Our process</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            A clear path from idea to launch.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border/60 bg-[var(--color-surface)]/40 p-6">
              <p className="font-mono text-xs text-[var(--color-accent)]">{s.n}</p>
              <p className="mt-3 font-display text-lg font-semibold">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* STACK */}
      <section className="border-t border-border bg-[var(--color-surface)]/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Tools & technologies</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border/60 bg-background px-4 py-2 text-sm text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-24 md:px-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Common questions.
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold">
                  {f.q}
                  <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Ready when you are</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Let's build something exceptional together.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
                <Link to="/auth">Get started <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
