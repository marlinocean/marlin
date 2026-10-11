# Ocean Star Marine Academy — Marlin Test Series

Premium navy-and-gold online maritime English assessment platform.

## Stack
- Static student/admin portal hosted on GitHub Pages
- Supabase Postgres and Edge Function `marlin-api`
- Privileged operations run server-side; admin PIN is never embedded in the public website.

## Supabase project
Project ref: `tzfsjpqammpcysqjqmmi`
Region: `ap-south-1`

## Admin PIN configuration
In Supabase Dashboard, open the same project → Edge Functions → Secrets. Add either:
- `MARLIN_ADMIN_PIN`: your six-digit PIN (server-side secret), or
- `MARLIN_ADMIN_PIN_SHA256`: its 64-character SHA-256 hexadecimal digest.

The current Edge Function also accepts a six-digit value in the legacy `MARLIN_ADMIN_PIN_SHA256` secret for compatibility. Do not put the PIN in GitHub, website source, SQL tables, or chat. The function needs `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as server-side environment values (Supabase normally provides these).

If the website still says the secret is missing, confirm that the secret is saved under **Edge Functions → Secrets** in project `tzfsjpqammpcysqjqmmi`, not in SQL Editor or a different Supabase project. Secret names are case-sensitive.

## Marlin question bank status
- 1,740 active question records: 145 questions in each of 12 topics.
- Topics 11 and 12 are **Paragraph Title Selection** and **Sentence Arrangement**.
- Paragraph title questions contain three separate four-line paragraphs; students choose one title for each paragraph.
- Sentence arrangement questions show shuffled word tiles; students tap the words in the correct order. Selected words can be removed and rebuilt.
- Tests 01–05: 72 questions each (6 per topic), 60 minutes.
- Tests 06–10: 120 questions each (10 per topic), 90 minutes.
- Tests 11–15: 156 questions each (13 per topic), 125 minutes.
- Question bank counts are checked across all 12 topics before publishing.
- Listening, pronunciation and audio-to-picture prompts use browser speech synthesis for now; this is not a library of recorded native-speaker audio files.
- Picture-to-word matching currently uses emoji object illustrations and a five-item matching interaction; replace these with licensed/custom illustrations before a commercial launch.
- Tests remain unpublished until final end-to-end quality assurance and media review are complete.

## Website
https://marlinocean.github.io/marlin/

## Footer
SATPAL SWAMI
