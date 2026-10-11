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

## Marlin question bank status
- 1,450 active question records are seeded in `public.marlin_questions`.
- Tests 01–05: 60 questions each, 6 per topic, 60 minutes.
- Tests 06–10: 100 questions each, 10 per topic, 90 minutes.
- Tests 11–15: 130 questions each, 13 per topic, 125 minutes.
- Each test has all 10 topics and the current question prompts are unique across the active bank.
- Listening, pronunciation and audio-to-picture prompts use browser speech synthesis for now; this is not a library of recorded native-speaker audio files.
- Picture-to-word matching currently uses emoji object illustrations and a five-item matching interaction; replace these with licensed/custom illustrations before a commercial launch.
- Tests remain unpublished until final end-to-end quality assurance and media review are complete.
