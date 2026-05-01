import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ADMIN_EMAIL = "aqibamin0099@gmail.com";

// One-time bootstrap endpoint: ensures the configured admin email has the
// 'admin' role in public.user_roles. Safe to call multiple times.
// GET /api/public/bootstrap-admin
export const Route = createFileRoute("/api/public/bootstrap-admin")({
  server: {
    handlers: {
      GET: async () => {
        try {
          // Find the user by email via admin API (paginate just in case).
          let userId: string | null = null;
          let page = 1;
          while (!userId && page <= 10) {
            const { data, error } = await supabaseAdmin.auth.admin.listUsers({
              page,
              perPage: 200,
            });
            if (error) throw error;
            const found = data.users.find(
              (u) => u.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()
            );
            if (found) userId = found.id;
            if (data.users.length < 200) break;
            page += 1;
          }

          if (!userId) {
            return new Response(
              JSON.stringify({
                ok: false,
                error: `User ${ADMIN_EMAIL} not found in auth.users. Sign up or use Forgot password first.`,
              }),
              { status: 404, headers: { "Content-Type": "application/json" } }
            );
          }

          const { error: upsertError } = await supabaseAdmin
            .from("user_roles")
            .upsert(
              { user_id: userId, role: "admin" },
              { onConflict: "user_id,role", ignoreDuplicates: true }
            );
          if (upsertError) throw upsertError;

          // Also ensure the email is confirmed so login works.
          await supabaseAdmin.auth.admin.updateUserById(userId, {
            email_confirm: true,
          });

          return new Response(
            JSON.stringify({ ok: true, userId, email: ADMIN_EMAIL, role: "admin" }),
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
