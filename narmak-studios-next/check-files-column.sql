-- ============================================================================
-- CHECK IF FILES COLUMN EXISTS
-- ============================================================================
-- Run this query to check if the files column exists in your tables
-- This is safe to run multiple times

-- Check if files column exists in contact_submissions table
SELECT 
    column_name, 
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
AND column_name = 'files';

-- Check if files column exists in job_applications table
SELECT 
    column_name, 
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'job_applications' 
AND column_name = 'files';

-- ============================================================================
-- IF NO RESULTS APPEAR, RUN THIS TO ADD THE FILES COLUMN:
-- ============================================================================

-- Add files column to contact_submissions table
ALTER TABLE contact_submissions ADD COLUMN files JSONB;

-- Add files column to job_applications table  
ALTER TABLE job_applications ADD COLUMN files JSONB; 