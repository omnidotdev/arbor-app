/*
  # Add repository stars functionality
  
  1. New Tables
    - `stars`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `repository_owner` (text)
      - `repository_name` (text)
      - `created_at` (timestamp)
      
  2. Security
    - Enable RLS on `stars` table
    - Add policies for:
      - Users can read all stars
      - Users can only star/unstar their own entries
*/

CREATE TABLE IF NOT EXISTS stars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  repository_owner text NOT NULL,
  repository_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, repository_owner, repository_name)
);

ALTER TABLE stars ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read stars"
  ON stars
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can star repositories"
  ON stars
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unstar repositories"
  ON stars
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);