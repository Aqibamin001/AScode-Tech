import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Hero3D = lazy(() => import("./Hero3D"));

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-cream-100"
    >
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-cream-100" />}>
          {typeof window !== "undefined" && <Hero3D />}
        </Suspense>
      </div>

      <div className="absolute top-20 sm:top-24 md:top-28 left-4 sm:left-6 md:left-10 right-4 z-10 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink/70">
        <span className="inline-block w-4 sm:w-6 h-px bg-ink/60 align-middle mr-2 sm:mr-3" />
        Lahore · Worldwide · Est. 2022
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-32 sm:pt-40 md:pt-52 pb-20 sm:pb-16 md:pb-28">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-editorial text-[clamp(3.25rem,15vw,11rem)] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] leading-[0.88] break-words"
        >
          We build
          <br />
          <span className="italic font-light text-ink/90">the web</span>
          <span className="text-orange-ascode">.</span>
        </motion.h1>

        <div className="mt-8 sm:mt-10 md:mt-16 grid grid-cols-12 gap-4 sm:gap-6">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="col-span-12 md:col-span-5 md:col-start-7 text-base sm:text-lg md:text-xl text-ink max-w-md font-medium bg-cream-100/85 backdrop-blur-sm rounded-md px-4 py-3 sm:px-5 sm:py-4 shadow-sm"
          >
            AScode Tech is an independent web development studio crafting fast,
            editorial, and conversion-obsessed digital experiences — from
            corporate sites to SaaS dashboards.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 bg-ink text-cream-50 rounded-full text-sm sm:text-base font-medium hover:bg-orange-ascode transition-colors"
          >
            See selected work
            <span aria-hidden>↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 border border-ink/80 text-ink rounded-full text-sm sm:text-base font-medium hover:bg-ink hover:text-cream-50 transition-colors"
          >
            Book a call
          </a>
        </motion.div>
      </div>

      <div className="hidden sm:block absolute bottom-6 right-6 md:right-10 z-10 text-xs uppercase tracking-[0.25em] text-ink/60">
        Scroll ↓
      </div>
    </section>
  );
}
