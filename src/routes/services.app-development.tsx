import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { AndroidLogo, AppleLogo, CloudArrowUp, CreditCard, DeviceMobile, Rocket } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/app-development")({
  head: () => ({
    meta: [
      { title: "App Development \u2014 ASCode Tech" },
      { name: "description", content: "Native and cross-platform mobile apps with beautiful UX, offline support, push notifications and seamless backend integration." },
      { property: "og:title", content: "App Development" },
      { property: "og:description", content: "Native and cross-platform mobile apps with beautiful UX, offline support, push notifications and seamless backend integration." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Mobile App Development"
      title="iOS & Android apps,"
      highlight="built to scale."
      description="Native and cross-platform mobile apps with beautiful UX, offline support, push notifications and seamless backend integration."
      bullets={["iOS (Swift) & Android (Kotlin) native", "React Native & Flutter cross-platform", "Offline-first architecture", "Push notifications & deep linking", "In-app payments & subscriptions", "App Store & Play Store submission"]}
      stack={["Swift", "Kotlin", "React Native", "Flutter", "Expo", "Firebase", "Supabase", "RevenueCat"]}
      features={[
    { icon: AppleLogo, title: "iOS Development", body: "Native Swift apps tuned for iPhone, iPad and Apple ecosystem." },
    { icon: AndroidLogo, title: "Android Development", body: "Native Kotlin apps with Material You and Jetpack." },
    { icon: DeviceMobile, title: "Cross-Platform", body: "React Native & Flutter \u2014 one codebase, both stores." },
    { icon: CloudArrowUp, title: "Backend Integration", body: "Realtime sync, auth, storage and push notifications." },
    { icon: CreditCard, title: "In-App Payments", body: "Stripe, RevenueCat and native IAP subscriptions." },
    { icon: Rocket, title: "Store Submission", body: "We handle App Store and Play Store reviews and updates." }
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
