import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AScode Tech" },
      { name: "description", content: "How AScode Tech collects, uses, and protects your personal data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="bg-cream-100 pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Legal ]</span>
        <h1 className="mt-4 h-editorial text-5xl md:text-7xl">
          Privacy Policy<span className="text-orange-ascode">.</span>
        </h1>
        <p className="mt-4 text-sm text-ink/60">Last updated: April 2026</p>

        <div className="mt-12 prose-blog">
          <p>
            AScode Tech ("we", "us", "our") respects your privacy. This policy explains what information we collect when you use this
            website (as-code.tech) and how we use it.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Contact form data</strong>: name, email, project type, budget, and the message you submit.</li>
            <li><strong>Technical data</strong>: anonymous browser type, device, and aggregate analytics (only if you accept cookies).</li>
          </ul>

          <h2>How we use your data</h2>
          <ul>
            <li>To respond to your inquiry and send you a quote or proposal.</li>
            <li>To improve the performance and content of our website.</li>
            <li>We do not sell or share your personal data with third parties for marketing.</li>
          </ul>

          <h2>Data storage</h2>
          <p>
            Form submissions are stored securely in our managed database, hosted on encrypted infrastructure provided by our cloud
            partners. Access is restricted to authorized AScode Tech staff.
          </p>

          <h2>Your rights</h2>
          <p>
            You can request access, correction, or deletion of your personal data by emailing us at{" "}
            <a href="mailto:info@as-code.tech">info@as-code.tech</a>. We respond within 30 days.
          </p>

          <h2>Cookies</h2>
          <p>
            See our <a href="/cookies">Cookie Policy</a> for details on which cookies we use and how to opt out.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Reach us at <a href="mailto:info@as-code.tech">info@as-code.tech</a>.
          </p>
        </div>
      </div>
    </article>
  );
}
