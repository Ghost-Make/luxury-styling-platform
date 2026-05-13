const requiredVars = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "OPENAI_API_KEY",
  "RESEND_API_KEY",
  "CONTACT_EMAIL"
];

console.log("Checking Environment Variables...");
requiredVars.forEach(v => {
  if (process.env[v]) {
    console.log(`✅ ${v} is set`);
  } else {
    console.log(`❌ ${v} is NOT set`);
  }
});
