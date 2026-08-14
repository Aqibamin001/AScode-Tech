import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Award,
  Briefcase,
  Wallet,
  FileEdit,
  CalendarClock,
  CalendarCheck2,
  Globe2,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/internship")({
  head: () => ({
    meta: [
      { title: "3-Month Online Course + Internship Program — AScode Tech" },
      {
        name: "description",
        content:
          "Join AScode Tech's 3-month remote course + internship in WordPress Development, Python Development or SEO. Student portal, tasks, certificate, and a shot at job placement. Enrollment closes 18 August 2026.",
      },
      { property: "og:title", content: "3-Month Online Course + Internship Program — AScode Tech" },
      {
        property: "og:description",
        content:
          "Remote internship covering WordPress, Python & SEO. Free internship, Rs. 1,000 registration. Classes start 20 August 2026.",
      },
      { property: "og:url", content: "https://as-code.tech/internship" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://as-code.tech/internship" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "3-Month Online Course + Internship Program",
          description:
            "Remote internship + course covering WordPress Development, Python Development and SEO with student portal, tasks, certificate and job placement opportunity.",
          provider: {
            "@type": "Organization",
            name: "AScode Tech",
            sameAs: "https://as-code.tech",
          },
        }),
      },
    ],
  }),
  component: InternshipPage,
});

const TRACKS = [
  {
    number: "01",
    title: "WordPress Development",
    desc: "Themes, custom plugins, page builders, performance and real client-style projects.",
  },
  {
    number: "02",
    title: "Python Development",
    desc: "Core Python, automation scripts, APIs, and practical mini-projects you can show off.",
  },
  {
    number: "03",
    title: "SEO",
    desc: "On-page, technical & content SEO — the same playbook we use for our own clients.",
  },
];

const GET_ITEMS = [
  { icon: GraduationCap, text: "3 months of practical learning + internship" },
  { icon: LayoutDashboard, text: "Your own Student Portal" },
  { icon: ClipboardList, text: "Tasks, assignments & practice resources" },
  { icon: BarChart3, text: "Performance / score tracking" },
  { icon: Award, text: "Certificate after successful completion" },
  { icon: Briefcase, text: "Top performers may get a job placement opportunity at AScode Tech" },
];

const FACTS = [
  { icon: Wallet, label: "Internship", value: "FREE" },
  { icon: FileEdit, label: "Enrollment / Registration Fee", value: "Rs. 1,000" },
  { icon: CalendarClock, label: "Last Date to Enroll", value: "18 August 2026" },
  { icon: CalendarCheck2, label: "Classes Start", value: "20 August 2026" },
  { icon: Globe2, label: "Format", value: "100% Remote" },
];

const STEPS = [
  {
    n: "01",
    title: "Apply online",
    desc: "Fill the short application form with your details and preferred track.",
  },
  {
    n: "02",
    title: "Confirm your seat",
    desc: "Pay the Rs. 1,000 registration fee to lock your seat before 18 August 2026.",
  },
  {
    n: "03",
    title: "Get portal access",
    desc: "Receive your Student Portal login — tasks, resources & tracking all in one place.",
  },
  {
    n: "04",
    title: "Start learning",
    desc: "Classes begin 20 August 2026. Learn, practice, get scored, and grow for 3 months.",
  },
];

const FAQS = [
  {
    q: "Is this program really remote?",
    a: "Yes — 100% remote. You can join from anywhere as long as you have a laptop/phone and internet connection.",
  },
  {
    q: "Is the internship paid?",
    a: "The internship itself is free to join — you only pay the one-time Rs. 1,000 enrollment/registration fee to secure your seat.",
  },
  {
    q: "Will I really get a job offer?",
    a: "High-performing students who clear our end-of-program interview may receive a job placement opportunity at AScode Tech. It's performance-based, not guaranteed to everyone.",
  },
  {
    q: "What do I get at the end?",
    a: "A certificate of completion, a portfolio of practical work from your track, and a performance record from the Student Portal.",
  },
  {
    q: "How do I apply?",
    a: "Click \"Apply Now\" below to open the application form, or message us directly on WhatsApp at 0326-6502223 or 0311-6576844.",
  },
];

function InternshipPage() {
  return (
    <main className="bg-cream-100 pt-28 pb-24 md:pt-36 md:pb-36">
      {/* Urgency banner */}
      <div className="ticker-row bg-ink text-cream-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs md:text-sm">
          <span className="font-medium">⏳ Enrollment closes 18 August 2026</span>
          <span className="hidden sm:inline text-cream-50/40">•</span>
          <span className="text-cream-50/80">Classes start 20 August 2026 — seats are limited</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Hero */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-12 md:mt-16 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink/60">
              <Rocket className="w-3.5 h-3.5 text-orange-ascode" />
              [ Course + Internship ]
            </span>
            <p className="mt-6 text-ink/70 max-w-sm leading-relaxed hidden md:block">
              Build real-world skills with AScode Tech through a fully remote program covering
              WordPress Development, Python Development, and SEO.
            </p>
          </div>
          <h1 className="col-span-12 md:col-span-7 h-editorial text-4xl sm:text-5xl md:text-7xl lg:text-[5rem]">
            3-Month Online Course
            <br />
            + Internship<span className="text-orange-ascode">.</span>
          </h1>
          <p className="col-span-12 mt-2 text-ink/70 max-w-lg leading-relaxed md:hidden">
            Build real-world skills with AScode Tech through a fully remote program covering
            WordPress Development, Python Development, and SEO.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4 mb-16 md:mb-24">
          <Link
            to="/internship/apply"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-ascode text-cream-50 text-sm font-medium hover:bg-ink transition-colors"
            data-cursor-hover="true"
          >
            Apply Now
            <span aria-hidden>→</span>
          </Link>
          <a
            href="https://wa.me/923266502223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink/20 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick facts strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-20 md:mb-28">
          {FACTS.map((f) => (
            <div
              key={f.label}
              className="border border-cream-300 bg-cream-50 p-5 flex flex-col gap-3"
            >
              <f.icon className="w-5 h-5 text-orange-ascode" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-ink/50">{f.label}</div>
                <div className="mt-1 font-display font-bold text-lg md:text-xl leading-tight">
                  {f.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tracks */}
        <div className="mb-20 md:mb-28">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Choose your track ]</span>
            </div>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-3xl md:text-5xl">
              Three tracks. One goal<span className="text-orange-ascode">:</span> job-ready skills.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {TRACKS.map((t, i) => (
              <motion.div
                key={t.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative border border-cream-300 bg-cream-50 p-7 md:p-8 overflow-hidden hover:border-orange-ascode transition-colors"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-orange-ascode/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <span className="font-mono text-xs text-ink/50">{t.number}</span>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-tight group-hover:text-orange-ascode transition-colors">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className="mb-20 md:mb-28 border-t border-cream-300 pt-14 md:pt-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ 🎓 What you get ]</span>
            </div>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-3xl md:text-5xl">
              Everything you need to actually grow<span className="text-orange-ascode">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {GET_ITEMS.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="flex items-start gap-4 border border-cream-300 bg-cream-50 p-5"
              >
                <item.icon className="w-5 h-5 text-orange-ascode shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-ink/80 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-20 md:mb-28 border-t border-cream-300 pt-14 md:pt-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ How it works ]</span>
            </div>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-3xl md:text-5xl">
              From application to Day 1<span className="text-orange-ascode">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="border border-cream-300 bg-cream-50 p-6 md:p-7">
                <span className="font-mono text-xs text-ink/50">{s.n}</span>
                <h3 className="mt-3 font-display text-lg md:text-xl tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why this program — marketing / persuasion block */}
        <div className="mb-20 md:mb-28 border-t border-cream-300 pt-14 md:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Why AScode Tech ]</span>
            <h2 className="mt-4 h-editorial text-3xl md:text-5xl">
              Not just a course<span className="text-orange-ascode">.</span> A real studio behind it.
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
              AScode Tech is a working web development studio — not a course factory. You learn the
              same workflows, tools and standards we use with real clients, so what you build here
              is portfolio-ready, not just classroom practice.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {[
              "Learn from an active development studio, not just theory",
              "Small task-based curriculum you can track in real time",
              "Score & performance tracking keeps you accountable",
              "Certificate that shows real, project-based work",
              "Interview-based fast track to a role at AScode Tech",
              "Only Rs. 1,000 to start — the internship itself is free",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-ascode shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-ink/80 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20 md:mb-28 border-t border-cream-300 pt-14 md:pt-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ FAQ ]</span>
            </div>
            <h2 className="col-span-12 md:col-span-7 h-editorial text-3xl md:text-5xl">
              Good to know<span className="text-orange-ascode">.</span>
            </h2>
          </div>
          <div className="max-w-3xl">
            {FAQS.map((f) => (
              <div key={f.q} className="border-t border-cream-300 py-6 first:border-t-0 md:first:border-t">
                <h3 className="font-display text-lg md:text-xl tracking-tight">{f.q}</h3>
                <p className="mt-2 text-sm md:text-base text-ink/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-cream-300 pt-14 md:pt-20 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <h3 className="col-span-12 md:col-span-7 h-editorial text-3xl md:text-5xl">
            Learn • Practice • Grow • Succeed<span className="text-orange-ascode">.</span>
          </h3>
          <div className="col-span-12 md:col-span-5">
            <p className="text-ink/70 mb-4">
              Seats close 18 August 2026. Apply now or message us directly on WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/internship/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
                data-cursor-hover="true"
              >
                Apply Now →
              </Link>
              <a
                href="https://wa.me/923116576844"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/20 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                0311-6576844
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
