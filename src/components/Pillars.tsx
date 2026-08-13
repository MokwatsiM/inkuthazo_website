import { useMembershipTerms } from '../lib/useMembershipTerms';

interface Pillar {
  title: string;
  description: string;
}

const buildPillars = (joiningFee: string, monthly: string, dependants: number): Pillar[] => [
  {
    title: 'Vibrant social events',
    description:
      'Regular gatherings, celebrations, and outings that bring members together throughout the year.',
  },
  {
    title: 'Community investment',
    description:
      'Group savings and investment opportunities that help members build financial security together.',
  },
  {
    title: 'Personal development',
    description:
      'Workshops and resources designed to help members grow, learn, and reach their goals.',
  },
  {
    title: 'A support network that shows up',
    description:
      "Our roots run deep — members can still count on each other in life's toughest moments.",
  },
  {
    title: 'One clear contribution',
    description: `${joiningFee} to join and ${monthly} a month — the same for every member, covering you and up to ${dependants} dependants.`,
  },
  {
    title: 'Transparent management',
    description: 'Member-led, accountable, and open about how the club is run.',
  },
];

export function Pillars() {
  const terms = useMembershipTerms();
  const pillars = buildPillars(
    terms.joiningFee,
    terms.monthlyContribution,
    terms.dependantLimit,
  );

  return (
    <section id="pillars" className="border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-tight text-ochre-700 uppercase">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
              The six pillars.
            </h2>
          </div>
          <p className="text-base text-stone-600 max-w-md">
            Everything we do as a club rests on these commitments to one another.
          </p>
        </div>

        {/* Numbered Pillar Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="space-y-3">
              <div className="flex items-baseline gap-3 border-t border-stone-200 pt-4">
                <span className="text-sm font-bold tracking-tight text-ochre-700 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold tracking-tight text-stone-900">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
