import { TESTIMONIALS } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section className="relative bg-cream-200 py-24 md:py-36 border-t border-cream-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ 05 — Kind words ]</span>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-cream-300">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="p-8 md:p-10 border-b border-r border-cream-300 bg-cream-100 flex flex-col justify-between min-h-[320px]"
            >
              <blockquote className="font-display text-xl md:text-2xl tracking-tight leading-snug text-ink">
                <span className="text-orange-ascode mr-1">"</span>
                {t.quote}
                <span className="text-orange-ascode ml-1">"</span>
              </blockquote>
              <figcaption className="mt-10 text-sm">
                <span className="font-semibold">{t.author}</span>
                <span className="text-ink/60"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
