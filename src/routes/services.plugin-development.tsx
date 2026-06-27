import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Code, FigmaLogo, PaperPlaneTilt, Puzzle, PuzzlePiece, Storefront, WordpressLogo } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/plugin-development")({
  head: () => ({
    meta: [
      { title: "Custom Plugin Development \u2014 ASCode Tech" },
      { name: "description", content: "WordPress, Shopify, Figma, Chrome, VS Code, Slack, Notion \u2014 we build plugins and extensions that extend the tools your users already love." },
      { property: "og:title", content: "Custom Plugin Development" },
      { property: "og:description", content: "WordPress, Shopify, Figma, Chrome, VS Code, Slack, Notion \u2014 we build plugins and extensions that extend the tools your users already love." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Plugins & Extensions"
      title="Custom plugins for"
      highlight="any platform."
      description="WordPress, Shopify, Figma, Chrome, VS Code, Slack, Notion \u2014 we build plugins and extensions that extend the tools your users already love."
      bullets={["WordPress & WooCommerce plugins", "Shopify apps (public & private)", "Chrome & Firefox extensions", "Figma & VS Code plugins", "Slack, Notion & Zapier apps", "Marketplace submission support"]}
      stack={["PHP", "JavaScript", "TypeScript", "React", "Shopify Polaris", "Chrome MV3", "Figma API", "VS Code API"]}
      features={[
    { icon: WordpressLogo, title: "WordPress Plugins", body: "Custom blocks, integrations and WooCommerce extensions." },
    { icon: Storefront, title: "Shopify Apps", body: "Embedded admin apps, theme extensions and checkout UI." },
    { icon: PuzzlePiece, title: "Browser Extensions", body: "Chrome, Edge & Firefox extensions with MV3 compliance." },
    { icon: FigmaLogo, title: "Figma Plugins", body: "Design tooling that ships inside Figma's plugin runtime." },
    { icon: Code, title: "IDE Extensions", body: "VS Code & JetBrains plugins for developer productivity." },
    { icon: PaperPlaneTilt, title: "Marketplace Launch", body: "We handle review, submission and ongoing updates." }
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
