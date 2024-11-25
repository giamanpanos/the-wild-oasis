import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://foaxxkabprcymeqpoyag.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvYXh4a2FicHJjeW1lcXBveWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMzU1NzAsImV4cCI6MjA0NjgxMTU3MH0.j9lBuyW_m8DwZW1w6vQVm6akUuH0znEV9pDJRJJU6HI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
