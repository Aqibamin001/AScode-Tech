import aqibImage from "@/assets/aqib.png";
import saadImage from "@/assets/saad.png";

import resumegrowCover from "@/assets/portfolio/new/resumegrow.png";
import bizplanCover from "@/assets/portfolio/new/bizplan-ai.png";
import cvbuilderCover from "@/assets/portfolio/new/cvbuilder.png";

export const PROJECTS = [
  {
    id: "resumegrow",
    title: "ResumeGrow — Land Your Dream Job Faster",
    type: "SaaS · Career Platform",
    year: "2025",
    summary:
      "An all-in-one resume platform with free ATS scoring, expert resume writing and LinkedIn optimization — trusted by 50,000+ professionals.",
    stack: ["Next.js", "AI", "Tailwind"],
    cover: resumegrowCover,
    url: "https://resumegrow.com",
  },
  {
    id: "bizplan-ai",
    title: "BizPlan AI — Investor-Ready Business Plans",
    type: "SaaS · AI Tool",
    year: "2025",
    summary:
      "Generate complete investor-ready business plans, financial projections, market research and growth strategies in minutes — not weeks.",
    stack: ["React", "OpenAI", "Cloudflare Workers"],
    cover: bizplanCover,
    url: "https://bizplan-ai.tiktok00009998.workers.dev/",
  },
  {
    id: "cvbuilder-ai",
    title: "CVBuilder AI — Turn Experience Into Opportunities",
    type: "SaaS · Career Platform",
    year: "2025",
    summary:
      "Build ATS-optimized resumes, generate personalized cover letters and prep for interviews with AI-powered career tools.",
    stack: ["React", "AI", "Cloudflare Workers"],
    cover: cvbuilderCover,
    url: "https://cvbuilder.saadshakoor786sr-e37.workers.dev/",
  },
];

export const SERVICES = [
  { id: "biz", number: "01", title: "Corporate Websites", desc: "Brand-aligned, high-performance business sites built for trust and conversions.", tags: ["CMS", "SEO-ready", "Scalable"] },
  { id: "ecom", number: "02", title: "E-Commerce Stores", desc: "Headless storefronts, smooth checkouts, subscription flows and inventory sync.", tags: ["Shopify", "Stripe", "Headless"] },
  { id: "portfolio", number: "03", title: "Portfolios & Landing Pages", desc: "Editorial landing experiences with heavy motion and WebGL accents that convert.", tags: ["GSAP", "Three.js", "Framer"] },
  { id: "saas", number: "04", title: "Web Apps & SaaS Dashboards", desc: "Custom dashboards, complex data tables, auth flows and real-time interfaces.", tags: ["React", "FastAPI", "Postgres"] },
  { id: "seo", number: "05", title: "SEO & Maintenance", desc: "Ongoing performance tuning, on-page SEO, A/B experiments and uptime monitoring.", tags: ["Core Web Vitals", "Ahrefs", "GA4"] },
];

export const FOUNDERS = [
  { name: "Aqib Amin", role: "Co-Founder & CEO", bio: "Aqib leads strategy, product and client partnerships. 8+ years shipping digital products for startups and enterprise.", image: aqibImage },
  { name: "Saad Shakoor", role: "Co-Founder & CTO", bio: "Saad owns engineering and architecture. Specializes in React, Next.js, distributed systems and developer experience.", image: saadImage },
];

export const TESTIMONIALS = [
  { quote: "AScode Tech rebuilt our storefront in six weeks and doubled our conversion rate. The craft is undeniable.", author: "Mariam K.", role: "Founder, Atelier Studio" },
  { quote: "They understand product, not just pixels. Our SaaS dashboard is finally something our users enjoy opening.", author: "Daniyal H.", role: "Head of Product, Ledgerly" },
  { quote: "The 3D hero they built for our launch was shared across three design communities on day one.", author: "Sana R.", role: "Creative Director, Noor.Co" },
];
