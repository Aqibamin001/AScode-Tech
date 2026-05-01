import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import Portfolio from "@/components/site/Portfolio";
import Founders from "@/components/site/Founders";
import Testimonials from "@/components/site/Testimonials";
import ContactForm from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AScode Tech — Web Development Studio in Lahore" },
      { name: "description", content: "Independent web development studio crafting fast, editorial websites, SaaS dashboards and web apps. Based in Lahore, working worldwide." },
      { property: "og:title", content: "AScode Tech — Web Development Studio in Lahore" },
      { property: "og:description", content: "Fast, editorial websites and web apps. Based in Lahore, working worldwide." },
      { property: "og:url", content: "https://as-code.tech/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://as-code.tech/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AScode Tech",
          url: "https://as-code.tech/",
          email: "info@as-code.tech",
          telephone: "+923266502223",
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Smooth-scroll to in-page hash on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Portfolio />
      <Founders />
      <Testimonials />
      <ContactForm />
    </>
  );
}
