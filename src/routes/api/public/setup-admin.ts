import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ADMIN_EMAIL = "aqibamin0099@gmail.com";
const ADMIN_PASSWORD = "Aqibamin2849++";

// One-time setup: creates the admin auth user (or resets password if exists),
// confirms the email, and grants the 'admin' role.
// GET /api/public/setup-admin
export const Route = createFileRoute("/api/public/setup-admin")({
  server: {
    handlers: {
      GET: async () => {
        try {
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
                u.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()
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
              email: ADMIN_EMAIL,
              password: ADMIN_PASSWORD,
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
              email: ADMIN_EMAIL,
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
