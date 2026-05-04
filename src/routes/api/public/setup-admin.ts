import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const DEFAULT_ADMIN_EMAIL = "aqibamin0099@gmail.com";

// One-time setup: creates the admin auth user (or resets password if exists),
// confirms the email, and grants the 'admin' role.
// Configure ADMIN_PASSWORD and ADMIN_SETUP_TOKEN in production, then call:
// GET /api/public/setup-admin?token=YOUR_ADMIN_SETUP_TOKEN
export const Route = createFileRoute("/api/public/setup-admin")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const adminEmail = (process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL).trim().toLowerCase();
          const adminPassword = process.env.ADMIN_PASSWORD;
          const setupToken = process.env.ADMIN_SETUP_TOKEN;
          const providedToken = new URL(request.url).searchParams.get("token");

          if (!setupToken || providedToken !== setupToken) {
            return Response.json({ ok: false, error: "Unauthorized setup request." }, { status: 401 });
          }

          if (!adminPassword || adminPassword.length < 8) {
            return Response.json(
              { ok: false, error: "ADMIN_PASSWORD must be configured with at least 8 characters." },
              { status: 500 }
            );
          }

          // Try to find existing user
          let userId: string | null = null;
          let page = 1;
          while (!userId && page <= 10) {
            const { data, error } = await supabaseAdmin.auth.admin.listUsers({
              page,
              perPage: 200,
            });
            if (error) throw error;
            const found = data.users.find(
              (u: { email?: string | null }) =>
                u.email?.toLowerCase() === adminEmail
            );
            if (found) userId = found.id;
            if (data.users.length < 200) break;
            page += 1;
          }

          if (userId) {
            // Reset password + confirm email
            const { error: updErr } = await supabaseAdmin.auth.admin.updateUserById(userId, {
              password: ADMIN_PASSWORD,
              email_confirm: true,
            });
            if (updErr) throw updErr;
          } else {
            // Create user
            const { data, error } = await supabaseAdmin.auth.admin.createUser({
              email: adminEmail,
              password: adminPassword,
              email_confirm: true,
            });
            if (error) throw error;
            userId = data.user.id;
          }

          // Grant admin role
          const { error: upsertError } = await supabaseAdmin
            .from("user_roles")
            .upsert(
              { user_id: userId, role: "admin" },
              { onConflict: "user_id,role", ignoreDuplicates: true }
            );
          if (upsertError) throw upsertError;

          return new Response(
            JSON.stringify({
              ok: true,
              userId,
              email: adminEmail,
              message: "Admin ready. You can now sign in at /login.",
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        } catch (e) {
          const message = e instanceof Error ? e.message : "Unknown error";
          return new Response(
            JSON.stringify({ ok: false, error: message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
