import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingHeader, MarketingFooter } from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Brain,
  Browsers,
  ChatCircleDots,
  DeviceMobile,
  MagnifyingGlass,
  Megaphone,
  PaintBrush,
  PenNib,
  PuzzlePiece,
  Robot,
  Sparkle,
  TrendUp,
  ArrowRight,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — ASCode Tech" },
      {
        name: "description",
        content:
          "Web development, automation, SEO, digital marketing, content creation, custom bots, trading bots, plugins, mobile apps, AI integration & UI/UX — all under one roof.",
      },
      { property: "og:title", content: "Services — ASCode Tech" },
      {
        property: "og:description",
        content:
          "Everything you need to design, build, automate and grow your digital product.",
      },
    ],
  }),
  component: ServicesIndex,
});

const services = [
  {
    slug: "web-development",
    icon: Browsers,
    title: "Web Development",
    desc: "From marketing sites to complex web apps — we design, build, and ship pixel-perfect, lightning-fast web experiences using the modern stack.",
  },
  {
    slug: "automation",
    icon: Robot,
    title: "Automation Services",
    desc: "We wire up your tools and processes so your team stops copy-pasting and starts shipping. From simple Zapier flows to full custom integrations.",
  },
  {
    slug: "seo",
    icon: MagnifyingGlass,
    title: "SEO Services",
    desc: "Technical SEO, on-page optimization, content strategy and link building — we make sure your customers find you before your competitors.",
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid ads, social, email and growth experiments — run by a team that lives in your analytics dashboard, not on a status call.",
  },
  {
    slug: "content-creation",
    icon: PenNib,
    title: "Content Creation",
    desc: "Blogs, videos, reels, scripts, graphics and full editorial calendars — produced by writers, designers and editors who get your brand.",
  },
  {
    slug: "custom-bots",
    icon: ChatCircleDots,
    title: "Custom Bot Development",
    desc: "Telegram, WhatsApp, Discord, Slack — we build production-grade bots and AI agents for support, sales, ops and automation.",
  },
  {
    slug: "trading-bots",
    icon: TrendUp,
    title: "Trading Bot Development",
    desc: "Crypto, forex and stock trading bots — strategy design, backtesting, paper trading and live execution on the exchange of your choice.",
  },
  {
    slug: "trending-bots",
    icon: Sparkle,
    title: "Trending Bots",
    desc: "Sniping bots, copy-trading bots, social automation bots, scraping bots, NFT mint bots, sneaker bots — if it's trending, we've built one.",
  },
  {
    slug: "plugin-development",
    icon: PuzzlePiece,
    title: "Custom Plugin Development",
    desc: "WordPress, Shopify, Figma, Chrome, VS Code, Slack, Notion — we build plugins and extensions that extend the tools your users already love.",
  },
  {
    slug: "app-development",
    icon: DeviceMobile,
    title: "App Development",
    desc: "Native and cross-platform mobile apps with beautiful UX, offline support, push notifications and seamless backend integration.",
  },
  {
    slug: "ai-integration",
    icon: Brain,
    title: "AI Integration",
    desc: "ChatGPT, Claude, Gemini and open-source LLMs — embedded into your app with RAG, fine-tuning, and production-grade guardrails.",
  },
  {
    slug: "ui-ux-design",
    icon: PaintBrush,
    title: "UI/UX Design",
    desc: "From research and wireframes to high-fidelity prototypes and design systems — we design products that feel inevitable.",
  },
];

function ServicesIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />

      <main className="flex-1">
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4"
            >
              · Our Services ·
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Everything you need to design, build & grow your digital product.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              One team. End-to-end execution. From your first prototype to your
              millionth user — we cover the whole stack of modern digital work.
            </motion.p>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full p-6 rounded-2xl border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <s.icon size={24} weight="duotone" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {s.desc}
                  </p>

                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center bg-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not sure where to start?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us about your project — we'll point you in the right
              direction.
            </p>

            <Button asChild size="lg">
              <Link to="/contact">Start a project</Link>
            </Button>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
