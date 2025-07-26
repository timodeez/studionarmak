import { NextResponse } from 'next/server';
import { db } from '@/lib/database';

export async function GET() {
  try {
    console.log('Testing database connection...');
    
    // Try to query the database
    const testResult = await db.getEmailSubscribers();
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      emailSubscriberCount: testResult?.length || 0,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Database test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Database connection failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function POST() {
  try {
    console.log('Testing database insert...');
    
    // Try to insert a test contact submission
    const testData = {
      name: 'Test User',
      email: `test-${Date.now()}@example.com`,
      message: 'Test message from API test route',
      projectType: 'Test'
    };
    
    const result = await db.createContactSubmission(testData);
    
    return NextResponse.json({
      success: true,
      message: 'Database insert successful',
      submissionId: result.id,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Database insert test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Database insert failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}