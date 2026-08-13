import { render, screen, waitFor } from '@testing-library/react'
import { vi, test, expect } from 'vitest'

const heroDoc = {
  heroImage: {
    alt: 'Members at the 2026 year-end celebration',
    asset: {
      _id: 'image-abc123def456-1600x1200-webp',
      metadata: { lqip: 'data:image/jpeg;base64,FAKE', dimensions: { width: 1600, height: 1200, aspectRatio: 1.33 } },
    },
  },
}

vi.mock('../lib/sanity', async () => {
  const actual = await vi.importActual<typeof import('../lib/sanity')>('../lib/sanity')
  return {
    ...actual,
    client: {
      fetch: vi.fn(async (q: string) => (q.includes('siteSettings') ? heroDoc : [])),
    },
  }
})

const FALLBACK_ALT = 'Inkuthazo Social Club members gathered together'

import { Hero } from '../components/Hero'

test('hero uses the Studio image and its alt text once Sanity responds', async () => {
  render(<Hero />)
  await waitFor(() => {
    const img = screen.getByAltText('Members at the 2026 year-end celebration') as HTMLImageElement
    expect(img.src).toContain('cdn.sanity.io')
    expect(img.src).toContain('8mvbistk')
  })
})

test('hero renders no image when Sanity has none, rather than a wrong one', async () => {
  const { client } = await import('../lib/sanity')
  // Cast: the test double only needs to satisfy the call sites, not the full
  // overloaded client signature.
  ;(client.fetch as unknown as ReturnType<typeof vi.fn>).mockImplementation(async () => ({}))

  render(<Hero />)
  // The heading still renders; only the photograph is absent.
  expect(screen.getByRole('heading', { name: /we rise together/i })).toBeInTheDocument()
  expect(screen.queryByRole('img', { name: FALLBACK_ALT })).not.toBeInTheDocument()
})
