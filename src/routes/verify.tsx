import { createFileRoute } from "@tanstack/react-router";
import VerifyForm from "@/components/site/VerifyForm";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "Verify a Certificate — AScode Tech" },
      {
        name: "description",
        content:
          "Verify an AS Code Tech certificate of completion using its 7-digit tracking ID or the link printed on the certificate.",
      },
      { property: "og:title", content: "Verify a Certificate — AScode Tech" },
      { property: "og:url", content: "https://as-code.tech/verify" },
    ],
    links: [{ rel: "canonical", href: "https://as-code.tech/verify" }],
  }),
  component: VerifyPage,
});

function VerifyPage() {
  return (
    <section className="bg-cream-100 pt-32 pb-24 md:pt-40 md:pb-36 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Certificates ]</span>
        <h1 className="mt-4 h-editorial text-5xl md:text-7xl">
          Verify a certificate<span className="text-orange-ascode">.</span>
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-xl">
          Every AS Code Tech certificate carries a unique 7-digit tracking ID. Enter it below — or paste the link printed on
          the certificate — to confirm it is genuine.
        </p>

        <div className="mt-10">
          <VerifyForm />
        </div>

        <p className="mt-10 text-sm text-ink/60">
          Can't find a certificate you believe is genuine? Email{" "}
          <a href="mailto:info@as-code.tech" className="underline hover:text-orange-ascode">
            info@as-code.tech
          </a>{" "}
          with the tracking ID.
        </p>
      </div>
    </section>
  );
}
