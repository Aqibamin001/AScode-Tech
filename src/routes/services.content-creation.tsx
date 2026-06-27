import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Article, Calendar, PaintBrush, PenNib, Quotes, VideoCamera, YoutubeLogo } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/content-creation")({
  head: () => ({
    meta: [
      { title: "Content Creation \u2014 ASCode Tech" },
      { name: "description", content: "Blogs, videos, reels, scripts, graphics and full editorial calendars \u2014 produced by writers, designers and editors who get your brand." },
      { property: "og:title", content: "Content Creation" },
      { property: "og:description", content: "Blogs, videos, reels, scripts, graphics and full editorial calendars \u2014 produced by writers, designers and editors who get your brand." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Content Studio"
      title="Content that earns"
      highlight="attention."
      description="Blogs, videos, reels, scripts, graphics and full editorial calendars \u2014 produced by writers, designers and editors who get your brand."
      bullets={["Long-form blogs & SEO articles", "Short-form video & reels", "YouTube scripting & editing", "Social graphics & carousels", "Brand storytelling & copywriting", "Editorial calendars & ghostwriting"]}
      stack={["Notion", "Figma", "Adobe Premiere", "After Effects", "Canva", "ChatGPT", "Midjourney", "ElevenLabs"]}
      features={[
    { icon: Article, title: "Blog & SEO Articles", body: "Research-backed long-form content that ranks and converts." },
    { icon: VideoCamera, title: "Video & Reels", body: "Short-form video editing for IG, TikTok and YouTube Shorts." },
    { icon: YoutubeLogo, title: "YouTube Production", body: "Scripts, edits and thumbnails for high-retention videos." },
    { icon: PaintBrush, title: "Graphics & Design", body: "Carousels, infographics and branded social assets." },
    { icon: Quotes, title: "Copywriting", body: "Web, email and ad copy that sounds like you, only sharper." },
    { icon: Calendar, title: "Editorial Calendar", body: "End-to-end content planning, production and publishing." }
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
