# Studio Narmak - Next.js Website

A modern, animated website for Studio Narmak built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Splash Screen** - Professional loading experience with Narmak branding
- **Performance Optimized** - Fast loading times with video compression and lazy loading
- **Responsive Design** - Works perfectly on all devices
- **Contact Forms** - Integrated contact and subscription forms with Supabase backend
- **API Routes** - Backend functionality for forms and blog
- **Modern UI** - Beautiful animations and transitions
- **Database Integration** - Fully configured Supabase database with all tables

## Current Status ✅

- **Database**: Supabase integrated (Project ID: `bnxekywwfgyobsfemiwl`)
- **Tables**: All created with proper security policies
- **Vercel**: Environment variables configured via integration
- **Forms**: Contact, jobs, and email subscription forms working
- **Deployment**: Live and functional

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up local environment (for development):
   ```bash
   cp .env.example .env.local
   ```
   Then update `.env.local` with your Supabase API keys from:
   https://supabase.com/dashboard/project/bnxekywwfgyobsfemiwl/settings/api

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Configuration

### Production (Vercel)
✅ **Already configured** - Environment variables set via Vercel-Supabase integration

### Local Development
Update `.env.local` with your API keys:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://bnxekywwfgyobsfemiwl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Database Setup ✅

The Supabase database is fully configured with:
- ✅ `contact_submissions` - Contact form data
- ✅ `job_applications` - Career applications  
- ✅ `email_subscribers` - Newsletter subscribers
- ✅ `blog_posts` - Blog/journal content
- ✅ Row Level Security policies
- ✅ Performance indexes

## Deployment

### Vercel Deployment ✅

**Already deployed and configured!**

The website is connected to Vercel with:
- ✅ Automatic deployments on push to main
- ✅ Environment variables configured via Supabase integration
- ✅ Database fully functional
- ✅ All forms working

## Testing

Test your database connection:
```bash
node test-database.js
```

## Documentation

- [VERCEL-SUPABASE-CONNECTION.md](./VERCEL-SUPABASE-CONNECTION.md) - Complete setup guide
- [BACKEND-SETUP.md](./BACKEND-SETUP.md) - Backend configuration details
- [SUPABASE-SETUP.md](./SUPABASE-SETUP.md) - Database setup instructions

## Latest Update

- ✅ **NEW**: Connected to integrated Supabase database (bnxekywwfgyobsfemiwl)
- ✅ **NEW**: All database tables created with proper security
- ✅ **NEW**: Vercel environment variables configured automatically
- ✅ **NEW**: Contact forms fully functional
- ✅ **FIXED**: Duplicate database issue resolved
