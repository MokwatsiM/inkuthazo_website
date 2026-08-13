import { Banknote, Building2, CalendarClock, HeartHandshake, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fallbackTerms, useMembershipTerms } from '../lib/useMembershipTerms';

/** Studio stores an icon name; the component is resolved here. */
const iconByName: Record<string, LucideIcon> = {
  HeartHandshake,
  Users,
  Building2,
  Banknote,
};

export function Membership() {
  const terms = useMembershipTerms();

  const costs = [
    {
      label: 'Joining fee',
      amount: terms.joiningFee,
      note: terms.joiningFeeNote,
    },
    {
      label: 'Monthly contribution',
      amount: terms.monthlyContribution,
      note: terms.monthlyContributionNote,
    },
  ];

  const benefits = terms.benefits ?? fallbackTerms.benefits;

  return (
    <section id="membership" className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-tight text-ochre-700 uppercase">
              Membership
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
              What it costs, and what you get.
            </h2>
          </div>
          <p className="text-base text-stone-600 max-w-md">
            {terms.valueSummary} Everything below is explained again by a committee member before
            you commit.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-12 items-start">
          {/* Costs */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-6">
            {costs.map((cost) => (
              <div key={cost.label} className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-tight text-stone-500">
                  {cost.label}
                </p>
                <p className="text-3xl font-bold tracking-tight text-stone-900">{cost.amount}</p>
                <p className="text-sm text-stone-600">{cost.note}</p>
              </div>
            ))}

            {/*
              The waiting period decides whether joining is the right move, so it
              sits with the money and above the commitment — not in the benefits
              grid, where it read as a feature.
            */}
            <div className="rounded-xl border border-caution-200 bg-caution-50 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 shrink-0 text-caution-700" />
                <p className="text-sm font-semibold text-caution-700">
                  {terms.waitingPeriodHeading}
                </p>
              </div>
              <p className="text-sm text-stone-700">{terms.waitingPeriodBody}</p>
            </div>

            <div className="pt-2 border-t border-stone-200">
              <a
                href="#join"
                className="inline-flex w-full items-center justify-center rounded-full bg-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 text-white text-sm font-semibold tracking-tight py-3 px-5 hover:bg-stone-800 transition-colors"
              >
                Apply for membership
              </a>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = iconByName[benefit.icon ?? ''] ?? HeartHandshake;
              return (
                <div key={benefit.title} className="space-y-2">
                  <div className="h-9 w-9 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-3">
                    <Icon className="h-4 w-4 text-ochre-700" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight text-stone-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-xs text-stone-500 max-w-3xl">{terms.smallPrint}</p>
      </div>
    </section>
  );
}
