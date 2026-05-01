
-- 1) Restrict has_role execution to internal use only
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;

-- 2) Set search_path on touch_updated_at
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS trigger LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

-- 3) Replace the overly-permissive contact insert policy with a basic field validation
DROP POLICY "Anyone can submit contact messages" ON public.contact_messages;
CREATE POLICY "Anyone can submit contact messages" ON public.contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND length(message) BETWEEN 1 AND 5000
  );

-- 4) Restrict public listing of blog-covers bucket: keep public read of individual files
--    but only admins can list the bucket via storage.objects SELECT.
DROP POLICY "Public read blog covers" ON storage.objects;
CREATE POLICY "Public can read blog cover files" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (
    bucket_id = 'blog-covers'
    AND (
      public.has_role(auth.uid(), 'admin')
      OR current_setting('request.method', true) IS NULL  -- direct file fetch via public URL still works
    )
  );
