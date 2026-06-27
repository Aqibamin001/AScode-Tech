import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { ChartPieSlice, Envelope, Funnel, InstagramLogo, Megaphone, Target, Users } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing \u2014 ASCode Tech" },
      { name: "description", content: "Paid ads, social, email and growth experiments \u2014 run by a team that lives in your analytics dashboard, not on a status call." },
      { property: "og:title", content: "Digital Marketing" },
      { property: "og:description", content: "Paid ads, social, email and growth experiments \u2014 run by a team that lives in your analytics dashboard, not on a status call." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Performance Marketing"
      title="Marketing that actually"
      highlight="moves revenue."
      description="Paid ads, social, email and growth experiments \u2014 run by a team that lives in your analytics dashboard, not on a status call."
      bullets={["Google, Meta & LinkedIn Ads", "Social media management", "Email & lifecycle marketing", "Conversion rate optimization", "Influencer & UGC campaigns", "Full-funnel analytics setup"]}
      stack={["Google Ads", "Meta Ads", "LinkedIn Ads", "Klaviyo", "HubSpot", "GA4", "Mixpanel", "Hotjar"]}
      features={[
    { icon: Target, title: "Paid Ads", body: "Google, Meta, LinkedIn, TikTok \u2014 campaigns that scale profitably." },
    { icon: InstagramLogo, title: "Social Media", body: "Strategy, content and community across every platform." },
    { icon: Envelope, title: "Email Marketing", body: "Lifecycle, broadcast and automation that converts." },
    { icon: Funnel, title: "CRO", body: "A/B tests, landing pages and funnel optimization." },
    { icon: Users, title: "Influencer Marketing", body: "Creator partnerships and UGC that drives real ROI." },
    { icon: ChartPieSlice, title: "Analytics & Attribution", body: "GA4, server-side tracking and clean attribution." }
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
