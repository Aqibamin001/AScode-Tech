import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Brain, ChatCircleDots, DiscordLogo, SlackLogo, Storefront, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/custom-bots")({
  head: () => ({
    meta: [
      { title: "Custom Bot Development \u2014 ASCode Tech" },
      { name: "description", content: "Telegram, WhatsApp, Discord, Slack \u2014 we build production-grade bots and AI agents for support, sales, ops and automation." },
      { property: "og:title", content: "Custom Bot Development" },
      { property: "og:description", content: "Telegram, WhatsApp, Discord, Slack \u2014 we build production-grade bots and AI agents for support, sales, ops and automation." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Bots & AI Agents"
      title="Bots that work"
      highlight="while you sleep."
      description="Telegram, WhatsApp, Discord, Slack \u2014 we build production-grade bots and AI agents for support, sales, ops and automation."
      bullets={["Telegram, WhatsApp & Discord bots", "Slack apps & integrations", "AI-powered support chatbots", "Lead capture & sales bots", "Notification & alerting bots", "Custom admin panels"]}
      stack={["Node.js", "Python", "Telegraf", "Discord.js", "WhatsApp Cloud API", "OpenAI", "LangChain", "Supabase"]}
      features={[
    { icon: TelegramLogo, title: "Telegram Bots", body: "Channels, groups, payments, mini-apps and full automation." },
    { icon: WhatsappLogo, title: "WhatsApp Bots", body: "Official Cloud API, broadcast, support and commerce flows." },
    { icon: DiscordLogo, title: "Discord Bots", body: "Moderation, gaming, NFT, community and economy bots." },
    { icon: SlackLogo, title: "Slack Apps", body: "Internal tools, workflows and approval bots." },
    { icon: Brain, title: "AI Chatbots", body: "RAG-powered support agents trained on your knowledge base." },
    { icon: Storefront, title: "Sales & Lead Bots", body: "Qualify leads, book demos and close sales 24/7." }
      ]}
      process={[
    { n: "01", t: "Discover", d: "We dig into your goals, audience and constraints to scope the work." },
    { n: "02", t: "Design", d: "Architecture, flows and visuals \u2014 approved before a single line of code." },
    { n: "03", t: "Build", d: "Weekly demos, transparent progress, production-quality engineering." },
    { n: "04", t: "Launch & Grow", d: "We ship, monitor and keep improving after go-live." }
      ]}
      faqs={[
    { q: "How long does a typical project take?", a: "Most projects ship in 2\u20138 weeks depending on scope. Smaller automations and bots can be live in days; full apps take longer. You get a detailed timeline before we start." },
    { q: "How is pricing structured?", a: "We offer fixed-price project quotes for well-scoped work and monthly retainers for ongoing engagements. Every quote is itemized \u2014 no surprises." },
    { q: "Do you provide ongoing support?", a: "Yes. Every project includes a free post-launch warranty period, and we offer maintenance retainers for long-term partnerships." },
    { q: "Who owns the code and IP?", a: "You do. On final delivery, all source code, accounts and IP transfer fully to you." }
      ]}
    />
  );
}
