# Contact Form Setup Guide

## Current Status: ✅ Working (Test Mode)

The contact form is currently working in **test mode** - it will accept submissions and log them to the console, but won't save to a database or send emails.

## What Works Now:
- ✅ Form validation
- ✅ File uploads (up to 10MB per file)
- ✅ Success/error messages
- ✅ Console logging of submissions

## To Enable Full Functionality:

### 1. Create Environment File
Create a `.env.local` file in the root directory with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Email Configuration (optional)
EMAIL_SERVICE_API_KEY=your_email_service_api_key_here
EMAIL_FROM_ADDRESS=noreply@yourdomain.com
EMAIL_TO_ADDRESS=contact@yourdomain.com
```

### 2. Set Up Supabase Database
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and API keys
4. Run the SQL commands in `BACKEND-SETUP.md`

### 3. Enable Full API
Replace the simplified API route with the full version:

```typescript
// In src/app/api/contact/route.ts
import { sendEmail, generateContactEmail } from '@/lib/email';
import { db } from '@/lib/database';

// ... rest of the full implementation
```

## Testing the Form:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Go to the Get a Quote page:**
   - Fill out the form
   - Submit
   - Check the browser console for the submission log

3. **Expected behavior:**
   - Form submits successfully
   - Success message appears
   - Submission logged to console
   - Form resets

## Troubleshooting:

### "Network error. Please try again."
- Make sure the development server is running (`npm run dev`)
- Check that you're on `http://localhost:3000`
- Clear browser cache and try again

### Form not submitting
- Check browser console for errors
- Make sure all required fields are filled
- Try without file uploads first

### Files not uploading
- Check file size (max 10MB per file)
- Try different file types
- Check browser console for errors

## Next Steps:

1. **Test the form** - Make sure it works in test mode
2. **Set up Supabase** - Follow the backend setup guide
3. **Configure email** - Set up email service for notifications
4. **Deploy** - Deploy to production with proper environment variables

## Current Test Mode Features:
- ✅ Form validation
- ✅ File uploads
- ✅ Success/error handling
- ✅ Console logging
- ✅ Form reset after submission
- ✅ Responsive design
- ✅ Loading states 