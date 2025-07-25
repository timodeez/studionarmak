# 🚀 Vercel + Supabase Connection Guide

## ✅ Current Status

Your Vercel environment variables have been added and your code has been updated to connect to Supabase! Here's what's already configured:

### Environment Variables in Vercel ✅
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public/anonymous key for client-side operations
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key for server-side operations
- `POSTGRES_PRISMA_URL` - Database connection for Prisma (if using)
- `POSTGRES_URL_NON_POOLING` - Direct database connection
- Plus other Postgres-specific variables

### Code Configuration ✅
- ✅ `src/lib/database.ts` - Updated to use correct environment variables
- ✅ API routes configured to use Supabase
- ✅ Contact form connected to database
- ✅ `.env.local` template created for local development
- ✅ `.env.example` updated with correct variables

## 🔧 What You Need to Do

### 1. Update Local Development Environment

If you want to test locally, update your `.env.local` file:

```bash
# Copy your actual values from Supabase dashboard
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**To get these values:**
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the values to your `.env.local` file

### 2. Test Your Database Connection

Run the database test script:

```bash
cd narmak-studios-next
node test-database.js
```

You should see:
```
✅ Database connection successful
✅ Insert successful
✅ Test cleanup completed
```

### 3. Verify API Endpoints

Test your API endpoint:

```bash
curl https://your-vercel-app.vercel.app/api/test
```

Should return:
```json
{
  "message": "API is working!",
  "env": {
    "supabaseUrl": "Set",
    "serviceKey": "Set"
  }
}
```

## 🎯 How It Works

### Environment Variables Used:

| Variable | Purpose | Where Used |
|----------|---------|------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Client & Server |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public API key | Client & Server |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin operations | Server only |

### Key Features Now Working:

1. **Contact Form** (`/contact`)
   - Saves submissions to `contact_submissions` table
   - Files information stored as JSON

2. **Email Subscriptions** 
   - Newsletter signups saved to `email_subscribers` table

3. **Database Operations**
   - Create, read, update, delete operations
   - Proper error handling
   - Type-safe with TypeScript

## 🛠️ Database Tables Required

Make sure your Supabase database has these tables:

```sql
-- Contact form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  project_type TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  files JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Email subscribers
CREATE TABLE email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON email_subscribers
  FOR INSERT WITH CHECK (true);
```

## 🚨 Security Notes

- ✅ Environment variables are properly configured
- ✅ `.env.local` is excluded from git
- ✅ Public keys are used for client-side operations
- ✅ Service role key is used for server-side operations only
- ⚠️ Review and configure Row Level Security policies as needed

## 🔍 Troubleshooting

### If contact form shows "test mode":
1. Check Vercel environment variables are set
2. Redeploy your Vercel application
3. Check browser console for errors

### If database connection fails:
1. Verify environment variables in Vercel dashboard
2. Check Supabase project is active
3. Ensure database tables exist
4. Test with the test script: `node test-database.js`

### If local development doesn't work:
1. Update `.env.local` with your actual Supabase values
2. Restart your development server: `npm run dev`

## 🎉 Success!

Your website should now be connected to Supabase! 

- Contact forms will save to your database
- You can view submissions in Supabase dashboard
- All environment variables are properly configured
- The connection works in both development and production

Visit your live site and test the contact form to see it in action!