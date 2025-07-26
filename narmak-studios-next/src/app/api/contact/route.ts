import { NextRequest, NextResponse } from 'next/server';
import { db, FileInfo } from '@/lib/database';

interface ContactSubmissionPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
  files?: FileInfo[];
}

interface SubmitResult {
  success: boolean;
  message: string;
  filesUploaded: number;
  submissionId: string;
  error?: string;
  note?: string;
  debug?: any;
}

export async function POST(request: NextRequest) {
  console.log('=== CONTACT FORM SUBMISSION STARTED ===');
  console.log('Timestamp:', new Date().toISOString());
  
  try {
    // Parse FormData instead of JSON
    const formData = await request.formData();
    console.log('FormData parsed successfully');
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const budget = formData.get('budget') as string;
    const message = formData.get('message') as string;

    console.log('Form fields extracted:', {
      name: name ? 'Set' : 'Missing',
      email: email ? 'Set' : 'Missing',
      company: company ? 'Set' : 'Empty',
      phone: phone ? 'Set' : 'Empty',
      projectType: projectType ? 'Set' : 'Empty',
      budget: budget ? 'Set' : 'Empty',
      message: message ? `Set (${message.length} chars)` : 'Missing'
    });

    // Extract files
    const files: FileInfo[] = [];
    for (let i = 0; i < 10; i++) { // Allow up to 10 files
      const file = formData.get(`file${i}`);
      if (file instanceof File && file.size > 0) {
        files.push({
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
        });
      }
    }
    console.log('Files extracted:', files.length, 'files found');

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Prepare data for database
    const submissionData: ContactSubmissionPayload = {
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      projectType: projectType || undefined,
      budget: budget || undefined,
      message,
      files: files.length > 0 ? files : undefined
    };

    console.log('Submission data prepared:', {
      ...submissionData,
      files: submissionData.files ? submissionData.files.map(f => ({ name: f.name, size: f.size })) : undefined
    });

    // Try to save to Supabase
    try {
      console.log('=== ATTEMPTING DATABASE SAVE ===');
      console.log('Environment check - SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set');
      console.log('Environment check - ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set');
      
      const savedSubmission = await db.createContactSubmission(submissionData);
      
      console.log('✅ DATABASE SAVE SUCCESSFUL!');
      console.log('Saved submission ID:', savedSubmission.id);
      console.log('=== CONTACT FORM SUBMISSION COMPLETED SUCCESSFULLY ===');
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your inquiry! We\'ll get back to you soon.',
          filesUploaded: files.length,
          submissionId: savedSubmission.id,
          debug: {
            databaseConnected: true,
            submissionSaved: true,
            timestamp: new Date().toISOString()
          }
        } as SubmitResult,
        { status: 200 }
      );
      
    } catch (dbError: unknown) {
      console.error('❌ DATABASE SAVE FAILED!');
      console.error('Database error details:', {
        message: dbError instanceof Error ? dbError.message : 'Unknown error',
        stack: dbError instanceof Error ? dbError.stack : 'No stack trace',
        name: dbError instanceof Error ? dbError.name : 'Unknown error type'
      });
      
      // Log the full error object for debugging
      console.error('Full error object:', dbError);
      
      // Fallback: log to console if database fails
      console.log('📝 FALLBACK: Logging submission to console');
      console.log('Contact submission (fallback log):', {
        name,
        email,
        company,
        phone,
        projectType,
        budget,
        message,
        files: files.map(f => ({ name: f.name, size: f.size })),
        timestamp: new Date().toISOString()
      });
      
      // Return an error instead of false success
      return NextResponse.json(
        { 
          success: false, 
          message: 'There was an issue saving your submission. Please try again or contact us directly.',
          filesUploaded: 0,
          submissionId: `error-${Date.now()}`,
          error: dbError instanceof Error ? dbError.message : 'Database connection failed',
          debug: {
            databaseConnected: false,
            submissionSaved: false,
            errorType: dbError instanceof Error ? dbError.name : 'Unknown',
            timestamp: new Date().toISOString()
          }
        } as SubmitResult,
        { status: 500 }
      );
    }

  } catch (error: unknown) {
    console.error('❌ CONTACT FORM ERROR!');
    console.error('Form processing error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    });
    console.log('=== CONTACT FORM SUBMISSION FAILED ===');
    
    return NextResponse.json(
      { 
        error: 'Something went wrong processing your request. Please try again.',
        debug: {
          errorType: error instanceof Error ? error.name : 'Unknown',
          timestamp: new Date().toISOString()
        }
      },
      { status: 500 }
    );
  }
} 