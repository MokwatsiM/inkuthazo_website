import { MEMBERSHIP_QUERY } from './queries'
import { useSanityData } from './useSanity'

export interface MembershipBenefit {
  title: string
  description: string
  icon?: string
}

export interface MembershipTerms {
  joiningFee: string
  joiningFeeNote: string
  monthlyContribution: string
  monthlyContributionNote: string
  dependantLimit: number
  memberPayout: string
  dependantPayout: string
  waitingPeriodMonths: number
  valueSummary: string
  benefits: MembershipBenefit[]
  waitingPeriodHeading: string
  waitingPeriodBody: string
  smallPrint: string
}

/**
 * Shipped fallback. Used until Sanity responds, and if it never does, so a
 * section that quotes fees never renders blank.
 */
export const fallbackTerms: MembershipTerms = {
  joiningFee: 'R550',
  joiningFeeNote: 'Once-off, payable when your application is accepted.',
  monthlyContribution: 'R200',
  monthlyContributionNote: 'Covers you and up to 3 registered dependants.',
  dependantLimit: 3,
  memberPayout: 'R7 000',
  dependantPayout: 'R5 000',
  waitingPeriodMonths: 6,
  valueSummary:
    'R2 400 a year, towards up to R22 000 of funeral benefit for a household of four.',
  benefits: [
    {
      icon: 'HeartHandshake',
      title: 'Funeral benefit',
      description:
        'A R7 000 benefit is paid towards the member, and R5 000 towards each registered dependant, to help the family with funeral costs.',
    },
    {
      icon: 'Users',
      title: 'Cover for your household',
      description:
        'Register up to 3 dependants under your membership at no additional monthly contribution.',
    },
    {
      icon: 'Building2',
      title: 'A share in what we build',
      description:
        'The club holds movable and immovable assets and investments in the name of the organisation, owned collectively by its members.',
    },
    {
      icon: 'Banknote',
      title: 'More than a payout',
      description:
        'Membership also brings gatherings, personal development, and a community that shows up in good times and hard ones.',
    },
  ],
  waitingPeriodHeading: 'Your funeral benefit starts after 6 months',
  waitingPeriodBody:
    'This protects the members already contributing, so no one joins only when a benefit is needed. It also means Inkuthazo cannot help with a funeral in your first six months — please join before you need us.',
  smallPrint:
    'Benefit amounts and contributions are set by the club and may be reviewed by members at a general meeting. Speak to a committee member for the current rules and what is required to register a dependant.',
}

/**
 * Single source of truth for membership figures.
 *
 * Every component that quotes a fee, a payout, the dependant limit or the
 * waiting period reads from here, so changing a value in the Studio updates
 * the whole site rather than one section.
 */
export function useMembershipTerms(): MembershipTerms {
  return useSanityData<MembershipTerms>(MEMBERSHIP_QUERY, fallbackTerms)
}
