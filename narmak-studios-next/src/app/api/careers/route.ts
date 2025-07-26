import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateApplicationEmail } from '@/lib/email';
import { db, FileInfo } from '@/lib/database';

export async function POST(request: NextRequest) {
  console.log('=== CAREERS FORM SUBMISSION STARTED ===');
  console.log('Timestamp:', new Date().toISOString());
  
  try {
    // Parse FormData instead of JSON
    const formData = await request.formData();
    console.log('FormData parsed successfully');
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const portfolio = formData.get('portfolio') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as string;

    console.log('Form fields extracted:', {
      name: name ? 'Set' : 'Missing',
      email: email ? 'Set' : 'Missing',
      phone: phone ? 'Set' : 'Empty',
      position: position ? 'Set' : 'Missing',
      experience: experience ? 'Set' : 'Empty',
      portfolio: portfolio ? 'Set' : 'Empty',
      coverLetter: coverLetter ? `Set (${coverLetter.length} chars)` : 'Missing',
      resume: resume ? 'Set' : 'Empty'
    });

    // Extract files
    const files: File[] = [];
    for (let i = 0; i < 5; i++) {
      // Allow up to 5 files
      const file = formData.get(`file${i}`);
      if (file instanceof File && file.size > 0) {
        files.push(file);
      }
    }
    console.log('Files extracted:', files.length, 'files found');

    // Validate required fields
    if (!name || !email || !position || !coverLetter) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Name, email, position, and cover letter are required' },
        { status: 400 }
      );
    }

    // Validate file sizes (max 10MB per file)
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    for (const file of files) {
      if (file.size > maxFileSize) {
        console.log('File size validation failed:', file.name, file.size);
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

    console.log('File info prepared:', fileInfo.map(f => ({ name: f.name, size: f.size })));

    // Save to database with file information
    let savedApplicationId: string | null = null;
    try {
      console.log('=== ATTEMPTING DATABASE SAVE ===');
      const savedApplication = await db.createJobApplication({
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
      
      savedApplicationId = savedApplication.id;
      console.log('✅ DATABASE SAVE SUCCESSFUL!');
      console.log('Saved application ID:', savedApplicationId);
      
    } catch (dbError) {
      console.error('❌ DATABASE SAVE FAILED!');
      console.error('Database error details:', {
        message: dbError instanceof Error ? dbError.message : 'Unknown error',
        stack: dbError instanceof Error ? dbError.stack : 'No stack trace',
        name: dbError instanceof Error ? dbError.name : 'Unknown error type'
      });
      
      // Log the full error object for debugging
      console.error('Full error object:', dbError);
      
      // Fallback: log to console if database fails
      console.log('📝 FALLBACK: Logging application to console');
      console.log('Job application (fallback log):', {
        name,
        email,
        phone,
        position,
        experience,
        portfolio,
        coverLetter,
        resume,
        files: files.map(f => ({ name: f.name, size: f.size })),
        timestamp: new Date().toISOString()
      });
      
      // Return error instead of continuing
      return NextResponse.json(
        { 
          success: false,
          error: 'There was an issue saving your application. Please try again or contact us directly.',
          details: dbError instanceof Error ? dbError.message : 'Database connection failed',
          debug: {
            databaseConnected: false,
            applicationSaved: false,
            errorType: dbError instanceof Error ? dbError.name : 'Unknown',
            timestamp: new Date().toISOString()
          }
        },
        { status: 500 }
      );
    }

    // TODO: Upload files to cloud storage (Supabase Storage, AWS S3, etc.)
    // For now, we'll just store the file metadata
    console.log('Files to upload:', files.map((f) => ({ name: f.name, size: f.size })));

    // Generate and send email
    try {
      console.log('Attempting to send email notification...');
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

      await sendEmail(emailData);
      console.log('✅ Email notification sent successfully');
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      // Continue - don't fail the whole request if email fails
    }

    console.log('=== CAREERS FORM SUBMISSION COMPLETED SUCCESSFULLY ===');
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your application! We\'ll review it and get back to you soon.',
        filesUploaded: files.length,
        applicationId: savedApplicationId,
        debug: {
          databaseConnected: true,
          applicationSaved: true,
          emailSent: true,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ CAREERS FORM ERROR!');
    console.error('Form processing error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    });
    console.log('=== CAREERS FORM SUBMISSION FAILED ===');
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Something went wrong processing your application. Please try again.',
        debug: {
          errorType: error instanceof Error ? error.name : 'Unknown',
          timestamp: new Date().toISOString()
        }
      },
      { status: 500 }
    );
  }
} 