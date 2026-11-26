import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { extractTrackingId } from "@/data/certificates";

export default function VerifyForm({ initialValue = "" }: { initialValue?: string }) {
  const navigate = useNavigate();
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = extractTrackingId(value);
    if (!id) {
      setError("Enter a valid 7-digit tracking ID (e.g. 8772131) or the certificate link.");
      return;
    }
    setError(null);
    navigate({ to: "/$trackingId", params: { trackingId: id } });
  };

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <label htmlFor="tracking-id" className="text-xs uppercase tracking-[0.2em] text-ink/60">
        Tracking ID or certificate link
      </label>
      <div className="mt-3 flex flex-col sm:flex-row gap-3">
        <input
          id="tracking-id"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(null);
          }}
          placeholder="e.g. 8772131 or https://as-code.tech/8772131"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "tracking-id-error" : undefined}
          className="flex-1 min-w-0 rounded-full border border-cream-300 bg-cream-50 px-5 py-3 text-base text-ink placeholder:text-ink/40 focus:outline-none focus:border-orange-ascode"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream-50 hover:bg-orange-ascode transition-colors"
        >
          Verify certificate <span aria-hidden>→</span>
        </button>
      </div>
      {error && (
        <p id="tracking-id-error" role="alert" className="mt-3 text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}
