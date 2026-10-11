# Ocean Star Marine Academy — Marlin Test Series

Premium navy-and-gold online maritime English assessment platform.

## Stack
- Vite + React + TypeScript
- Supabase Postgres, Storage and Edge Functions
- Edge Function `marlin-api` handles privileged operations; database tables have RLS enabled and direct client grants revoked.

## Supabase project
Project ref: `tzfsjpqammpcysqjqmmi`
Region: `ap-south-1`

## Required function secrets
Set these in Supabase Dashboard → Edge Functions → Secrets:
- `SUPABASE_URL` (normally provided by Supabase)
- `SUPABASE_SERVICE_ROLE_KEY` (normally provided by Supabase; never expose in browser)
- `MARLIN_ADMIN_PIN_SHA256`: SHA-256 hex digest of your chosen 6-digit admin PIN.

Generate the digest locally:
```bash
node -e "console.log(require('crypto').createHash('sha256').update(process.argv[1]).digest('hex'))" YOUR_6_DIGIT_PIN
```
Never commit the PIN or its digest to Git.

## Local setup
```bash
npm install
cp .env.example .env
npm run dev
```

The Edge Function `marlin-api` is deployed in the linked Supabase project. Question banks must be populated before a test is published; each test requires the configured per-topic count across all 10 topics.
