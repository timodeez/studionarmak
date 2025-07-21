# Studio Narmak - Next.js Website

A modern, animated website for Studio Narmak built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Splash Screen** - Professional loading experience with Narmak branding
- **Performance Optimized** - Fast loading times with video compression and lazy loading
- **Responsive Design** - Works perfectly on all devices
- **Contact Forms** - Integrated contact and subscription forms
- **API Routes** - Backend functionality for forms and blog
- **Modern UI** - Beautiful animations and transitions

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Configuration

The website can run without environment variables, but to enable database and email features:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials (see `.env.example` for details)

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
   - `RESEND_API_KEY` - Your Resend API key (optional)
3. Deploy automatically on push to main branch

**Note:** The website will build and deploy successfully even without environment variables. Database and email features will be disabled until you add the required credentials.

## Backend Setup

For complete backend functionality (database, email), see [BACKEND-SETUP.md](./BACKEND-SETUP.md)

## Latest Update

- Fixed Supabase initialization to handle missing environment variables during build
- Added `.env.example` for environment variable documentation
- Website now builds successfully on Vercel without requiring immediate database setup
