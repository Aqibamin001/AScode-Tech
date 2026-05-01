export default function Marquee() {
  const items = [
    "Websites that load in under a second",
    "Headless e-commerce",
    "SaaS dashboards",
    "3D & WebGL",
    "SEO & Core Web Vitals",
    "Ongoing care & growth",
  ];
  const track = [...items, ...items];

  return (
    <div className="ticker-row py-4 sm:py-5 bg-cream-100 overflow-hidden">
      <div className="marquee-track animate-marquee gap-12 text-xl sm:text-2xl md:text-4xl font-display font-semibold tracking-tight">
        {track.map((t, i) => (
          <span key={i} className="flex items-center gap-12 pr-12">
            <span>{t}</span>
            <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-orange-ascode" />
          </span>
        ))}
      </div>
    </div>
  );
}
