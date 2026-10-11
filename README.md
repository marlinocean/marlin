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
- 1,750 active question records across 12 topics.
- Topics 11 and 12 are **Paragraph Title Selection** and **Sentence Arrangement**.
- Paragraph title questions contain three separate four-line paragraphs; students choose one title for each paragraph.
- Sentence arrangement questions show shuffled word tiles; students tap the words in the correct order. Selected words can be removed and rebuilt.
- Tests 01–05: 80 questions each; 6 questions in each of the ten standard topics and 10 questions in each picture topic; 60 minutes.
- Tests 06–10: 120 questions each; 10 questions per topic; 120 minutes.
- Tests 11–15: 150 questions each; 13 questions in each of the ten standard topics and 10 questions in each picture topic; 150 minutes.
- Questions are delivered in topic order, not mixed across topics. Questions within each topic are selected in a shuffled order.
- Audio → Picture has four illustrated picture choices per question. Spoken prompts use browser speech synthesis, not recorded native-speaker audio files.
- Picture Word Matching shows five illustrated objects per question, with five English-word choices for each object. Picture assets are Twemoji SVG illustrations, not custom maritime photographs.
- The published tests are available through single-use student invitations.

## Website
https://marlinocean.github.io/marlin/

## Footer
OCEAN STAR MARINE ACADEMY
