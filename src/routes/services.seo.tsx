import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Article, ChartLineUp, LinkSimple, MagnifyingGlass, MapPin, Wrench } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services \u2014 ASCode Tech" },
      { name: "description", content: "Technical SEO, on-page optimization, content strategy and link building \u2014 we make sure your customers find you before your competitors." },
      { property: "og:title", content: "SEO Services" },
      { property: "og:description", content: "Technical SEO, on-page optimization, content strategy and link building \u2014 we make sure your customers find you before your competitors." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Search Engine Optimization"
      title="Rank higher. Get found."
      highlight="Grow organically."
      description="Technical SEO, on-page optimization, content strategy and link building \u2014 we make sure your customers find you before your competitors."
      bullets={["Full technical SEO audits", "Keyword research & content strategy", "On-page optimization at scale", "Backlink & off-page strategy", "Local SEO & Google Business", "Monthly performance reports"]}
      stack={["Ahrefs", "SEMrush", "Google Search Console", "GA4", "Screaming Frog", "Surfer SEO", "Schema.org"]}
      features={[
    { icon: MagnifyingGlass, title: "Keyword Research", body: "Find the queries your customers actually search for." },
    { icon: Wrench, title: "Technical SEO", body: "Crawlability, schema, Core Web Vitals and site architecture." },
    { icon: Article, title: "On-Page Optimization", body: "Titles, metas, content and internal linking that move rankings." },
    { icon: LinkSimple, title: "Link Building", body: "High-authority, white-hat backlinks to grow your domain." },
    { icon: MapPin, title: "Local SEO", body: "Dominate the map pack and local search results." },
    { icon: ChartLineUp, title: "Reporting & Tracking", body: "Transparent dashboards with rankings, traffic and conversions." }
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
