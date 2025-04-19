// Replace with your own values from Supabase → Settings → API
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

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
