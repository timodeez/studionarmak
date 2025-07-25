# 🔧 Database Fix Instructions

## Issues Fixed

✅ **Dropdown styling** - Made timezone and discipline dropdowns easier to read with better contrast
✅ **Portfolio URL validation** - Changed from requiring `https://` to just requiring `.com`
✅ **Environment variables** - Created `.env.local` with proper Supabase credentials
✅ **Error handling** - Added better error logging for database operations

## ⚠️ Critical Database Issue

**Problem**: Form submissions (careers, get a quote, newsletter) are not appearing in your Supabase database because Row Level Security (RLS) is enabled but there are no policies allowing anonymous users to insert data.

**Solution**: You need to run the database setup scripts in your Supabase dashboard.

## 🚀 Step-by-Step Fix

### Step 1: Create Database Tables (if not done already)

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/bnxekywwfgyobsfemiwl
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `database-setup.sql`
4. Click **Run** to create the tables

### Step 2: Set Up RLS Policies (CRITICAL)

1. In the same **SQL Editor**
2. Copy and paste the contents of `database-policies.sql`
3. Click **Run** to create the policies

**This step is essential** - without these policies, anonymous users cannot submit forms.

### Step 3: Verify Everything Works

1. Run the verification queries at the bottom of `database-policies.sql`
2. Check that all tables show `rowsecurity = true`
3. Check that policies exist for each table

### Step 4: Test Form Submissions

1. Try submitting the careers form
2. Try submitting the "get a quote" form  
3. Try subscribing to the newsletter
4. Check your Supabase dashboard → **Table Editor** to see the data

## 🔍 What Was Wrong

1. **Missing Environment Variables**: The `.env.local` file wasn't created with Supabase credentials
2. **RLS Policies Missing**: Tables had Row Level Security enabled but no policies allowing anonymous access
3. **Wrong Key Type**: The setup was trying to use a service role key but only had the anon key
4. **UI Issues**: Dropdown text was hard to read due to poor contrast

## 🎯 What's Fixed

### 1. Dropdown Styling
- Added proper text colors and background colors
- Made options more readable with better contrast
- Added focus states for better UX

### 2. Portfolio URL Validation  
- Changed from requiring `https://` to just requiring `.com`
- Updated placeholder text to be more user-friendly
- Updated error message to be clearer

### 3. Database Connection
- Created proper `.env.local` file with Supabase credentials
- Fixed database client configuration to use the anon key
- Added better error handling and logging

### 4. Newsletter Subscription
- Fixed async/await issue in the subscription API
- Added better error handling for database operations
- Made the subscription process more robust

## 🔧 Files Modified

- `src/app/careers/page.tsx` - Fixed dropdown styling and portfolio validation
- `src/lib/database.ts` - Fixed Supabase client configuration  
- `src/app/api/subscribe/route.ts` - Fixed async handling and error logging
- `.env.local` - Created with proper Supabase credentials
- `database-policies.sql` - Created RLS policies for anonymous access

## 🚨 Important Notes

1. **Run the SQL scripts**: The database policies are critical for form submissions to work
2. **Environment variables**: The `.env.local` file is now set up correctly
3. **Service role key**: You may want to get the actual service role key from Supabase dashboard for better security
4. **Testing**: After running the SQL scripts, test all forms to ensure they work

## 🎉 Expected Results

After following these steps:
- ✅ Careers form submissions will appear in `job_applications` table
- ✅ Get a quote submissions will appear in `contact_submissions` table  
- ✅ Newsletter subscriptions will appear in `email_subscribers` table
- ✅ Dropdown menus will be much easier to read
- ✅ Portfolio field will accept `.com` URLs without requiring `https://`

## 📞 If You Still Have Issues

1. Check the browser console for any error messages
2. Check the Supabase logs in the dashboard
3. Verify the SQL scripts ran without errors
4. Make sure you're looking at the correct project in Supabase dashboard