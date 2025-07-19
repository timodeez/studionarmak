-- ============================================================================
-- STUDIO NARMAK DATABASE SETUP
-- ============================================================================
-- Run these commands in your Supabase SQL Editor
-- Go to: https://supabase.com/dashboard/project/[your-project-id]/sql
-- Copy and paste these commands, then click "Run"

-- ============================================================================
-- TABLE 1: CONTACT FORM SUBMISSIONS
-- ============================================================================
-- This stores all the "Get a Quote" form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  project_type TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  files JSONB, -- Store file information as JSON (name, size, type, etc.)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- TABLE 2: JOB APPLICATIONS
-- ============================================================================
-- This stores all job applications from the Careers page
CREATE TABLE job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  experience TEXT,
  portfolio TEXT,
  cover_letter TEXT NOT NULL,
  resume TEXT,
  files JSONB, -- Store file information as JSON (name, size, type, etc.)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- TABLE 3: BLOG POSTS
-- ============================================================================
-- This stores all your blog posts for the Journal section
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  author TEXT NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  tags TEXT[]
);

-- ============================================================================
-- TABLE 4: EMAIL SUBSCRIBERS
-- ============================================================================
-- This stores people who subscribe to your email updates
CREATE TABLE email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- INDEXES FOR BETTER PERFORMANCE
-- ============================================================================
-- These make your database queries faster

-- Contact submissions - newest first
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Job applications - newest first
CREATE INDEX idx_job_applications_created_at ON job_applications(created_at DESC);

-- Blog posts - published posts, newest first
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Blog posts - find by slug (for URLs)
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);

-- Email subscribers - only active subscribers
CREATE INDEX idx_email_subscribers_subscribed ON email_subscribers(subscribed);

-- ============================================================================
-- SAMPLE DATA (OPTIONAL)
-- ============================================================================
-- You can uncomment these lines to add some sample data for testing

/*
-- Sample blog post
INSERT INTO blog_posts (title, slug, excerpt, content, author, published, published_at, tags) 
VALUES (
  'Welcome to Studio Narmak',
  'welcome-to-studio-narmak',
  'An introduction to our animation studio and what we do.',
  'Welcome to Studio Narmak! We are a creative animation studio focused on bringing stories to life through motion and design.

Our team of passionate animators, designers, and storytellers work together to create compelling content that engages audiences and delivers results.

Whether you need brand animation, explainer videos, or original content, we have the expertise to bring your vision to life.

Stay tuned for more updates, behind-the-scenes content, and industry insights!',
  'Studio Narmak Team',
  true,
  NOW(),
  ARRAY['welcome', 'studio', 'animation']
);

-- Sample email subscriber
INSERT INTO email_subscribers (email) 
VALUES ('test@example.com');
*/

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================
-- Run these after creating the tables to make sure everything worked

-- Check if tables were created
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('contact_submissions', 'job_applications', 'blog_posts', 'email_subscribers');

-- Check if indexes were created
SELECT indexname, tablename 
FROM pg_indexes 
WHERE tablename IN ('contact_submissions', 'job_applications', 'blog_posts', 'email_subscribers'); 

-- ============================================================================
-- IF YOU ALREADY HAVE THE TABLES, RUN THIS TO ADD THE FILES COLUMN:
-- ============================================================================
-- ALTER TABLE contact_submissions ADD COLUMN files JSONB; 