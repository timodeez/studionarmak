# Backend Setup Guide

This guide will help you set up the complete backend system for Studio Narmak's website.

## 🗄️ Database Setup (Supabase - Recommended)

### 1. Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up and create a new project
3. Note your project URL and API keys

### 2. Install Supabase Client
```bash
npm install @supabase/supabase-js
```

### 3. Set Environment Variables
Create `.env.local` file:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key
```

### 4. Create Database Tables
Run these SQL commands in your Supabase SQL editor:

```sql
-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  project_type TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job applications table
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
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog posts table
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

-- Email subscribers table
CREATE TABLE email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_email_subscribers_subscribed ON email_subscribers(subscribed);
```

## 📧 Email Service Setup (Resend)

### 1. Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up and verify your domain
3. Get your API key

### 2. Install Resend
```bash
npm install resend
```

### 3. Update Email Configuration
Edit `src/lib/email.ts` and uncomment the Resend code:
```typescript
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);
```

### 4. Update Email Addresses
Update the email addresses in `src/lib/email.ts`:
- `your-email@yourdomain.com` → Your actual email
- `hr@yourdomain.com` → Your HR email

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Environment Variables for Production
Make sure to add these in your hosting platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`

## 📝 Blog Management

### Admin Dashboard
Create an admin page at `/admin` to manage blog posts:

```typescript
// src/app/admin/page.tsx
'use client';
import { useState, useEffect } from 'react';
import BlogEditor from '@/components/BlogEditor';

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch('/api/blog?published=false');
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display text-off-white mb-8">Blog Management</h1>
      
      {editingPost ? (
        <BlogEditor 
          post={editingPost}
          onSave={(post) => {
            setEditingPost(null);
            fetchPosts();
          }}
          onCancel={() => setEditingPost(null)}
        />
      ) : (
        <div>
          <button 
            onClick={() => setEditingPost({})}
            className="mb-6 px-6 py-3 bg-neon-accent text-charcoal font-semibold rounded-lg"
          >
            Create New Post
          </button>
          
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 bg-[#232325] rounded-lg">
                <h3 className="text-lg font-semibold text-off-white">{post.title}</h3>
                <p className="text-off-white/70 text-sm">{post.excerpt}</p>
                <div className="mt-2 flex gap-2">
                  <button 
                    onClick={() => setEditingPost(post)}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    Edit
                  </button>
                  <span className={`px-3 py-1 rounded text-sm ${
                    post.published ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                  }`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

## 📊 Content Management Features

### What's Included:
- ✅ Contact form submissions stored in database
- ✅ Job applications stored in database
- ✅ Blog post creation and management
- ✅ Email subscription system
- ✅ Email notifications for new submissions
- ✅ Admin dashboard for content management

### API Endpoints:
- `POST /api/contact` - Submit contact form
- `POST /api/careers` - Submit job application
- `GET /api/blog` - Get all blog posts
- `POST /api/blog` - Create new blog post
- `GET /api/blog/[slug]` - Get specific blog post
- `PUT /api/blog/[slug]` - Update blog post
- `DELETE /api/blog/[slug]` - Delete blog post
- `POST /api/subscribe` - Subscribe to email updates
- `DELETE /api/subscribe?email=...` - Unsubscribe from updates

## 🔧 Customization

### Adding More Fields
To add more fields to forms:
1. Update the database table schema
2. Update the TypeScript interfaces in `src/lib/database.ts`
3. Update the API routes
4. Update the form components

### Email Templates
Customize email templates in `src/lib/email.ts`:
- Contact form notifications
- Job application notifications
- Welcome emails for subscribers
- Newsletter templates

### Styling
All components use your existing Tailwind CSS classes and design system.

## 🛡️ Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **Input Validation**: All inputs are validated on both client and server
3. **CORS**: Configure CORS if needed for cross-origin requests
4. **Authentication**: Add admin authentication for blog management
5. **Environment Variables**: Never commit API keys to version control

## 📈 Analytics & Monitoring

Consider adding:
- Google Analytics for website traffic
- Supabase Analytics for database performance
- Error monitoring (Sentry, LogRocket)
- Email delivery tracking

## 🆘 Troubleshooting

### Common Issues:
1. **Database connection errors**: Check Supabase URL and API keys
2. **Email not sending**: Verify Resend API key and domain verification
3. **Build errors**: Make sure all dependencies are installed
4. **Environment variables**: Ensure they're set in production

### Support:
- Supabase: [docs.supabase.com](https://docs.supabase.com)
- Resend: [resend.com/docs](https://resend.com/docs)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs) 