// Central catalogue of every service AScode Tech offers.
// Each entry powers both the /services overview and the per-service detail page
// at /services/$slug. Keep slugs stable — they appear in URLs and sitemap.

export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  short: string;
  description: string;
  hero: {
    eyebrow: string;
    headline: string;
    accent: string; // last word(s) highlighted in orange
  };
  features: { title: string; desc: string }[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  tech: string[];
  tags: string[];
  faqs: { q: string; a: string }[];
  pricing: { label: string; price: string; note: string };
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Website Development",
    tagline: "Editorial, fast, conversion-built websites.",
    short:
      "Brand-aligned corporate sites, e-commerce, portfolios and landing pages engineered for trust, SEO and conversions.",
    description:
      "From a one-page launch to a multi-region marketing site, we craft pixel-perfect, motion-rich websites on modern stacks (Next.js, React, TanStack, Astro). Every build ships with a real CMS, perfect Core Web Vitals and a design system you can extend.",
    hero: {
      eyebrow: "[ Service · 01 ]",
      headline: "Websites that look like a brand and load like a product",
      accent: "load like a product",
    },
    features: [
      { title: "Corporate websites", desc: "Brand-aligned, high-performance business sites built for trust." },
      { title: "E-commerce stores", desc: "Headless storefronts, smooth checkouts and subscription flows." },
      { title: "Landing pages", desc: "Editorial campaign pages with motion, video and A/B-ready blocks." },
      { title: "SaaS marketing sites", desc: "Pricing, docs, changelog and integrations — wired to your product." },
    ],
    deliverables: [
      "Custom design system in Figma",
      "Production codebase with Git access",
      "Headless CMS (Sanity / Strapi / Payload)",
      "SEO foundation + analytics wiring",
      "30 days post-launch support",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Brand audit, goals, competitor teardown, sitemap." },
      { step: "02", title: "Design", desc: "Wireframes → high-fidelity mockups → motion direction." },
      { step: "03", title: "Build", desc: "Componentized front-end, CMS, integrations, QA." },
      { step: "04", title: "Launch", desc: "Performance pass, SEO, analytics, handover." },
    ],
    tech: ["Next.js", "React", "TanStack Start", "Tailwind", "Sanity", "Vercel", "Cloudflare"],
    tags: ["CMS", "SEO-ready", "Scalable"],
    faqs: [
      { q: "How long does a website take?", a: "Marketing sites: 3–5 weeks. E-commerce / multi-region: 6–10 weeks." },
      { q: "Do you handle copy & content?", a: "Yes — we partner with strategists and can deliver copy, photography and video." },
    ],
    pricing: { label: "Starts at", price: "$2,500", note: "Fixed-scope projects · monthly retainers available" },
  },
  {
    slug: "app-development",
    number: "02",
    title: "App Development",
    tagline: "Mobile and cross-platform apps people actually open.",
    short:
      "iOS, Android and cross-platform apps built with React Native, Expo and Flutter — designed for App Store quality.",
    description:
      "We design and ship production mobile apps end-to-end: onboarding, auth, payments, push, offline sync, app store submission. Every build is instrumented with crash reporting and analytics from day one.",
    hero: {
      eyebrow: "[ Service · 02 ]",
      headline: "Mobile apps engineered to ship, scale and retain users",
      accent: "ship, scale and retain",
    },
    features: [
      { title: "iOS & Android", desc: "Single React Native / Expo codebase, native modules where it matters." },
      { title: "Cross-platform", desc: "Flutter or React Native for shared logic with platform-native UX." },
      { title: "Backend & APIs", desc: "Supabase, Firebase or custom Node — auth, realtime, payments." },
      { title: "Store submission", desc: "App Store + Play Store packaging, screenshots, ASO assets." },
    ],
    deliverables: [
      "Mobile app for iOS & Android",
      "Admin dashboard (web)",
      "Push, analytics, crash reporting",
      "App Store & Play Store launch",
      "60 days launch support",
    ],
    process: [
      { step: "01", title: "Product spec", desc: "User flows, screen inventory, technical architecture." },
      { step: "02", title: "Design", desc: "Native-feeling UI kit, prototypes, micro-interactions." },
      { step: "03", title: "Build & test", desc: "Weekly TestFlight / Play Internal builds with your team." },
      { step: "04", title: "Launch", desc: "Store submission, marketing assets, analytics review." },
    ],
    tech: ["React Native", "Expo", "Flutter", "Supabase", "Firebase", "Stripe", "RevenueCat"],
    tags: ["iOS", "Android", "React Native", "Flutter"],
    faqs: [
      { q: "Do you publish to the stores?", a: "Yes — we handle Apple/Google review, screenshots, and metadata." },
      { q: "Native or cross-platform?", a: "We recommend React Native or Flutter unless you need heavy native (AR, ARKit, advanced camera)." },
    ],
    pricing: { label: "Starts at", price: "$8,000", note: "MVP in 6–10 weeks · retainers for growth phase" },
  },
  {
    slug: "automation-services",
    number: "03",
    title: "Automation Services",
    tagline: "Workflows that run themselves.",
    short:
      "Custom automations for sales, ops and support — built on n8n, Make, Zapier and direct API integrations.",
    description:
      "Stop paying humans to copy-paste between tools. We map your repetitive workflows, build reliable automations (with logging, retries and alerts) and integrate with anything that has an API — CRMs, spreadsheets, billing, support, internal databases.",
    hero: {
      eyebrow: "[ Service · 03 ]",
      headline: "Reclaim engineering hours with automations you can trust",
      accent: "automations you can trust",
    },
    features: [
      { title: "Workflow automation", desc: "Sales handoffs, lead routing, onboarding, reporting." },
      { title: "Data sync", desc: "Two-way sync between CRMs, spreadsheets, warehouses." },
      { title: "AI-powered flows", desc: "LLM steps for tagging, summarising, drafting, routing." },
      { title: "Internal tools", desc: "Retool / Appsmith dashboards over your existing data." },
    ],
    deliverables: [
      "Workflow audit & opportunity map",
      "Production automations with monitoring",
      "Documentation + Loom walkthroughs",
      "Team training session",
    ],
    process: [
      { step: "01", title: "Audit", desc: "Map current workflows, time spent, tooling, failure points." },
      { step: "02", title: "Design", desc: "Architecture, integration list, error-handling plan." },
      { step: "03", title: "Build", desc: "Implement, test with real data, add observability." },
      { step: "04", title: "Handover", desc: "Docs, training, optional monthly maintenance." },
    ],
    tech: ["n8n", "Make", "Zapier", "Node.js", "Python", "OpenAI", "Retool"],
    tags: ["n8n", "Make", "Zapier", "AI workflows"],
    faqs: [
      { q: "Where are automations hosted?", a: "Self-hosted n8n on your infra, or managed Make / Zapier — your call." },
      { q: "Can you replace an existing Zapier mess?", a: "Yes — we frequently rebuild fragile Zap chains into proper n8n / code." },
    ],
    pricing: { label: "Starts at", price: "$1,500", note: "Per workflow · retainer pricing for ongoing ops" },
  },
  {
    slug: "seo-services",
    number: "04",
    title: "SEO Services",
    tagline: "Rank for the queries that actually convert.",
    short:
      "Technical SEO, content strategy, link building and Core Web Vitals — built around revenue, not vanity metrics.",
    description:
      "We treat SEO like product: instrument it, ship weekly, measure outcomes. Technical audits, schema, internal linking, programmatic pages, content briefs and outreach — all reported in plain English.",
    hero: {
      eyebrow: "[ Service · 04 ]",
      headline: "SEO that compounds — built for queries with intent",
      accent: "queries with intent",
    },
    features: [
      { title: "Technical SEO", desc: "Crawl, schema, Core Web Vitals, indexation, redirects." },
      { title: "Content strategy", desc: "Keyword clusters, briefs, internal linking, refreshes." },
      { title: "Programmatic SEO", desc: "Templated landing pages at scale from your data." },
      { title: "Link building", desc: "Digital PR, HARO, partnerships — no PBNs ever." },
    ],
    deliverables: [
      "Full technical audit",
      "Keyword + content roadmap",
      "Monthly content briefs & publishing",
      "Backlink outreach reports",
      "Monthly performance review",
    ],
    process: [
      { step: "01", title: "Audit", desc: "Site, content, backlinks, competitors, opportunities." },
      { step: "02", title: "Strategy", desc: "Cluster map, content calendar, technical roadmap." },
      { step: "03", title: "Execute", desc: "Ship fixes, publish content, run outreach." },
      { step: "04", title: "Report", desc: "Monthly review tied to traffic, leads and revenue." },
    ],
    tech: ["Ahrefs", "Semrush", "Search Console", "GA4", "Screaming Frog", "Sanity"],
    tags: ["Technical SEO", "Content", "Backlinks", "GA4"],
    faqs: [
      { q: "When will I see results?", a: "Technical wins land in weeks; content compounds at 3–6 months." },
      { q: "Do you guarantee rankings?", a: "No one credible does. We guarantee work, transparency and reporting." },
    ],
    pricing: { label: "Starts at", price: "$1,200/mo", note: "3-month minimum · technical audits one-off" },
  },
  {
    slug: "digital-marketing",
    number: "05",
    title: "Digital Marketing",
    tagline: "Paid, social and lifecycle — wired to revenue.",
    short:
      "Performance marketing, paid social, Google Ads, email lifecycle and influencer campaigns with tracking that actually works.",
    description:
      "We run paid media and lifecycle programs for product-led brands. Server-side tracking, creative testing frameworks and weekly experiments — so growth is repeatable instead of accidental.",
    hero: {
      eyebrow: "[ Service · 05 ]",
      headline: "Marketing that ships experiments, not just impressions",
      accent: "experiments, not just impressions",
    },
    features: [
      { title: "Paid media", desc: "Meta, Google, TikTok, LinkedIn — full-funnel campaigns." },
      { title: "Email & lifecycle", desc: "Klaviyo, Customer.io, Loops — onboarding, retention, win-back." },
      { title: "Creative testing", desc: "Ad creative pipeline, hooks, variants, weekly winners." },
      { title: "Server-side tracking", desc: "GTM Server, Meta CAPI, attribution you can trust." },
    ],
    deliverables: [
      "Channel strategy & budget plan",
      "Tracking setup (GA4, CAPI, GTM Server)",
      "Creative testing pipeline",
      "Weekly experiments & monthly review",
    ],
    process: [
      { step: "01", title: "Diagnose", desc: "Account audit, attribution, funnel, creative library." },
      { step: "02", title: "Plan", desc: "Budget, channels, creative concepts, KPIs." },
      { step: "03", title: "Launch", desc: "Ship campaigns, set up tracking, baseline." },
      { step: "04", title: "Optimise", desc: "Weekly experiment cycle, monthly board-ready report." },
    ],
    tech: ["Meta Ads", "Google Ads", "TikTok", "Klaviyo", "GA4", "GTM Server", "Triple Whale"],
    tags: ["Paid", "Email", "Attribution", "Creative"],
    faqs: [
      { q: "Do you manage creative?", a: "Yes — static, motion and UGC briefs, with optional production." },
      { q: "Minimum ad spend?", a: "We typically work with brands spending $5k+/mo so testing is meaningful." },
    ],
    pricing: { label: "Starts at", price: "$2,000/mo", note: "+ ad spend · 3-month minimum engagement" },
  },
  {
    slug: "content-creation",
    number: "06",
    title: "Content Creation",
    tagline: "Editorial, video and social content that earns attention.",
    short:
      "Long-form articles, video, motion, podcast production and short-form social — produced on a calendar, not on a whim.",
    description:
      "We build content engines: editorial calendars, scripts, production, distribution and repurposing. Every piece is briefed for a search intent or platform, then chopped and re-aired across formats.",
    hero: {
      eyebrow: "[ Service · 06 ]",
      headline: "Content built like a product — briefed, shipped, measured",
      accent: "briefed, shipped, measured",
    },
    features: [
      { title: "Editorial", desc: "Long-form blog, case studies, whitepapers, ghostwriting." },
      { title: "Video", desc: "Product videos, talking-head, explainers, motion graphics." },
      { title: "Short-form social", desc: "Reels, TikTok, Shorts — 30 cuts from one shoot day." },
      { title: "Podcast production", desc: "End-to-end: editing, show notes, distribution, clips." },
    ],
    deliverables: [
      "Quarterly content strategy",
      "Editorial calendar + briefs",
      "Production (writing / video / motion)",
      "Distribution + repurposing kit",
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Audience, positioning, pillars, formats, calendar." },
      { step: "02", title: "Brief", desc: "Per-piece briefs with angles, sources, distribution plan." },
      { step: "03", title: "Produce", desc: "Writing, shooting, editing, motion, design." },
      { step: "04", title: "Distribute", desc: "Ship + repurpose across channels, measure pickup." },
    ],
    tech: ["Notion", "Descript", "Premiere", "After Effects", "Figma", "Webflow"],
    tags: ["Editorial", "Video", "Social", "Podcast"],
    faqs: [
      { q: "Do you ghostwrite for founders?", a: "Yes — interview-based ghostwriting for LinkedIn, X and long-form." },
      { q: "Can you film on location?", a: "Yes — we partner with crews in Lahore, Karachi, Dubai, London, NYC." },
    ],
    pricing: { label: "Starts at", price: "$1,800/mo", note: "Retainer · scope flexes with format mix" },
  },
  {
    slug: "custom-bots",
    number: "07",
    title: "Custom Bot Creation",
    tagline: "Conversational, support, social and Discord/Telegram bots.",
    short:
      "Custom AI chatbots, Discord/Telegram/WhatsApp bots and internal copilots tailored to your product and data.",
    description:
      "We build bots that actually do work — not just toy chat windows. RAG over your docs, tool-use against your APIs, role-based access, observability and cost controls. Deployed where your users already are.",
    hero: {
      eyebrow: "[ Service · 07 ]",
      headline: "Bots that act on your data and your tools — not just chat",
      accent: "act on your data",
    },
    features: [
      { title: "Support chatbots", desc: "RAG over docs + tickets, escalation handoff to humans." },
      { title: "Discord / Telegram / WhatsApp", desc: "Community bots, moderation, commerce, alerts." },
      { title: "Internal copilots", desc: "Slack / Teams bots tied to your internal systems." },
      { title: "Voice agents", desc: "Real-time voice agents for inbound/outbound calls." },
    ],
    deliverables: [
      "Bot deployed to chosen platform",
      "Knowledge base + ingestion pipeline",
      "Tool integrations (CRM, billing, ticketing)",
      "Admin dashboard + analytics",
    ],
    process: [
      { step: "01", title: "Scope", desc: "Use cases, channels, data sources, success metrics." },
      { step: "02", title: "Knowledge", desc: "Ingest docs, build RAG, evaluate retrieval quality." },
      { step: "03", title: "Build", desc: "Tool-use, guardrails, UI, role-based access." },
      { step: "04", title: "Ship", desc: "Deploy, monitor, iterate on conversation logs." },
    ],
    tech: ["OpenAI", "Anthropic", "LangChain", "LlamaIndex", "Pinecone", "Supabase", "Twilio"],
    tags: ["LLM", "RAG", "Discord", "Telegram", "WhatsApp"],
    faqs: [
      { q: "Which model do you use?", a: "Whatever fits — GPT-4.1/5, Claude, Gemini, or open-source self-hosted." },
      { q: "Can the bot take actions?", a: "Yes — function calling against your APIs with full audit logs." },
    ],
    pricing: { label: "Starts at", price: "$3,000", note: "MVP in 2–4 weeks · monthly hosting + iteration" },
  },
  {
    slug: "trading-bots",
    number: "08",
    title: "Trading Bots",
    tagline: "Algorithmic trading systems — crypto, forex, equities.",
    short:
      "Custom algorithmic trading bots, backtested strategies and exchange integrations for crypto, forex and equity markets.",
    description:
      "We build production trading systems: strategy implementation, backtesting harness, risk management, broker/exchange integrations, monitoring and kill-switches. We do not provide financial advice — you bring the strategy or signal, we engineer the system.",
    hero: {
      eyebrow: "[ Service · 08 ]",
      headline: "Algorithmic trading systems engineered for uptime and risk control",
      accent: "uptime and risk control",
    },
    features: [
      { title: "Strategy implementation", desc: "Translate your signal / strategy into a deterministic system." },
      { title: "Backtesting", desc: "Historical data, walk-forward, slippage and fee modelling." },
      { title: "Exchange integration", desc: "Binance, Bybit, Coinbase, MT4/5, IBKR, Alpaca." },
      { title: "Risk & monitoring", desc: "Position limits, drawdown kill-switch, alerts, dashboards." },
    ],
    deliverables: [
      "Backtest report",
      "Live trading bot",
      "Risk controls + monitoring dashboard",
      "Deployment + observability stack",
    ],
    process: [
      { step: "01", title: "Spec", desc: "Strategy, instruments, timeframes, capital, constraints." },
      { step: "02", title: "Backtest", desc: "Build harness, run historical, walk-forward, sensitivity." },
      { step: "03", title: "Paper trade", desc: "Run live on paper account, validate execution + slippage." },
      { step: "04", title: "Go live", desc: "Deploy with risk controls, monitoring, on-call." },
    ],
    tech: ["Python", "TypeScript", "ccxt", "Backtrader", "QuantConnect", "MT5", "TradingView"],
    tags: ["Crypto", "Forex", "Equities", "Backtesting"],
    faqs: [
      { q: "Do you provide strategies?", a: "No — we build systems around your strategy or research." },
      { q: "What about risk?", a: "Every system ships with position limits, kill-switches and alerts." },
    ],
    pricing: { label: "Starts at", price: "$5,000", note: "Per strategy · monthly infra + maintenance separate" },
  },
  {
    slug: "trending-bots",
    number: "09",
    title: "Trending & Niche Bots",
    tagline: "Sniper, arbitrage, sports, betting and scraping bots.",
    short:
      "MEV/sniper bots, arbitrage scanners, sports/odds bots, social scrapers and ticket bots — built ethically, where legal.",
    description:
      "If it can be automated and it has a market, we have probably built it. Sniper bots, arbitrage scanners, sports/odds tools, social scrapers, alerting systems. We only take projects that are legal in your jurisdiction and within the target platform's terms — we will tell you upfront if a brief is not.",
    hero: {
      eyebrow: "[ Service · 09 ]",
      headline: "Niche automation bots — fast, robust, ethically scoped",
      accent: "ethically scoped",
    },
    features: [
      { title: "Sniper / mint bots", desc: "On-chain sniping, mint bots, MEV-aware execution." },
      { title: "Arbitrage scanners", desc: "Cross-exchange, DEX/CEX, price discrepancy alerts." },
      { title: "Sports / odds", desc: "Odds scraping, value detection, alerting." },
      { title: "Scraping & alerting", desc: "Headless scraping with proxy rotation and anti-bot evasion." },
    ],
    deliverables: [
      "Bot binary or hosted service",
      "Configurable strategy parameters",
      "Alerting (Telegram / Discord / email)",
      "Deployment + monitoring",
    ],
    process: [
      { step: "01", title: "Legality check", desc: "Confirm jurisdiction + platform ToS before any work." },
      { step: "02", title: "Spec", desc: "Targets, latency, capital, alerting." },
      { step: "03", title: "Build", desc: "Implement, simulate, harden against rate-limits/bans." },
      { step: "04", title: "Deploy", desc: "Low-latency host, monitoring, on-call window." },
    ],
    tech: ["Node.js", "Python", "Rust", "ethers.js", "web3.py", "Playwright", "Proxies"],
    tags: ["MEV", "Arbitrage", "Scraping", "Alerts"],
    faqs: [
      { q: "Will you build anything?", a: "No. We decline projects that are clearly illegal or harmful." },
      { q: "Latency?", a: "We deploy on bare metal or low-latency regions where it matters." },
    ],
    pricing: { label: "Starts at", price: "$4,000", note: "Scope-dependent · niche bots quoted per brief" },
  },
  {
    slug: "custom-plugins",
    number: "10",
    title: "Custom Plugin Development",
    tagline: "Shopify, WordPress, Figma, VS Code, Chrome extensions.",
    short:
      "Custom plugins, extensions and apps for Shopify, WordPress, Figma, VS Code, Chrome and Slack.",
    description:
      "Need a feature your platform does not ship? We build official-grade plugins and extensions: Shopify apps (Polaris + App Bridge), WordPress plugins (block editor friendly), Figma plugins, VS Code extensions, Chrome/Edge extensions (MV3) and Slack apps.",
    hero: {
      eyebrow: "[ Service · 10 ]",
      headline: "Plugins and extensions that feel native to their platform",
      accent: "feel native",
    },
    features: [
      { title: "Shopify apps", desc: "Embedded apps with Polaris, App Bridge, billing API." },
      { title: "WordPress plugins", desc: "Block editor blocks, REST endpoints, multisite-safe." },
      { title: "Figma plugins", desc: "Design ops tools, content sync, design-to-code." },
      { title: "Browser extensions", desc: "Chrome / Edge / Firefox · Manifest V3 ready." },
    ],
    deliverables: [
      "Plugin / extension source",
      "Store-ready listing assets",
      "Submission to marketplace",
      "Update & support plan",
    ],
    process: [
      { step: "01", title: "Spec", desc: "Feature set, platform constraints, marketplace rules." },
      { step: "02", title: "Design", desc: "UX matching native platform (Polaris / Gutenberg / Figma)." },
      { step: "03", title: "Build", desc: "Implement, test on real stores / sites / files." },
      { step: "04", title: "Publish", desc: "Marketplace submission, listing copy, updates." },
    ],
    tech: ["Shopify Polaris", "WordPress", "Figma API", "VS Code API", "Chrome MV3", "Slack Bolt"],
    tags: ["Shopify", "WordPress", "Figma", "Chrome", "VS Code"],
    faqs: [
      { q: "Do you handle review submissions?", a: "Yes — including responding to reviewer comments." },
      { q: "Can you take over a legacy plugin?", a: "Often yes — we audit first and quote rewrite vs maintain." },
    ],
    pricing: { label: "Starts at", price: "$3,500", note: "Per plugin · maintenance retainer optional" },
  },
  {
    slug: "ai-integration",
    number: "11",
    title: "AI & ML Integration",
    tagline: "LLMs, vector search and AI features inside your product.",
    short:
      "Ship AI features inside your existing product — RAG, agents, summarisation, classification, embeddings and evals.",
    description:
      "We help product teams move past demo-ware: production AI features with proper evals, guardrails, latency budgets, cost monitoring and graceful fallbacks. We work with closed models (OpenAI, Anthropic, Gemini) and open weights (Llama, Qwen, Mistral).",
    hero: {
      eyebrow: "[ Service · 11 ]",
      headline: "AI features that survive contact with real users",
      accent: "real users",
    },
    features: [
      { title: "RAG over your data", desc: "Embeddings, retrieval, re-ranking, citations." },
      { title: "Agents & tool-use", desc: "Function-calling agents wired to your APIs." },
      { title: "Evals & guardrails", desc: "Test sets, regression tracking, PII / safety filters." },
      { title: "Cost & latency", desc: "Model routing, caching, batching, streaming." },
    ],
    deliverables: [
      "AI feature shipped in your product",
      "Eval harness + dashboards",
      "Monitoring + cost reporting",
      "Engineering handover",
    ],
    process: [
      { step: "01", title: "Use-case fit", desc: "Where AI helps vs hurts in your product." },
      { step: "02", title: "Prototype", desc: "Quick spike + eval set to prove the value." },
      { step: "03", title: "Productionise", desc: "Latency, cost, safety, observability." },
      { step: "04", title: "Iterate", desc: "Weekly eval-driven improvements." },
    ],
    tech: ["OpenAI", "Anthropic", "Gemini", "LangChain", "Llamaindex", "Pinecone", "pgvector"],
    tags: ["LLM", "RAG", "Agents", "Evals"],
    faqs: [
      { q: "On-prem / private models?", a: "Yes — we deploy Llama / Qwen on your infra with vLLM." },
      { q: "How do you stop hallucinations?", a: "Retrieval + citations + evals + UI affordances. No magic." },
    ],
    pricing: { label: "Starts at", price: "$4,500", note: "Per feature · ongoing eval retainers available" },
  },
  {
    slug: "ui-ux-design",
    number: "12",
    title: "UI / UX Design",
    tagline: "Product design systems and editorial brand work.",
    short:
      "Product design, interaction design and design systems — for web, mobile and complex SaaS interfaces.",
    description:
      "We design products end-to-end: research, IA, wireframes, hi-fi, prototypes, design systems and dev handover. Equal parts editorial craft and product rigor.",
    hero: {
      eyebrow: "[ Service · 12 ]",
      headline: "Design that is opinionated, systemized and shippable",
      accent: "opinionated and shippable",
    },
    features: [
      { title: "Product design", desc: "Onboarding, complex tables, dashboards, settings." },
      { title: "Design systems", desc: "Figma libraries with code-ready tokens and primitives." },
      { title: "Marketing & brand", desc: "Editorial sites, brand systems, motion direction." },
      { title: "Research & testing", desc: "User interviews, usability testing, journey maps." },
    ],
    deliverables: [
      "Figma source files",
      "Design system + tokens",
      "Prototypes (Figma / code)",
      "Dev handover sessions",
    ],
    process: [
      { step: "01", title: "Research", desc: "Users, competitors, jobs-to-be-done." },
      { step: "02", title: "IA + wireframes", desc: "Sitemap, flows, low-fi exploration." },
      { step: "03", title: "Hi-fi + system", desc: "Pixel design, tokens, components, motion." },
      { step: "04", title: "Handover", desc: "Annotated specs, Storybook, live pairing." },
    ],
    tech: ["Figma", "FigJam", "Framer", "Storybook", "Tailwind"],
    tags: ["Figma", "Design systems", "Prototyping", "Research"],
    faqs: [
      { q: "Do you also build?", a: "Yes — and most clients use the same team to design and build." },
      { q: "Can you work inside our Figma?", a: "Yes — we are happy to embed in your existing system." },
    ],
    pricing: { label: "Starts at", price: "$3,500", note: "Per sprint · retainer for ongoing product design" },
  },
  {
    slug: "maintenance-support",
    number: "13",
    title: "Maintenance & Support",
    tagline: "Ongoing engineering for the things you already shipped.",
    short:
      "Monthly retainers covering uptime, bug fixes, performance, dependency upgrades, on-call and small features.",
    description:
      "Most digital products do not need a new agency — they need a steady team that keeps things fast, patched and improving. We offer monthly retainers with SLA-backed response times, monthly reports and a Slack channel.",
    hero: {
      eyebrow: "[ Service · 13 ]",
      headline: "A reliable team for everything after launch",
      accent: "after launch",
    },
    features: [
      { title: "Uptime & on-call", desc: "Monitoring, alerts, response within agreed SLAs." },
      { title: "Bug fixes & QA", desc: "Triage, fixes, regression tests, release notes." },
      { title: "Performance", desc: "Core Web Vitals, DB tuning, caching, image pipelines." },
      { title: "Small features", desc: "Continuous shipping with weekly demos." },
    ],
    deliverables: [
      "Slack channel + monthly call",
      "SLA-backed response times",
      "Monthly performance & uptime report",
      "Quarterly architecture review",
    ],
    process: [
      { step: "01", title: "Onboard", desc: "Repo, infra, runbooks, alerting, access." },
      { step: "02", title: "Baseline", desc: "Audit, fix sharp edges, set monitoring." },
      { step: "03", title: "Steady state", desc: "Weekly shipping, monthly reports." },
      { step: "04", title: "Review", desc: "Quarterly architecture + roadmap review." },
    ],
    tech: ["Vercel", "Cloudflare", "Sentry", "Datadog", "GitHub Actions", "Linear"],
    tags: ["SLA", "On-call", "Performance", "QA"],
    faqs: [
      { q: "Do you take over from another agency?", a: "Yes — we do clean handovers including code & infra audit." },
      { q: "Minimum commitment?", a: "3 months, month-to-month thereafter." },
    ],
    pricing: { label: "Starts at", price: "$1,500/mo", note: "Hours bank · scales with engineering load" },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
