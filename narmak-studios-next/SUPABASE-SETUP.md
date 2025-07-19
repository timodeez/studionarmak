# 🚀 Supabase Setup Guide

## **Step 1: Create Supabase Account & Project**

1. **Go to [supabase.com](https://supabase.com)** and sign up
2. **Create a new project**:
   - Click "New Project"
   - Choose your organization
   - Enter project name: `narmak-studios`
   - Enter database password (save this!)
   - Choose region closest to you
   - Click "Create new project"

## **Step 2: Get Your API Keys**

1. **In your Supabase dashboard**, go to **Settings** → **API**
2. **Copy these values**:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (the long one)

## **Step 3: Create Environment File**

1. **In your project folder**, create a file called `.env.local`
2. **Add this content** (replace with your actual values):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## **Step 4: Create Database Tables**

1. **In Supabase dashboard**, go to **SQL Editor**
2. **Run this SQL command** to create the contact submissions table:

```sql
-- Create contact_submissions table
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

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users
CREATE POLICY "Allow inserts from authenticated users" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads from authenticated users
CREATE POLICY "Allow reads from authenticated users" ON contact_submissions
  FOR SELECT USING (true);
```

## **Step 5: Test Your Setup**

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Submit a test form** on your website
3. **Check Supabase dashboard** → **Table Editor** → **contact_submissions**
4. **You should see your submission!**

## **Step 6: View Your Data**

- **Go to Supabase Dashboard** → **Table Editor**
- **Click on `contact_submissions` table**
- **You'll see all form submissions with timestamps**

## **Troubleshooting**

### **"Database connection failed" error:**
- Check your `.env.local` file has correct values
- Make sure you copied the **service role key**, not the anon key
- Restart your development server after adding environment variables

### **"Table doesn't exist" error:**
- Run the SQL commands in Step 4
- Make sure you're in the correct project in Supabase

### **Form still shows "test mode":**
- Check browser console for errors
- Verify environment variables are loaded correctly

## **Next Steps**

Once this is working, you can:
- Set up email notifications
- Create admin dashboard
- Add more form types (careers, blog, etc.)

## **Security Notes**

- ✅ **Never commit `.env.local` to git**
- ✅ **Use service role key for server-side operations**
- ✅ **Enable Row Level Security (RLS)**
- ✅ **Regularly backup your database** 