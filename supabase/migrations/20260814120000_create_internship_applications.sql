-- Internship / course applications submitted from /internship/apply
CREATE TABLE public.internship_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text,
  track text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.internship_applications ENABLE ROW LEVEL SECURITY;

-- Public can submit applications (same shape of policy as contact_messages).
CREATE POLICY "Anyone can submit internship applications" ON public.internship_applications
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(full_name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND length(phone) BETWEEN 1 AND 40
    AND (city IS NULL OR length(city) <= 120)
    AND length(track) BETWEEN 1 AND 100
    AND (message IS NULL OR length(message) <= 3000)
  );

-- Intentionally NO select/delete policy for anon/authenticated: the
-- applications list is only ever read or deleted through the
-- /api/public/internship-submissions server route, which uses the
-- service-role key (bypasses RLS) and is gated by a password check.
-- This keeps the submissions unreadable via the public Supabase client
-- even if someone inspects the front-end bundle.
