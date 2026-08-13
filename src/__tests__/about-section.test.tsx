import { render, screen, waitFor } from '@testing-library/react'
import { vi, test, expect } from 'vitest'

const aboutDoc = {
  eyebrow: 'Who we are',
  heading: 'A different heading from Sanity.',
  story: ['First paragraph from the Studio.', 'Second paragraph from the Studio.'],
  highlights: [
    { title: 'Studio Highlight One', description: 'Desc one', icon: 'ShieldCheck' },
    { title: 'Studio Highlight Two', description: 'Desc two', icon: 'HeartHandshake' },
  ],
}

vi.mock('../lib/sanity', async () => ({
  ...(await vi.importActual<typeof import('../lib/sanity')>('../lib/sanity')),
  client: {
    fetch: vi.fn(async (q: string) => (q.includes('aboutSection') ? aboutDoc : [])),
  },
}))

import { About } from '../components/About'

test('About renders heading, story and highlights from Sanity', async () => {
  render(<About />)
  await waitFor(() =>
    expect(screen.getByText('A different heading from Sanity.')).toBeInTheDocument(),
  )
  expect(screen.getByText('Who we are')).toBeInTheDocument()
  expect(screen.getByText('First paragraph from the Studio.')).toBeInTheDocument()
  expect(screen.getByText('Second paragraph from the Studio.')).toBeInTheDocument()
  expect(screen.getByText('Studio Highlight One')).toBeInTheDocument()
  expect(screen.getByText('Studio Highlight Two')).toBeInTheDocument()
})

test('About renders a variable number of highlights', async () => {
  render(<About />)
  await waitFor(() => expect(screen.getByText('Studio Highlight One')).toBeInTheDocument())
  // Fallback ships four; Sanity supplied two, so the old cards must be gone.
  expect(screen.queryByText('Rich Heritage')).not.toBeInTheDocument()
})
