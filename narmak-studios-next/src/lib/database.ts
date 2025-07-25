// ============================================================================
// DATABASE CONFIGURATION FILE
// ============================================================================
// This file handles all database operations for the Studio Narmak website.
// 
// WHAT THIS DOES:
// - Connects to your database (Supabase)
// - Defines the structure of your data (TypeScript interfaces)
// - Provides functions to create, read, update, and delete data
// - Handles contact forms, job applications, blog posts, and email subscribers
//
// SETUP REQUIRED:
// 1. Create a Supabase account at https://supabase.com
// 2. Create a new project in Supabase
// 3. Get your project URL and API keys
// 4. Add them to your .env.local file
// 5. Run the SQL commands in BACKEND-SETUP.md to create tables
// ============================================================================

// Import the Supabase client library
// You need to install this: npm install @supabase/supabase-js
import { createClient } from '@supabase/supabase-js';

// ============================================================================
// DATA STRUCTURE DEFINITIONS (TypeScript Interfaces)
// ============================================================================
// These define what data looks like in your database
// Think of them as "blueprints" for your data

// File information for uploads
export interface FileInfo {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

// Contact form submissions from the "Get a Quote" page
export interface ContactSubmission {
  id?: string;                    // Unique identifier (auto-generated)
  name: string;                   // Person's full name
  email: string;                  // Email address
  company?: string;               // Company name (optional)
  phone?: string;                 // Phone number (optional)
  projectType?: string;           // Type of project they want
  budget?: string;                // Their budget range
  message: string;                // Project description/details
  files?: FileInfo[];             // Uploaded files information
  created_at?: string;            // When the submission was made (auto-generated)
}

// Job applications from the Careers page
export interface JobApplication {
  id?: string;                    // Unique identifier (auto-generated)
  name: string;                   // Applicant's full name
  email: string;                  // Email address
  phone?: string;                 // Phone number (optional)
  position: string;               // Job position they're applying for
  experience?: string;            // Their experience level
  portfolio?: string;             // Portfolio/reel URL
  coverLetter: string;            // Why they want to work here
  resume?: string;                // Resume or LinkedIn URL
  files?: FileInfo[];             // Uploaded files information
  created_at?: string;            // When they applied (auto-generated)
}

// Blog posts for the Journal/Blog section
export interface BlogPost {
  id?: string;                    // Unique identifier (auto-generated)
  title: string;                  // Blog post title
  slug: string;                   // URL-friendly version of title (e.g., "my-blog-post")
  excerpt: string;                // Short description for preview
  content: string;                // Full blog post content
  featured_image?: string;        // Main image URL
  author: string;                 // Who wrote the post
  published: boolean;             // Whether it's live on the website
  published_at?: string;          // When it was published
  created_at?: string;            // When it was created
  updated_at?: string;            // When it was last updated
  tags?: string[];                // Categories/tags (e.g., ["animation", "tips"])
}

// Email subscribers for newsletters/updates
export interface EmailSubscriber {
  id?: string;                    // Unique identifier (auto-generated)
  email: string;                  // Subscriber's email address
  subscribed: boolean;            // Whether they want to receive emails
  created_at?: string;            // When they subscribed (auto-generated)
}

// ============================================================================
// SUPABASE CLIENT SETUP
// ============================================================================
// This connects your website to your Supabase database

// Get your Supabase credentials from environment variables
// You need to add these to your .env.local file:
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// Create the Supabase client (this is your connection to the database)
// We'll create a dummy client during build time if credentials are missing
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase credentials not found. Database features will be disabled.');
    // Return a mock client that won't crash during build
    return {
      from: () => ({
        insert: () => Promise.resolve({ data: null, error: new Error('Database not configured') }),
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: new Error('Database not configured') }),
            order: () => Promise.resolve({ data: [], error: new Error('Database not configured') })
          }),
          order: () => Promise.resolve({ data: [], error: new Error('Database not configured') }),
          single: () => Promise.resolve({ data: null, error: new Error('Database not configured') })
        }),
        update: () => ({
          eq: () => ({
            select: () => ({
              single: () => Promise.resolve({ data: null, error: new Error('Database not configured') })
            })
          })
        }),
        upsert: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: null, error: new Error('Database not configured') })
          })
        }),
        delete: () => ({
          eq: () => Promise.resolve({ error: new Error('Database not configured') })
        })
      })
    } as any;
  }
  
  return createClient(supabaseUrl, supabaseKey);
};

export const supabase = createSupabaseClient();

// ============================================================================
// DATABASE OPERATIONS
// ============================================================================
// These functions let you interact with your database
// They handle creating, reading, updating, and deleting data

export const db = {
  // ============================================================================
  // CONTACT FORM SUBMISSIONS
  // ============================================================================
  
  // Save a new contact form submission to the database
  async createContactSubmission(data: ContactSubmission) {
    // Map camelCase fields to database snake_case fields
    const dbData = {
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      project_type: data.projectType, // Map projectType to project_type
      budget: data.budget,
      message: data.message,
      files: data.files
    };

    const { data: result, error } = await supabase
      .from('contact_submissions')  // Table name in your database
      .insert([dbData])             // Insert the mapped form data
      .select()                     // Get back the saved data
      .single();                    // Return just one record
    
    if (error) throw error;         // If something goes wrong, throw an error
    return result as ContactSubmission;                  // Return the saved submission
  },

  // Get all contact form submissions (for admin dashboard)
  async getContactSubmissions() {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')                  // Get all columns
      .order('created_at', { ascending: false }); // Newest first
    
    if (error) throw error;
    return data as ContactSubmission[];
  },

  // ============================================================================
  // JOB APPLICATIONS
  // ============================================================================
  
  // Save a new job application to the database
  async createJobApplication(data: JobApplication) {
    const { data: result, error } = await supabase
      .from('job_applications')     // Table name in your database
      .insert([data])               // Insert the application data
      .select()
      .single();
    
    if (error) throw error;
    return result as JobApplication;
  },

  // Get all job applications (for HR/admin review)
  async getJobApplications() {
    const { data, error } = await supabase
      .from('job_applications')
      .select('*')
      .order('created_at', { ascending: false }); // Newest applications first
    
    if (error) throw error;
    return data as JobApplication[];
  },

  // ============================================================================
  // BLOG POSTS
  // ============================================================================
  
  // Create a new blog post
  async createBlogPost(data: BlogPost) {
    const { data: result, error } = await supabase
      .from('blog_posts')           // Table name in your database
      .insert([data])
      .select()
      .single();
    
    if (error) throw error;
    return result as BlogPost;
  },

  // Get all blog posts (published or all)
  async getBlogPosts(published = true) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', published)   // Only get published posts by default
      .order('published_at', { ascending: false }); // Newest posts first
    
    if (error) throw error;
    return data as BlogPost[];
  },

  // Get a specific blog post by its URL slug
  async getBlogPostBySlug(slug: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)             // Find post with this slug
      .eq('published', true)        // Only published posts
      .single();                    // Should be only one result
    
    if (error) throw error;
    return data as BlogPost;
  },

  // Update an existing blog post
  async updateBlogPost(id: string, data: Partial<BlogPost>) {
    const { data: result, error } = await supabase
      .from('blog_posts')
      .update(data)                 // Update with new data
      .eq('id', id)                 // Find post with this ID
      .select()
      .single();
    
    if (error) throw error;
    return result as BlogPost;
  },

  // Delete a blog post
  async deleteBlogPost(id: string) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()                     // Delete the record
      .eq('id', id);                // Find post with this ID
    
    if (error) throw error;
  },

  // ============================================================================
  // EMAIL SUBSCRIBERS
  // ============================================================================
  
  // Add a new email subscriber (or update existing one)
  async createEmailSubscriber(email: string) {
    const { data: result, error } = await supabase
      .from('email_subscribers')
      .upsert([{ email, subscribed: true }], { onConflict: 'email' }) // Update if email already exists
      .select()
      .single();
      
    if (error) throw error;
    return result as EmailSubscriber;
  },

  // Unsubscribe an email address
  async unsubscribeEmail(email: string) {
    const { error } = await supabase
      .from('email_subscribers')
      .update({ subscribed: false }) // Mark as unsubscribed
      .eq('email', email);
      
    if (error) throw error;
  },

  // Get all active email subscribers
  async getEmailSubscribers() {
    const { data, error } = await supabase
      .from('email_subscribers')
      .select('*')
      .eq('subscribed', true)       // Only active subscribers
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as EmailSubscriber[];
  }
}; 