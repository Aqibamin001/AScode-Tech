const STEPS = [
  { no: "01", title: "Discover", desc: "We audit your goals, audience, brand and competition. Then we align on outcomes, not just deliverables." },
  { no: "02", title: "Design", desc: "Art-directed visual systems and interaction prototypes. We design for clarity, character and conversion." },
  { no: "03", title: "Develop", desc: "Hand-crafted React/Next.js builds with hardened infrastructure, 100/100 performance targets and full CMS control." },
  { no: "04", title: "Deploy", desc: "Launch, measurement and growth. Core Web Vitals monitoring, SEO tuning and iterative experimentation." },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-cream-200 py-24 md:py-36 border-t border-cream-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ 02 — Process ]</span>
          </div>
          <h2 className="col-span-12 md:col-span-7 h-editorial text-5xl md:text-7xl lg:text-[5.5rem]">
            Four steps.
            <br />
            Zero drama<span className="text-orange-ascode">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-cream-300">
          {STEPS.map((s) => (
            <div
              key={s.no}
              className="group relative p-8 md:p-12 border-b border-r border-cream-300 bg-cream-100 hover:bg-cream-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-ink/50">{s.no}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-ascode group-hover:scale-150 transition-transform" />
              </div>
              <h3 className="mt-10 md:mt-16 font-display text-4xl md:text-6xl tracking-tight">{s.title}</h3>
              <p className="mt-6 text-ink/75 max-w-md leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
