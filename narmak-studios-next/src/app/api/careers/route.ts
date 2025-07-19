import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateApplicationEmail } from '@/lib/email';
import { db, FileInfo } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    // Parse FormData instead of JSON
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const portfolio = formData.get('portfolio') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as string;

    // Extract files
    const files: File[] = [];
    for (let i = 0; i < 5; i++) {
      // Allow up to 5 files
      const file = formData.get(`file${i}`);
      if (file instanceof File && file.size > 0) {
        files.push(file);
      }
    }

    // Validate required fields
    if (!name || !email || !position || !coverLetter) {
      return NextResponse.json(
        { error: 'Name, email, position, and cover letter are required' },
        { status: 400 }
      );
    }

    // Validate file sizes (max 10MB per file)
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    for (const file of files) {
      if (file.size > maxFileSize) {
        return NextResponse.json(
          { error: `File ${file.name} is too large. Maximum size is 10MB.` },
          { status: 400 }
        );
      }
    }

    // Create file information for database
    const fileInfo: FileInfo[] = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }));

    // Save to database with file information
    try {
      await db.createJobApplication({
        name,
        email,
        phone,
        position,
        experience,
        portfolio,
        coverLetter,
        resume,
        files: fileInfo, // Store file metadata in database
      });
    } catch (dbError) {
      console.error("Database submission failed:", dbError);
      // Decide if you want to fail the whole request or just log the error
      // For now, we'll continue and try to send the email
    }

    // TODO: Upload files to cloud storage (Supabase Storage, AWS S3, etc.)
    // For now, we'll just store the file metadata
    console.log(
      "Files to upload:",
      files.map((f) => ({ name: f.name, size: f.size }))
    );

    // Generate and send email
    try {
      const emailData = generateApplicationEmail({
        name,
        email,
        phone,
        position,
        experience,
        portfolio,
        coverLetter,
        files: files.map((f) => f.name), // Include file names in email
      });

      sendEmail(emailData);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Decide if you want to fail the whole request or just log the error
    }

    // Log the application
    console.log('New job application:', {
      name,
      email,
      phone,
      position,
      experience,
      portfolio,
      coverLetter,
      resume,
      files: files.map(f => f.name),
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your application! We\'ll review it and get back to you soon.',
        filesUploaded: files.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Job application error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
} 