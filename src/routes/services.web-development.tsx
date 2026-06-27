import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Browsers, Code, Gauge, Lock, ShoppingCart, Wrench } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development \u2014 ASCode Tech" },
      { name: "description", content: "From marketing sites to complex web apps \u2014 we design, build, and ship pixel-perfect, lightning-fast web experiences using the modern stack." },
      { property: "og:title", content: "Web Development" },
      { property: "og:description", content: "From marketing sites to complex web apps \u2014 we design, build, and ship pixel-perfect, lightning-fast web experiences using the modern stack." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Web Development Services"
      title="Fast, modern websites that"
      highlight="convert."
      description="From marketing sites to complex web apps \u2014 we design, build, and ship pixel-perfect, lightning-fast web experiences using the modern stack."
      bullets={["Custom React, Next.js & TanStack builds", "Responsive, mobile-first design", "SEO-ready with 95+ Lighthouse scores", "CMS integration & headless options", "E-commerce & payment integration", "Ongoing support and maintenance"]}
      stack={["React", "Next.js", "TanStack Start", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Cloudflare"]}
      features={[
    { icon: Browsers, title: "Marketing Websites", body: "Conversion-focused landing pages and brand sites that load fast and rank high." },
    { icon: Code, title: "Custom Web Apps", body: "SaaS dashboards, portals, and tools built with React, TypeScript & Tailwind." },
    { icon: ShoppingCart, title: "E-commerce", body: "Shopify, Stripe and headless commerce stores tuned for sales." },
    { icon: Gauge, title: "Performance Optimization", body: "Sub-second loads, perfect Core Web Vitals, edge-deployed globally." },
    { icon: Lock, title: "Security & Auth", body: "Production-ready authentication, RLS, and OWASP-aligned security." },
    { icon: Wrench, title: "Maintenance & Support", body: "We don't disappear after launch \u2014 bug fixes, updates and growth work." }
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
