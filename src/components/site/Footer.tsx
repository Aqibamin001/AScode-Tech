import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-100 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <h3 className="h-editorial text-4xl sm:text-5xl md:text-7xl lg:text-8xl break-words">
              AScode<span className="text-orange-ascode">.</span>Tech
            </h3>
            <p className="mt-4 text-cream-100/70 max-w-md">
              An independent web development studio — trusted worldwide.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 text-sm text-cream-100/70 space-y-2">
            <p className="text-cream-100 font-semibold mb-2">Studio</p>
            <a href="/#work" className="block hover:text-orange-ascode">Work</a>
            <a href="/#services" className="block hover:text-orange-ascode">Services</a>
            <a href="/#team" className="block hover:text-orange-ascode">Team</a>
            <Link to="/blog" className="block hover:text-orange-ascode">Blog</Link>
          </div>
          <div className="col-span-6 md:col-span-2 text-sm text-cream-100/70 space-y-2">
            <p className="text-cream-100 font-semibold mb-2">Legal</p>
            <Link to="/privacy" className="block hover:text-orange-ascode">Privacy Policy</Link>
            <Link to="/cookies" className="block hover:text-orange-ascode">Cookie Policy</Link>
          </div>
          <div className="col-span-12 md:col-span-2 text-sm text-cream-100/70 space-y-2">
            <p className="text-cream-100 font-semibold mb-2">Contact</p>
            <a href="mailto:info@as-code.tech" className="block hover:text-orange-ascode">
              info@as-code.tech
            </a>
            <a href="tel:+923266502223" className="block hover:text-orange-ascode">
              +92 326 6502223
            </a>
            <p>Lahore, PK · Remote</p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream-100/20 flex flex-wrap items-center justify-between gap-4 text-xs text-cream-100/60">
          <p>© {new Date().getFullYear()} AScode Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
