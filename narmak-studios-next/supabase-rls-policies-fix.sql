-- ============================================================================
-- SUPABASE RLS POLICIES FIX FOR VERCEL DEPLOYMENT
-- ============================================================================
-- Run these commands in your Supabase SQL Editor to fix RLS policies
-- for your website deployed on Vercel with environment variables
-- Go to: https://supabase.com/dashboard/project/[your-project-id]/sql

-- ============================================================================
-- STEP 1: DROP EXISTING POLICIES (if any exist)
-- ============================================================================
-- Clean slate - remove any existing policies that might conflict

DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow users to view their own contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous job applications" ON job_applications;
DROP POLICY IF EXISTS "Allow anonymous email subscriptions" ON email_subscribers;
DROP POLICY IF EXISTS "Allow email subscription updates" ON email_subscribers;
DROP POLICY IF EXISTS "Allow reading email subscribers for duplicates" ON email_subscribers;
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public inserts" ON email_subscribers;

-- ============================================================================
-- STEP 2: ENSURE RLS IS ENABLED ON ALL TABLES
-- ============================================================================

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- STEP 3: CREATE POLICIES FOR CONTACT SUBMISSIONS
-- ============================================================================

-- Allow anyone to insert contact form submissions (using anon key)
CREATE POLICY "Enable insert for contact submissions" 
ON contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Allow service role to read all contact submissions (for admin access)
CREATE POLICY "Enable read for contact submissions service role" 
ON contact_submissions 
FOR SELECT 
TO service_role 
USING (true);

-- ============================================================================
-- STEP 4: CREATE POLICIES FOR JOB APPLICATIONS
-- ============================================================================

-- Allow anyone to insert job applications (using anon key)
CREATE POLICY "Enable insert for job applications" 
ON job_applications 
FOR INSERT 
WITH CHECK (true);

-- Allow service role to read all job applications (for admin access)
CREATE POLICY "Enable read for job applications service role" 
ON job_applications 
FOR SELECT 
TO service_role 
USING (true);

-- ============================================================================
-- STEP 5: CREATE POLICIES FOR EMAIL SUBSCRIBERS
-- ============================================================================

-- Allow anyone to insert email subscriptions (using anon key)
CREATE POLICY "Enable insert for email subscribers" 
ON email_subscribers 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to read email subscribers (needed for duplicate checking)
CREATE POLICY "Enable read for email subscribers" 
ON email_subscribers 
FOR SELECT 
USING (true);

-- Allow anyone to update email subscriptions (for unsubscribe functionality)
CREATE POLICY "Enable update for email subscribers" 
ON email_subscribers 
FOR UPDATE 
USING (true) 
WITH CHECK (true);

-- Allow service role full access to email subscribers
CREATE POLICY "Enable full access for email subscribers service role" 
ON email_subscribers 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- ============================================================================
-- STEP 6: CREATE POLICIES FOR BLOG POSTS
-- ============================================================================

-- Allow anyone to read published blog posts
CREATE POLICY "Enable read for published blog posts" 
ON blog_posts 
FOR SELECT 
USING (published = true);

-- Allow service role full access to blog posts (for admin)
CREATE POLICY "Enable full access for blog posts service role" 
ON blog_posts 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- ============================================================================
-- STEP 7: VERIFICATION QUERIES
-- ============================================================================
-- Run these to verify everything is working

-- Check RLS is enabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('contact_submissions', 'job_applications', 'email_subscribers', 'blog_posts')
  AND schemaname = 'public';

-- Check all policies exist
SELECT schemaname, tablename, policyname, roles, cmd
FROM pg_policies 
WHERE tablename IN ('contact_submissions', 'job_applications', 'email_subscribers', 'blog_posts')
  AND schemaname = 'public'
ORDER BY tablename, policyname;

-- ============================================================================
-- TEST QUERIES (Optional - for debugging)
-- ============================================================================

-- Test contact submission insert (should work)
-- INSERT INTO contact_submissions (name, email, message) 
-- VALUES ('Test User', 'test@example.com', 'Test message from RLS policy');

-- Test email subscriber insert (should work)
-- INSERT INTO email_subscribers (email) 
-- VALUES ('test-rls@example.com');

-- Test blog post read (should only show published posts)
-- SELECT title, published FROM blog_posts LIMIT 5;

-- ============================================================================
-- TROUBLESHOOTING NOTES
-- ============================================================================
/*
If you're still having issues:

1. Make sure your NEXT_PUBLIC_SUPABASE_ANON_KEY is correctly set in Vercel
2. Verify your Supabase project URL is correct
3. Check that the anon key has the right permissions in Supabase dashboard
4. Test the policies by running the test queries above
5. Check the Supabase logs in the dashboard for any error messages

Common issues:
- Using the wrong API key (service role vs anon key)
- RLS policies too restrictive
- Environment variables not set in Vercel
- Old cached policies conflicting with new ones
*/