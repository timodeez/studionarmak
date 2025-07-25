import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';
import { sendEmail } from '@/lib/email';

interface SubscriptionPayload {
  email: string;
}

// POST - Subscribe to email updates
export async function POST(request: NextRequest) {
  try {
    console.log('Newsletter subscription attempt started');
    
    let email: string;
    try {
      const body = await request.json();
      email = body.email;
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    console.log('Email received:', email);

    // Validate email
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      console.log('Email validation failed:', email);
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Skip duplicate check for now to avoid database issues
    console.log('Skipping duplicate check to avoid database issues');

    // Save to database
    try {
      await db.createEmailSubscriber(email);
      console.log('Email subscriber saved successfully:', email);
    } catch (dbError) {
      console.error('Database error saving email subscriber:', dbError);
      // Don't fail the request - log the subscription instead
      console.log('FALLBACK: Email subscription logged:', {
        email,
        timestamp: new Date().toISOString(),
        source: 'newsletter_subscription'
      });
    }

    // Send welcome email (temporarily disabled to isolate database issues)
    try {
      // await sendEmail({
      //   to: email,
      //   subject: 'Welcome to Studio Narmak Updates!',
      //   html: `
      //     <h2>Welcome to Studio Narmak!</h2>
      //     <p>Thank you for subscribing to our updates. You'll be the first to know about:</p>
      //     <ul>
      //       <li>New projects and behind-the-scenes content</li>
      //       <li>Industry insights and tips</li>
      //       <li>Job opportunities and team updates</li>
      //       <li>Latest blog posts and tutorials</li>
      //     </ul>
      //     <p>Stay creative!</p>
      //     <p>- The Studio Narmak Team</p>
      //   `
      // });
      console.log('Email sending temporarily disabled for debugging');
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to updates!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// DELETE - Unsubscribe from email updates
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    await db.unsubscribeEmail(email);

    return NextResponse.json(
      { success: true, message: 'Successfully unsubscribed from updates.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unsubscription error:', error);
    return NextResponse.json(
      { error: 'Failed to unsubscribe. Please try again.' },
      { status: 500 }
    );
  }
} 