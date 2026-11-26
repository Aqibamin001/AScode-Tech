import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BadgeCheck, ShieldX, Download } from "lucide-react";
import VerifyForm from "@/components/site/VerifyForm";
import { TRACKING_ID_PATTERN, certificateImage, findCertificate } from "@/data/certificates";

// Matches links like https://as-code.tech/8772131
// Only 7-digit IDs are handled here; anything else (e.g. /random-text) is a normal 404.
export const Route = createFileRoute("/$trackingId")({
  loader: ({ params }) => {
    if (!TRACKING_ID_PATTERN.test(params.trackingId)) throw notFound();
    return { id: params.trackingId, certificate: findCertificate(params.trackingId) ?? null };
  },
  head: ({ loaderData }) => {
    const cert = loaderData?.certificate;
    const title = cert
      ? `Certificate ${cert.id} — ${cert.name} · AScode Tech`
      : "Certificate not found — AScode Tech";
    const meta: Record<string, string>[] = [
      { title },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: title },
    ];
    if (cert) {
      meta.push(
        { name: "description", content: `${cert.name} has successfully completed the ${cert.program} at AS Code Tech. Verified certificate ${cert.id}.` },
        { property: "og:url", content: `https://as-code.tech/${cert.id}` },
        { property: "og:image", content: `https://as-code.tech${certificateImage(cert.id)}` },
        { name: "twitter:image", content: `https://as-code.tech${certificateImage(cert.id)}` },
      );
    }
    return { meta };
  },
  component: CertificatePage,
});

function CertificatePage() {
  const { id, certificate } = Route.useLoaderData();

  return (
    <section className="bg-cream-100 pt-32 pb-24 md:pt-40 md:pb-36 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Certificate verification ]</span>

        {certificate ? (
          <>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-100 text-green-900 px-4 py-2 text-sm font-medium">
              <BadgeCheck className="h-5 w-5" aria-hidden /> Verified — this certificate is genuine
            </div>

            <h1 className="mt-6 h-editorial text-4xl sm:text-5xl md:text-6xl break-words">
              {certificate.name}
              <span className="text-orange-ascode">.</span>
            </h1>
            <p className="mt-4 text-lg text-ink/70 max-w-2xl">
              has successfully completed the <strong className="text-ink">{certificate.program}</strong> at AS Code Tech.
            </p>

            <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-cream-300 py-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink/60">Tracking ID</dt>
                <dd className="mt-1 font-semibold tabular-nums">{certificate.id}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink/60">Focus area</dt>
                <dd className="mt-1 font-semibold">{certificate.focus}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink/60">Start date</dt>
                <dd className="mt-1 font-semibold">{certificate.startDate}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink/60">End date</dt>
                <dd className="mt-1 font-semibold">{certificate.endDate}</dd>
              </div>
            </dl>

            <figure className="mt-10">
              <img
                src={certificateImage(certificate.id)}
                alt={`Certificate of Completion issued to ${certificate.name}`}
                width={1344}
                height={756}
                className="w-full h-auto rounded-lg border border-cream-300 shadow-sm bg-white"
              />
            </figure>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={certificateImage(certificate.id)}
                download={`AScode-Tech-Certificate-${certificate.id}.jpeg`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream-50 hover:bg-orange-ascode transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden /> Download certificate
              </a>
              <Link
                to="/verify"
                className="inline-flex items-center rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
              >
                Verify another
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-100 text-red-900 px-4 py-2 text-sm font-medium">
              <ShieldX className="h-5 w-5" aria-hidden /> Not verified
            </div>
            <h1 className="mt-6 h-editorial text-4xl sm:text-5xl md:text-6xl">
              No certificate found<span className="text-orange-ascode">.</span>
            </h1>
            <p className="mt-4 text-lg text-ink/70 max-w-2xl">
              We have no record of a certificate with tracking ID{" "}
              <strong className="text-ink tabular-nums">{id}</strong>. Check the ID for typos and try again. If you believe
              this certificate is genuine, email{" "}
              <a href="mailto:info@as-code.tech" className="underline hover:text-orange-ascode">
                info@as-code.tech
              </a>
              .
            </p>
            <div className="mt-10">
              <VerifyForm />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
