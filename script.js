// Replace with your own values from Supabase → Settings → API
const SUPABASE_URL = "https://pcdveqprfopaofcjkady.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjZHZlcXByZm9wYW9mY2prYWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNDMyMDksImV4cCI6MjA2MDYxOTIwOX0.YYffphzHl9CtG6L9XpEBLgFE9WfYSq_F-RT3cg10d_k";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkConnection() {
  const { data, error } = await supabase.from("lobbies").select("*").limit(1);
  const statusEl = document.getElementById("status");

  if (error) {
    statusEl.textContent = "❌ Connection failed!";
    console.error(error);
  } else {
    statusEl.textContent = "✅ Connected to Supabase!";
  }
}

checkConnection();
