import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vrzmuouatcyfwenqlhys.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyem11b3VhdGN5ZndlbnFsaHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MjY4MjAsImV4cCI6MTk5MDUwMjgyMH0.tqHFkGPiD5pCqOZ_GGr77IyxUQWiNL7nYzVJu8PZoSM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
