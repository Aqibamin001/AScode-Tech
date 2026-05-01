## Goal

Lock down the admin login at `/login` so only you (aqibamin0099@gmail.com) can sign in, remove the "Create account" option, and add a working "Forgot password" flow that emails a reset link.

## Security note (please read)

You shared your password in plain text in this chat. After I set everything up, **please use the "Forgot password" link to set a new password yourself** — that way the password I'm seeding never lives on as your real one. I'll provision the account securely server-side (no password in frontend code), but rotating it is the right move.

## What I'll change

### 1. Provision the admin account (server-side, secure)
- Run a one-time secure setup that creates the Supabase auth user `aqibamin0099@gmail.com` with the password you provided, email pre-confirmed so you can log in immediately.
- The password is never stored in frontend code, environment files, or the repo — only inside Supabase's hashed `auth.users` table.

### 2. Lock the login page to a single admin
- Remove the "Need an account? Create one" toggle and all signup code from `src/routes/login.tsx`.
- Reject sign-in for any email other than `aqibamin0099@gmail.com` with a clear "Access denied" message — even if other Supabase users existed, they couldn't reach `/admin`.
- Add the same allowlist check to the `/admin` route guard so a stale session from another account is bounced.

### 3. Add "Forgot password" flow
- Add a **"Forgot password?"** link on the login page.
- New page `/forgot-password`: enter email → sends reset email via Supabase's built-in auth emails (no domain setup needed) → success confirmation.
- New page `/reset-password`: handles the recovery link, lets you set a new password, then redirects to `/admin`.
- The forgot-password form only accepts the admin email — other emails get a generic "If that account exists…" response (no user enumeration).

### 4. Polish
- Loading states, clear error messages, and the existing cream/orange visual style preserved.
- Password input has a show/hide toggle and minimum length validation.
- After password reset, all other sessions are invalidated for safety.

## Files touched

- `src/routes/login.tsx` — remove signup, add forgot-password link, add allowlist check
- `src/routes/forgot-password.tsx` — new
- `src/routes/reset-password.tsx` — new
- `src/routes/admin.tsx` — tighten guard to allowlist single admin email
- One-time admin user creation via Supabase admin API (server-side)

## After implementation

1. Go to `/login` → click **Forgot password?** → check your inbox → set a fresh password.
2. The password you shared in chat will then be invalidated.