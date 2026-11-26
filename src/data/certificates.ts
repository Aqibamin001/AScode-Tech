// ─────────────────────────────────────────────────────────────────────────────
// Certificate registry — the single source of truth for verification.
//
// A tracking ID is VALID only if it appears in this list.
// To issue a new certificate:
//   1. Put the image in  public/certificates/<ID>.jpeg   (e.g. 8772146.jpeg)
//   2. Add one entry below (copy an existing one and edit it)
//   3. Commit + push → Cloudflare redeploys → https://as-code.tech/<ID> works.
// ─────────────────────────────────────────────────────────────────────────────

export type Certificate = {
  /** 7-digit tracking ID printed on the certificate */
  id: string;
  /** Recipient name, exactly as printed on the certificate */
  name: string;
  /** Program title, exactly as printed on the certificate */
  program: string;
  /** Training area covered */
  focus: string;
  startDate: string;
  endDate: string;
};

const THREE_MONTH = "3-Month Online Course + Internship Program";
const ONE_MONTH = "1-Month Website Development Course Program";

const AUG_26 = "Aug 26, 2026";
const NOV_26 = "Nov 26, 2026";
const SEP_18 = "Sep 18, 2026";
const OCT_18 = "Oct 18, 2026";

export const CERTIFICATES: Certificate[] = [
  { id: "8772131", name: "Abeer Zahid Bhatti", program: THREE_MONTH, focus: "Python Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772132", name: "Malaika Sajjad", program: THREE_MONTH, focus: "Python Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772133", name: "Haroon Shahzad", program: THREE_MONTH, focus: "Python Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772134", name: "Chand Kumar", program: THREE_MONTH, focus: "Python Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772135", name: "Mir Hamid Nawaz", program: THREE_MONTH, focus: "Python Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772136", name: "Ali Hassan", program: THREE_MONTH, focus: "Python Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772137", name: "Ahmad Abdur Rahman Zahid Bhatti", program: THREE_MONTH, focus: "Python Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772138", name: "Asad Hassan", program: THREE_MONTH, focus: "SEO", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772139", name: "Faizan Abid", program: THREE_MONTH, focus: "WordPress Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772140", name: "HAMMAD MAQSOOD", program: THREE_MONTH, focus: "WordPress Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772141", name: "MUHAMMAD USMAN TARIQ", program: THREE_MONTH, focus: "WordPress Development", startDate: AUG_26, endDate: NOV_26 },
  { id: "8772142", name: "Aisha Shahzadi", program: ONE_MONTH, focus: "Website Development", startDate: SEP_18, endDate: OCT_18 },
  { id: "8772143", name: "Sana Mehek", program: ONE_MONTH, focus: "Website Development", startDate: SEP_18, endDate: OCT_18 },
  // 8772144 — no certificate image supplied yet; add image + entry when issued.
  { id: "8772145", name: "Maryam Naveed", program: ONE_MONTH, focus: "Website Development", startDate: SEP_18, endDate: OCT_18 },
];

export const TRACKING_ID_PATTERN = /^\d{7}$/;

export function findCertificate(id: string): Certificate | undefined {
  return CERTIFICATES.find((c) => c.id === id);
}

/** Accepts "8772131", " 8772131 ", or a full link like "https://as-code.tech/8772131/". */
export function extractTrackingId(input: string): string | null {
  const cleaned = input.trim().replace(/[?#].*$/, "").replace(/\/+$/, "");
  const last = cleaned.split("/").pop() ?? "";
  return TRACKING_ID_PATTERN.test(last) ? last : null;
}

export const certificateImage = (id: string) => `/certificates/${id}.jpeg`;
