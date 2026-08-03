/**
 * Placeholder per la futura integrazione Supabase.
 *
 * Tabelle previste:
 * - profiles: user_id, name, sport, level, goal, frequency, membership (free | premium | pro)
 * - videos: contenuti, metadati, access_level e tassonomie
 * - favorites: user_id, video_id, created_at
 * - courses / course_lessons: percorsi, ordine e accesso delle lezioni
 * - partners / partner_locations: anagrafica affiliati, canali e sedi
 * - benefits: partner_id, codice, validità e requisiti membership
 *
 * In produzione la validazione definitiva di membership e accesso ai contenuti
 * dovrà vivere sul server con RLS attiva; LocalStorage è solo per questa demo.
 */
export const supabaseReady = false;
