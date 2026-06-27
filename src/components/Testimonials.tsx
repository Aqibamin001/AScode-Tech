import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Star } from "@phosphor-icons/react";
import { listTestimonials } from "@/lib/cms.functions";

export function Testimonials() {
  const fn = useServerFn(listTestimonials);
  const { data } = useQuery({ queryKey: ["testimonials"], queryFn: fn });
  const items = (data ?? []).filter((t) => t.featured);
  if (!items.length) return null;

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Founders ship plans they're proud of.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.id} className="flex flex-col rounded-2xl border border-border/60 bg-[var(--color-surface)]/40 p-6">
              <div className="flex gap-0.5 text-[var(--color-accent)]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} weight="fill" className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {t.avatar_url ? (
                  <img src={t.avatar_url} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div className="text-sm">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {[t.role, t.company].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}