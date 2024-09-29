import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zhjkbdabdimorfuzoedm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoamtiZGFiZGltb3JmdXpvZWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzAwMDgsImV4cCI6MjA0MzAwNjAwOH0.bB_0yUkAaxUOFSFa1Quw_Lklg61b0cgMfLNXU5gHniM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
