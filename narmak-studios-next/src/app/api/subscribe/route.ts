import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';
import { sendEmail } from '@/lib/email';

interface SubscriptionPayload {
  email: string;
}

// POST - Subscribe to email updates
export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as SubscriptionPayload;

    // Validate email
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Check for duplicate subscriber
    const subscribers = await db.getEmailSubscribers();
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber?.subscribed) {
      return NextResponse.json(
        { error: 'This email is already subscribed.' },
        { status: 409 } // 409 Conflict
      );
    }

    // Save to database
    await db.createEmailSubscriber(email);

    // Send welcome email
    try {
      await sendEmail({
        to: email,
        subject: 'Welcome to Studio Narmak Updates!',
        html: `
          <h2>Welcome to Studio Narmak!</h2>
          <p>Thank you for subscribing to our updates. You'll be the first to know about:</p>
          <ul>
            <li>New projects and behind-the-scenes content</li>
            <li>Industry insights and tips</li>
            <li>Job opportunities and team updates</li>
            <li>Latest blog posts and tutorials</li>
          </ul>
          <p>Stay creative!</p>
          <p>- The Studio Narmak Team</p>
        `
      });
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
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
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