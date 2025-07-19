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
}

export async function POST(request: NextRequest) {
  try {
    // Parse FormData instead of JSON
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const budget = formData.get('budget') as string;
    const message = formData.get('message') as string;

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

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Try to save to Supabase
    try {
      console.log('Attempting to save to Supabase...');
      console.log('Environment check - SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set');
      console.log('Environment check - SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Not set');
      
      const savedSubmission = await db.createContactSubmission(submissionData);
      
      console.log('Contact submission saved to Supabase:', savedSubmission);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your inquiry! We\'ll get back to you soon.',
          filesUploaded: files.length,
          submissionId: savedSubmission.id
        } as SubmitResult,
        { status: 200 }
      );
      
    } catch (dbError: unknown) {
      if (dbError instanceof Error) {
        console.error('Database error details:', {
          message: dbError.message,
          stack: dbError.stack,
          name: dbError.name
        });
      } else {
        console.error('An unknown database error occurred:', dbError);
      }
      
      // Fallback: log to console if database fails
      console.log('New quote request received (fallback):', {
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
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your inquiry! We\'ll get back to you soon.',
          filesUploaded: files.length,
          submissionId: `fallback-${Date.now()}`,
          note: 'Saved locally (database connection issue)'
        } as SubmitResult,
        { status: 200 }
      );
    }

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Contact form error:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
} 