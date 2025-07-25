-- ============================================================================
-- SUPABASE RLS POLICIES FOR ANONYMOUS FORM SUBMISSIONS
-- ============================================================================
-- Run these commands in your Supabase SQL Editor to allow anonymous users
-- to submit forms (contact, careers, newsletter subscriptions)
-- Go to: https://supabase.com/dashboard/project/[your-project-id]/sql

-- ============================================================================
-- CONTACT SUBMISSIONS POLICIES
-- ============================================================================
-- Allow anonymous users to insert contact form submissions
CREATE POLICY "Allow anonymous contact submissions" ON contact_submissions
FOR INSERT TO anon
WITH CHECK (true);

-- Allow anonymous users to view their own submissions (optional)
-- CREATE POLICY "Allow users to view their own contact submissions" ON contact_submissions
-- FOR SELECT TO anon
-- USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- ============================================================================
-- JOB APPLICATIONS POLICIES  
-- ============================================================================
-- Allow anonymous users to submit job applications
CREATE POLICY "Allow anonymous job applications" ON job_applications
FOR INSERT TO anon  
WITH CHECK (true);

-- ============================================================================
-- EMAIL SUBSCRIBERS POLICIES
-- ============================================================================
-- Allow anonymous users to subscribe to emails
CREATE POLICY "Allow anonymous email subscriptions" ON email_subscribers
FOR INSERT TO anon
WITH CHECK (true);

-- Allow anonymous users to update their subscription status (for unsubscribe)
CREATE POLICY "Allow email subscription updates" ON email_subscribers
FOR UPDATE TO anon
USING (true)
WITH CHECK (true);

-- Allow reading email subscribers for duplicate checking
CREATE POLICY "Allow reading email subscribers for duplicates" ON email_subscribers
FOR SELECT TO anon
USING (true);

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================
-- Run these to verify the policies were created successfully

-- Check RLS is enabled on all tables
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('contact_submissions', 'job_applications', 'email_subscribers', 'blog_posts')
  AND schemaname = 'public';

-- Check policies exist
SELECT schemaname, tablename, policyname, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('contact_submissions', 'job_applications', 'email_subscribers')
  AND schemaname = 'public';