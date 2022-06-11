import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwrqrpkjndpqvexiyojs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjIxNjY0MywiZXhwIjoxOTUxNzkyNjQzfQ.wR-wKmSyh3jx9aPCMjmHe-7rFWAq6iFJ2KG4qoqn4VM'

const supabase = createClient(supabaseUrl, supabaseKey)

export default function useSupabase() {
  return { supabase }
}
