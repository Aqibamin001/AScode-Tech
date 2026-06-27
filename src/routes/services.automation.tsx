import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Bell, Brain, ChartBar, Database, PlugsConnected, Robot } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/automation")({
  head: () => ({
    meta: [
      { title: "Automation Services \u2014 ASCode Tech" },
      { name: "description", content: "We wire up your tools and processes so your team stops copy-pasting and starts shipping. From simple Zapier flows to full custom integrations." },
      { property: "og:title", content: "Automation Services" },
      { property: "og:description", content: "We wire up your tools and processes so your team stops copy-pasting and starts shipping. From simple Zapier flows to full custom integrations." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Workflow Automation"
      title="Automate the busywork."
      highlight="Scale the impact."
      description="We wire up your tools and processes so your team stops copy-pasting and starts shipping. From simple Zapier flows to full custom integrations."
      bullets={["No-code & custom automations", "API integrations between any SaaS tools", "AI-powered workflow agents", "Internal tools & dashboards", "Data sync, ETL & reporting pipelines", "Slack, Email & WhatsApp notifications"]}
      stack={["n8n", "Make", "Zapier", "Node.js", "Python", "OpenAI", "LangChain", "Webhooks"]}
      features={[
    { icon: Robot, title: "Workflow Automation", body: "Replace manual processes with reliable, observable automations." },
    { icon: PlugsConnected, title: "API Integrations", body: "Connect CRMs, ERPs, payment, email and any REST/GraphQL API." },
    { icon: Database, title: "Data Pipelines", body: "ETL jobs, syncs and reporting across your data sources." },
    { icon: Brain, title: "AI Agents", body: "LLM-powered agents that classify, summarize, route and act." },
    { icon: Bell, title: "Smart Notifications", body: "Real-time alerts on Slack, Email, WhatsApp or Telegram." },
    { icon: ChartBar, title: "Internal Dashboards", body: "Custom internal tools that give ops teams superpowers." }
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
