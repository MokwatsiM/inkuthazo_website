import React from 'react';
import {
  PartyPopper,
  Wallet,
  GraduationCap,
  HeartHandshake,
  Users,
  CalendarDays,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
}

const benefits: Benefit[] = [
  {
    icon: PartyPopper,
    title: 'Vibrant social events',
    description: 'Regular gatherings, celebrations, and outings that bring members together throughout the year.',
  },
  {
    icon: Wallet,
    title: 'Community investment programs',
    description: 'Group savings and investment opportunities that help members build financial security together.',
  },
  {
    icon: GraduationCap,
    title: 'Personal development',
    description: 'Workshops and resources designed to help members grow, learn, and reach their goals.',
  },
  {
    icon: HeartHandshake,
    title: 'A support network that shows up',
    description: 'Our roots run deep — members can still count on each other in life\'s toughest moments.',
  },
  {
    icon: CalendarDays,
    title: 'Regular meetups & outings',
    description: 'From braais to year-end functions, there\'s always something on the calendar to look forward to.',
  },
  {
    icon: Users,
    title: 'Flexible membership',
    description: 'Affordable, accommodating contribution options that fit real life.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent management',
    description: 'Member-led, accountable, and open about how the club is run.',
  },
  {
    icon: Sparkles,
    title: 'A community you can lean on',
    description: 'Year-round, in good times and hard ones — that\'s the whole point of Inkuthazo.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-tight text-accent-600 uppercase">What We Offer</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
              More ways to connect and grow.
            </h2>
          </div>
          <p className="text-base text-stone-600 max-w-md">
            Join our community and enjoy events, support, and opportunities designed for our members.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 space-y-2 hover:shadow-md hover:border-primary-200 transition-all"
              >
                {/* Icon Container */}
                <div className="mb-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold tracking-tight text-stone-900">
                    {benefit.title}
                  </p>
                  <p className="text-sm text-stone-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-600">20+</div>
              <div className="text-stone-500 font-medium">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-600">3+</div>
              <div className="text-stone-500 font-medium">Years of Community</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-600">100%</div>
              <div className="text-stone-500 font-medium">Member Driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
