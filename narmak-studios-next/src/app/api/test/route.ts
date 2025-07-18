import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

interface TestData {
  name: string;
}

export function GET() {
  return NextResponse.json({ 
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    env: {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set',
      serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Not set'
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json() as TestData;
    
    return NextResponse.json({ 
      message: 'Test POST successful!',
      receivedName: name,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Test POST failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 