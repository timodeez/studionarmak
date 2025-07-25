// Test script to check Supabase database connection
require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('=== Database Connection Test ===');
console.log('URL:', supabaseUrl ? 'Set' : 'Missing');
console.log('Key:', supabaseKey ? 'Set (length: ' + supabaseKey.length + ')' : 'Missing');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log('\n=== Testing Database Connection ===');
    
    // Test 1: Check if we can connect
    const { data, error } = await supabase
      .from('email_subscribers')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('❌ Database connection failed:', error.message);
      return;
    }
    
    console.log('✅ Database connection successful');
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
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testConnection();