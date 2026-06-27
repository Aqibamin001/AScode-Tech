import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain, Browsers, ChatCircleDots, DeviceMobile, MagnifyingGlass, Megaphone, PaintBrush, PenNib, Puzzle, Robot, Sparkle, TrendUp, ArrowRight } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — ASCode Tech" },
      { name: "description", content: "Web development, automation, SEO, digital marketing, content creation, custom bots, trading bots, plugins, mobile apps, AI integration & UI/UX — all under one roof." },
      { property: "og:title", content: "Services — ASCode Tech" },
      { property: "og:description", content: "Everything you need to design, build, automate and grow your digital product." },
    ],
  }),
  component: ServicesIndex,
});

const services = [
  { slug: "web-development", icon: Browsers, title: "Web Development", desc: "From marketing sites to complex web apps \u2014 we design, build, and ship pixel-perfect, lightning-fast web experiences using the modern stack." },
  { slug: "automation", icon: Robot, title: "Automation Services", desc: "We wire up your tools and processes so your team stops copy-pasting and starts shipping. From simple Zapier flows to full custom integrations." },
  { slug: "seo", icon: MagnifyingGlass, title: "SEO Services", desc: "Technical SEO, on-page optimization, content strategy and link building \u2014 we make sure your customers find you before your competitors." },
  { slug: "digital-marketing", icon: Megaphone, title: "Digital Marketing", desc: "Paid ads, social, email and growth experiments \u2014 run by a team that lives in your analytics dashboard, not on a status call." },
  { slug: "content-creation", icon: PenNib, title: "Content Creation", desc: "Blogs, videos, reels, scripts, graphics and full editorial calendars \u2014 produced by writers, designers and editors who get your brand." },
  { slug: "custom-bots", icon: ChatCircleDots, title: "Custom Bot Development", desc: "Telegram, WhatsApp, Discord, Slack \u2014 we build production-grade bots and AI agents for support, sales, ops and automation." },
  { slug: "trading-bots", icon: TrendUp, title: "Trading Bot Development", desc: "Crypto, forex and stock trading bots \u2014 strategy design, backtesting, paper trading and live execution on the exchange of your choice." },
  { slug: "trending-bots", icon: Sparkle, title: "Trending Bots", desc: "Sniping bots, copy-trading bots, social automation bots, scraping bots, NFT mint bots, sneaker bots \u2014 if it's trending, we've built one." },
  { slug: "plugin-development", icon: Puzzle, title: "Custom Plugin Development", desc: "WordPress, Shopify, Figma, Chrome, VS Code, Slack, Notion \u2014 we build plugins and extensions that extend the tools your users already love." },
  { slug: "app-development", icon: DeviceMobile, title: "App Development", desc: "Native and cross-platform mobile apps with beautiful UX, offline support, push notifications and seamless backend integration." },
  { slug: "ai-integration", icon: Brain, title: "AI Integration", desc: "ChatGPT, Claude, Gemini and open-source LLMs \u2014 embedded into your app with RAG, fine-tuning, and production-grade guardrails." },
  { slug: "ui-ux-design", icon: PaintBrush, title: "UI/UX Design", desc: "From research and wireframes to high-fidelity prototypes and design systems \u2014 we design products that feel inevitable." }
];

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:px-12 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">· Our Services ·</p>
        <h1 className="text-balance mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tighter md:text-6xl lg:text-7xl">
          Everything you need to <span className="text-[var(--color-accent)]">design, build & grow</span> your digital product.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          One team. End-to-end execution. From your first prototype to your millionth user — we cover the whole stack of modern digital work.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <a
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border/60 bg-[var(--color-surface)]/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background transition-colors group-hover:bg-[var(--color-accent)]">
                  <s.icon weight="duotone" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Not sure where to start?</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Tell us about your project — we'll point you in the right direction.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
                <Link to="/auth">Start a project <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
