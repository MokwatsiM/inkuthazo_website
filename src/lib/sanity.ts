import { createClient } from '@sanity/client'

/**
 * Read-only client for published content.
 *
 * The dataset is public, so no token is involved and nothing secret reaches the
 * browser bundle. Only publishable values are read from import.meta.env, which
 * is the client-safe mechanism under Vite — process.env does not exist here.
 */
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID ?? '8mvbistk'
export const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-08-13',
  useCdn: true,
})
