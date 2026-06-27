import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Compass, Eye, PaintBrush, Palette, PencilLine, Stack } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design \u2014 ASCode Tech" },
      { name: "description", content: "From research and wireframes to high-fidelity prototypes and design systems \u2014 we design products that feel inevitable." },
      { property: "og:title", content: "UI/UX Design" },
      { property: "og:description", content: "From research and wireframes to high-fidelity prototypes and design systems \u2014 we design products that feel inevitable." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Product Design"
      title="Interfaces people"
      highlight="love to use."
      description="From research and wireframes to high-fidelity prototypes and design systems \u2014 we design products that feel inevitable."
      bullets={["User research & journey mapping", "Wireframes & prototypes", "High-fidelity UI design", "Design systems & component libraries", "Brand & visual identity", "Usability testing & iteration"]}
      stack={["Figma", "Framer", "Adobe XD", "Principle", "Maze", "Hotjar", "Tokens Studio", "Storybook"]}
      features={[
    { icon: Compass, title: "Discovery & Research", body: "User interviews, journey maps and product strategy." },
    { icon: PencilLine, title: "Wireframing", body: "Low-fi flows that validate ideas before any pixel is pushed." },
    { icon: PaintBrush, title: "High-Fidelity UI", body: "Pixel-perfect designs in Figma, ready for engineering." },
    { icon: Stack, title: "Design Systems", body: "Token-driven, scalable systems with handoff-ready specs." },
    { icon: Palette, title: "Brand Identity", body: "Logos, palettes and brand systems that stand out." },
    { icon: Eye, title: "Usability Testing", body: "Test, learn and iterate with real users." }
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
