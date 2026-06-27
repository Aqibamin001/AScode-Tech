import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Copy, Crosshair, Globe, Image, ShareNetwork, ShoppingBag, Sparkle } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/trending-bots")({
  head: () => ({
    meta: [
      { title: "Trending Bots \u2014 ASCode Tech" },
      { name: "description", content: "Sniping bots, copy-trading bots, social automation bots, scraping bots, NFT mint bots, sneaker bots \u2014 if it's trending, we've built one." },
      { property: "og:title", content: "Trending Bots" },
      { property: "og:description", content: "Sniping bots, copy-trading bots, social automation bots, scraping bots, NFT mint bots, sneaker bots \u2014 if it's trending, we've built one." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Bots Everyone Is Building"
      title="The bots people"
      highlight="actually pay for."
      description="Sniping bots, copy-trading bots, social automation bots, scraping bots, NFT mint bots, sneaker bots \u2014 if it's trending, we've built one."
      bullets={["Crypto sniping & MEV bots", "Copy-trading bots", "NFT mint & monitoring bots", "Social media automation bots", "Web scraping & data bots", "Sneaker & checkout bots", "AI content generation bots"]}
      stack={["Python", "Node.js", "Playwright", "Puppeteer", "Web3.js", "ethers.js", "Solana Web3", "Proxies"]}
      features={[
    { icon: Crosshair, title: "Sniper Bots", body: "Token launch snipers on Solana, ETH, BNB and Base." },
    { icon: Copy, title: "Copy-Trading", body: "Mirror top traders across CEX and DEX in real time." },
    { icon: Image, title: "NFT Mint Bots", body: "Mint and monitor drops with gas optimization." },
    { icon: ShareNetwork, title: "Social Automation", body: "Twitter/X, Instagram, Threads engagement bots." },
    { icon: Globe, title: "Scraping Bots", body: "Large-scale, proxy-rotated, anti-bot resistant scrapers." },
    { icon: ShoppingBag, title: "Checkout Bots", body: "Sneaker, ticket and limited-drop checkout automation." }
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
