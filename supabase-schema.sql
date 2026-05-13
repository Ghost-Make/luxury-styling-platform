-- ─────────────────────────────────────────────
-- Portfolio Contact Submissions Schema
-- Run this in Supabase SQL Editor
-- ─────────────────────────────────────────────

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name       text NOT NULL CHECK (char_length(name) >= 2 AND char_length(name) <= 100),
  email      text NOT NULL CHECK (email ~* '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),
  subject    text NOT NULL CHECK (char_length(subject) >= 4),
  message    text NOT NULL CHECK (char_length(message) >= 20),
  created_at timestamptz NOT NULL DEFAULT now(),
  read       boolean DEFAULT false,
  replied    boolean DEFAULT false
);

-- Index for faster lookup by email and date
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions (email);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions (created_at DESC);

-- Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only the service role (server-side) can insert and read
-- Anon users cannot read submissions (privacy)
CREATE POLICY "Service role can do everything" ON contact_submissions
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Allow insert from anon (contact form submissions)
-- Remove if you prefer server-only inserts
CREATE POLICY "Anyone can submit" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- ─── Sample query to view submissions ───
-- SELECT id, name, email, subject, created_at, read
-- FROM contact_submissions
-- ORDER BY created_at DESC;

-- ─────────────────────────────────────────────
-- AI Styling Reports Schema
-- ─────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS styling_reports (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name text NOT NULL,
  user_email text,
  age text,
  gender text,
  height text,
  body_shape text,
  face_shape text,
  skin_tone text,
  hair_type text,
  fashion_preferences text,
  lifestyle text,
  styling_goals text,
  report_data jsonb NOT NULL,
  status text DEFAULT 'pending',
  stylist_notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Index for faster lookup
CREATE INDEX IF NOT EXISTS idx_styling_reports_created_at ON styling_reports (created_at DESC);

-- RLS
ALTER TABLE styling_reports ENABLE ROW LEVEL SECURITY;

-- Service role can do everything
CREATE POLICY "Service role can do everything" ON styling_reports
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Allow insert from anon (so the server action / api can insert without service key if needed, 
-- but normally we use service key on the backend. This is just for flexibility)
CREATE POLICY "Anyone can insert report" ON styling_reports
  FOR INSERT
  WITH CHECK (true);

