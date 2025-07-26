import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Extract project ID from URL if it exists
    let projectId = 'Not found';
    if (supabaseUrl) {
      const match = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/);
      if (match) {
        projectId = match[1];
      }
    }

    return NextResponse.json({
      environment: 'production',
      supabaseUrl: supabaseUrl ? supabaseUrl : 'Missing',
      projectId: projectId,
      anonKeyLength: supabaseAnonKey ? supabaseAnonKey.length : 0,
      serviceKeyLength: supabaseServiceKey ? supabaseServiceKey.length : 0,
      anonKeySet: !!supabaseAnonKey,
      serviceKeySet: !!supabaseServiceKey,
      expectedProjectId: 'uwtzgzrfjvatqsgpbodq',
      isCorrectDatabase: projectId === 'uwtzgzrfjvatqsgpbodq',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return NextResponse.json({
      error: 'Failed to check environment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}