-- ============================================================================
-- DATABASE UPDATE SCRIPT
-- ============================================================================
-- Run these commands in your Supabase SQL Editor if you already have tables
-- but need to add the files column for file uploads

-- ============================================================================
-- ADD FILES COLUMN TO EXISTING TABLES
-- ============================================================================

-- Add files column to contact_submissions table (if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'contact_submissions' 
        AND column_name = 'files'
    ) THEN
        ALTER TABLE contact_submissions ADD COLUMN files JSONB;
        RAISE NOTICE 'Added files column to contact_submissions table';
    ELSE
        RAISE NOTICE 'files column already exists in contact_submissions table';
    END IF;
END $$;

-- Add files column to job_applications table (if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'job_applications' 
        AND column_name = 'files'
    ) THEN
        ALTER TABLE job_applications ADD COLUMN files JSONB;
        RAISE NOTICE 'Added files column to job_applications table';
    ELSE
        RAISE NOTICE 'files column already exists in job_applications table';
    END IF;
END $$;

-- ============================================================================
-- VERIFY THE CHANGES
-- ============================================================================

-- Check the structure of contact_submissions table
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
ORDER BY ordinal_position;

-- Check the structure of job_applications table
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'job_applications' 
ORDER BY ordinal_position;

-- ============================================================================
-- SAMPLE FILE DATA STRUCTURE
-- ============================================================================
-- This is what the files JSONB column will store:
/*
[
  {
    "name": "project-brief.pdf",
    "size": 1024000,
    "type": "application/pdf",
    "lastModified": 1703123456789
  },
  {
    "name": "reference-image.jpg",
    "size": 2048000,
    "type": "image/jpeg",
    "lastModified": 1703123456789
  }
]
*/ 