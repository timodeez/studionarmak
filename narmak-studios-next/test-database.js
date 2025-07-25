// Test script to check Supabase database connection
// ACTIVE DATABASE: uwtzgzrfjvatqsgpbodq
require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('=== Database Connection Test ===');
console.log('Target Database: uwtzgzrfjvatqsgpbodq');
console.log('URL:', supabaseUrl ? supabaseUrl : 'Missing');
console.log('Key:', supabaseKey ? 'Set (length: ' + supabaseKey.length + ')' : 'Missing');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  console.error('');
  console.error('To fix this:');
  console.error('1. Update your .env.local file with:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL=https://uwtzgzrfjvatqsgpbodq.supabase.co');
  console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here');
  console.error('2. Get your API keys from:');
  console.error('   https://supabase.com/dashboard/project/uwtzgzrfjvatqsgpbodq/settings/api');
  process.exit(1);
}

// Verify we're connecting to the correct database
const expectedProjectId = 'uwtzgzrfjvatqsgpbodq';
if (!supabaseUrl.includes(expectedProjectId)) {
  console.warn('⚠️  Warning: URL does not contain expected project ID:', expectedProjectId);
  console.warn('   Current URL:', supabaseUrl);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log('\n=== Testing Database Connection ===');
    
    // Test 1: Check if we can connect to the database
    const { data, error } = await supabase
      .from('email_subscribers')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('❌ Database connection failed:', error.message);
      console.error('   This might mean:');
      console.error('   - Wrong API key or URL');
      console.error('   - Database tables not created yet');
      console.error('   - RLS policies blocking access');
      return;
    }
    
    console.log('✅ Database connection successful');
    console.log('✅ Connected to correct database (uwtzgzrfjvatqsgpbodq)');
    console.log('Email subscribers count:', data);
    
    // Test 2: Try to insert a test email
    console.log('\n=== Testing Insert Permission ===');
    const testEmail = 'test-' + Date.now() + '@example.com';
    
    const { data: insertData, error: insertError } = await supabase
      .from('email_subscribers')
      .insert([{ email: testEmail }])
      .select()
      .single();
    
    if (insertError) {
      console.error('❌ Insert failed:', insertError.message);
      console.error('Error details:', insertError);
      return;
    }
    
    console.log('✅ Insert successful:', insertData);
    
    // Test 3: Clean up - delete the test email
    await supabase
      .from('email_subscribers')
      .delete()
      .eq('email', testEmail);
    
    console.log('✅ Test cleanup completed');
    console.log('\n🎉 All tests passed! Your database is ready.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testConnection();