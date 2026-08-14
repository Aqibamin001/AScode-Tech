import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

// Password that unlocks the hidden submissions page at /126677abwerd/form.
// Override in production by setting FORM_ADMIN_PASSWORD in your deployment
// environment (Cloudflare / Lovable Cloud secrets) — this hardcoded value is
// only a fallback so the page works out of the box.
const DEFAULT_FORM_PASSWORD = "Form1122++";

function checkPassword(request: Request): boolean {
  const provided = request.headers.get("x-form-password") ?? "";
  const expected = process.env.FORM_ADMIN_PASSWORD || DEFAULT_FORM_PASSWORD;
  return provided.length > 0 && provided === expected;
}

// GET  /api/public/internship-submissions        -> list all applications
// DELETE /api/public/internship-submissions?id=.. -> delete one application
// Both require header: x-form-password: <password>
export const Route = createFileRoute("/api/public/internship-submissions")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        if (!checkPassword(request)) {
          return Response.json({ ok: false, error: "Invalid password." }, { status: 401 });
        }
        try {
          const { data, error } = await supabaseAdmin
            .from("internship_applications")
            .select("*")
            .order("created_at", { ascending: false });
          if (error) throw error;
          return Response.json({ ok: true, items: data ?? [] });
        } catch (e) {
          const message = e instanceof Error ? e.message : "Unknown error";
          return Response.json({ ok: false, error: message }, { status: 500 });
        }
      },
      DELETE: async ({ request }) => {
        if (!checkPassword(request)) {
          return Response.json({ ok: false, error: "Invalid password." }, { status: 401 });
        }
        try {
          const id = new URL(request.url).searchParams.get("id");
          if (!id) {
            return Response.json({ ok: false, error: "Missing id." }, { status: 400 });
          }
          const { error } = await supabaseAdmin
            .from("internship_applications")
            .delete()
            .eq("id", id);
          if (error) throw error;
          return Response.json({ ok: true });
        } catch (e) {
          const message = e instanceof Error ? e.message : "Unknown error";
          return Response.json({ ok: false, error: message }, { status: 500 });
        }
      },
    },
  },
});
