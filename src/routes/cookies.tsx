import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — AScode Tech" },
      { name: "description", content: "Information about cookies used on the AScode Tech website." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <article className="bg-cream-100 pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Legal ]</span>
        <h1 className="mt-4 h-editorial text-5xl md:text-7xl">
          Cookie Policy<span className="text-orange-ascode">.</span>
        </h1>
        <p className="mt-4 text-sm text-ink/60">Last updated: April 2026</p>

        <div className="mt-12 prose-blog">
          <p>
            This site uses a small number of cookies to keep things working and to understand how visitors use the site. You can accept
            or decline non-essential cookies via the consent banner at the bottom of the page.
          </p>

          <h2>Essential cookies</h2>
          <p>Required for the site to function. These do not require consent.</p>
          <ul>
            <li><code>ascode-cookie-consent</code> — remembers your cookie preference.</li>
            <li>Authentication cookies (only if you log in to our admin panel).</li>
          </ul>

          <h2>Optional cookies</h2>
          <p>
            We may use anonymous analytics to understand which pages are popular. These are only set if you click "Accept all".
          </p>

          <h2>Managing cookies</h2>
          <p>
            You can clear cookies in your browser settings at any time. Clearing the <code>ascode-cookie-consent</code> cookie will
            cause the consent banner to appear again on your next visit.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about cookies? Email <a href="mailto:info@as-code.tech">info@as-code.tech</a>.
          </p>
        </div>
      </div>
    </article>
  );
}
