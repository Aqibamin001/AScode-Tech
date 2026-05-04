import aqibImage from "@/assets/aqib.png";
import saadImage from "@/assets/saad.png";

// FormEasy
import formeasyLanding from "@/assets/portfolio/formeasy/landing_page.png";
import formeasyBuilder from "@/assets/portfolio/formeasy/form_builder_app.png";
import formeasyPreview from "@/assets/portfolio/formeasy/form_preview_page.png";
import formeasyResponses from "@/assets/portfolio/formeasy/responses_dashboard.png";
import formeasySettings from "@/assets/portfolio/formeasy/settings_page.png";

// LaunchFlow
import launchflowHome from "@/assets/portfolio/launchflow/home_page_launchflow.png";
import launchflowFeatures from "@/assets/portfolio/launchflow/features_page_launchflow.png";
import launchflowPricing from "@/assets/portfolio/launchflow/pricing_page_launchflow.png";
import launchflowBlog from "@/assets/portfolio/launchflow/blog_page_launchflow.png";
import launchflowContact from "@/assets/portfolio/launchflow/contact_page_launchflow.png";

// ListingPro
import listingproHome from "@/assets/portfolio/listingpro/listingpro_homepage.png";
import listingproSearch from "@/assets/portfolio/listingpro/listingpro_property_search.png";
import listingproDetails from "@/assets/portfolio/listingpro/listingpro_property_details.png";
import listingproAgent from "@/assets/portfolio/listingpro/listingpro_agent_profile.png";
import listingproContact from "@/assets/portfolio/listingpro/listingpro_contact_inquiry.png";

// Boutique
import boutiqueHome from "@/assets/portfolio/boutique/homepage.png";
import boutiqueShop from "@/assets/portfolio/boutique/shop_collection.png";
import boutiqueProduct from "@/assets/portfolio/boutique/product_detail.png";
import boutiqueCart from "@/assets/portfolio/boutique/shopping_cart.png";
import boutiqueCheckout from "@/assets/portfolio/boutique/checkout.png";
import boutiqueOrder from "@/assets/portfolio/boutique/order_confirmation.png";

// Voice
import voiceHome from "@/assets/portfolio/voice/home_voiceflow.png";
import voiceHow from "@/assets/portfolio/voice/how_it_works_voiceflow.png";
import voiceAnalyzer from "@/assets/portfolio/voice/voice_search_analyzer_voiceflow.png";
import voicePackage from "@/assets/portfolio/voice/package_builder_voiceflow.png";
import voiceCase from "@/assets/portfolio/voice/case_studies_voiceflow.png";

// Menu
import menuLanding from "@/assets/portfolio/menu/restaurant_landing_menu_home.png";
import menuCategory from "@/assets/portfolio/menu/menu_category_page.png";
import menuItem from "@/assets/portfolio/menu/single_item_modal.png";
import menuQR from "@/assets/portfolio/menu/qr_code_landing.png";
import menuAdmin from "@/assets/portfolio/menu/admin_dashboard.png";

export const PROJECTS = [
  {
    id: "launchflow",
    title: "LaunchFlow — Modern SaaS Website",
    type: "SaaS · Marketing Site",
    year: "2025",
    summary:
      "A modern marketing site for a SaaS launch platform — home, features, pricing, blog and contact built with conversion-first layouts.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    cover: launchflowHome,
    images: [launchflowHome, launchflowFeatures, launchflowPricing, launchflowBlog, launchflowContact],
  },
  {
    id: "listingpro",
    title: "ListingPro — Luxury Real Estate",
    type: "Real Estate · Web App",
    year: "2025",
    summary:
      "An editorial luxury real-estate platform with rich property search, detail pages, agent profiles and inquiry flows.",
    stack: ["Next.js", "Postgres", "Mapbox"],
    cover: listingproHome,
    images: [listingproHome, listingproSearch, listingproDetails, listingproAgent, listingproContact],
  },
  {
    id: "boutique",
    title: "Modern Luxury Editorial Boutique",
    type: "E-Commerce",
    year: "2025",
    summary:
      "A minimalist editorial boutique with cinematic product storytelling, custom cart and a refined checkout experience.",
    stack: ["Next.js", "Shopify Hydrogen", "Stripe"],
    cover: boutiqueHome,
    images: [boutiqueHome, boutiqueShop, boutiqueProduct, boutiqueCart, boutiqueCheckout, boutiqueOrder],
  },
  {
    id: "formeasy",
    title: "FormEasy — Form Builder",
    type: "SaaS · Web App",
    year: "2025",
    summary:
      "A drag-and-drop form builder with live preview, response dashboard and granular settings — built for fast iteration.",
    stack: ["React", "TypeScript", "Supabase"],
    cover: formeasyLanding,
    images: [formeasyLanding, formeasyBuilder, formeasyPreview, formeasyResponses, formeasySettings],
  },
  {
    id: "voiceflow",
    title: "VoiceFlow — Voice Search Optimization",
    type: "SaaS · Marketing",
    year: "2025",
    summary:
      "A platform for optimizing brands for voice search — analyzer, package builder and case study showcase.",
    stack: ["Next.js", "Node", "OpenAI"],
    cover: voiceHome,
    images: [voiceHome, voiceHow, voiceAnalyzer, voicePackage, voiceCase],
  },
  {
    id: "warm-menu",
    title: "Warm & Organic Digital Menu",
    type: "Hospitality · Web App",
    year: "2025",
    summary:
      "A warm, organic digital menu for restaurants — QR landing, category browse, item modal and admin dashboard.",
    stack: ["React", "Tailwind", "Supabase"],
    cover: menuLanding,
    images: [menuLanding, menuCategory, menuItem, menuQR, menuAdmin],
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
