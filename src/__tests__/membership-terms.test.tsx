import { render, screen, waitFor } from '@testing-library/react'
import { vi, test, expect, beforeEach } from 'vitest'

// Pretend the Studio changed the joining fee to R999 and the dependant limit to 5.
vi.mock('../lib/sanity', async () => ({
  // Keep projectId/dataset real; the image URL builder reads them at import.
  ...(await vi.importActual<typeof import('../lib/sanity')>('../lib/sanity')),
  client: {
    fetch: vi.fn(async (q: string) => {
      if (q.includes('membershipSettings')) {
        return {
          joiningFee: 'R999',
          joiningFeeNote: 'note',
          monthlyContribution: 'R888',
          monthlyContributionNote: 'note',
          dependantLimit: 5,
          memberPayout: 'R77 000',
          dependantPayout: 'R55 000',
          waitingPeriodMonths: 9,
          valueSummary: 'summary',
          benefits: [{ title: 'B', description: 'D', icon: 'Users' }],
          waitingPeriodHeading: 'H',
          waitingPeriodBody: 'B',
          smallPrint: 'S',
        }
      }
      return []
    }),
  },
}))

import { Hero } from '../components/Hero'
import { JoinUs } from '../components/JoinUs'
import { Pillars } from '../components/Pillars'
import { HowItWorks } from '../components/HowItWorks'
import { Membership } from '../components/Membership'

beforeEach(() => vi.clearAllMocks())

test('Hero shows Sanity monthly + payout', async () => {
  render(<Hero />)
  await waitFor(() => expect(screen.getByText('R888')).toBeInTheDocument())
  expect(screen.getByText('R77 000')).toBeInTheDocument()
})

test('JoinUs shows Sanity joining fee, dependants and waiting period', async () => {
  render(<JoinUs />)
  await waitFor(() => expect(screen.getByText(/R999 joining fee/)).toBeInTheDocument())
  expect(screen.getByText(/up to 5 dependants/)).toBeInTheDocument()
  expect(screen.getByText(/after 9 months/)).toBeInTheDocument()
})

test('Pillars shows Sanity figures', async () => {
  render(<Pillars />)
  await waitFor(() => expect(screen.getByText(/R999 to join and R888 a month/)).toBeInTheDocument())
})

test('HowItWorks shows Sanity figures', async () => {
  render(<HowItWorks />)
  await waitFor(() => expect(screen.getByText(/once-off R999 joining fee and R888 a month/)).toBeInTheDocument())
})

test('Membership shows Sanity figures', async () => {
  render(<Membership />)
  await waitFor(() => expect(screen.getByText('R999')).toBeInTheDocument())
  expect(screen.getByText('R888')).toBeInTheDocument()
})
