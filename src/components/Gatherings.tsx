import { CalendarDays } from 'lucide-react';

interface Gathering {
  /**
   * Free-text date label, shown as written. Recurring descriptions
   * ("2nd Sunday of every month") and "TBC" are all valid.
   */
  date: string;
  time: string;
  title: string;
  audience: string;
}

/** Edit these directly as the calendar changes. */
const gatherings: Gathering[] = [
  {
    date: '2nd Sunday of every month',
    time: '13:00',
    title: 'Monthly general meeting',
    audience: 'All members',
  },
  {
    date: 'TBC',
    time: 'TBC',
    title: 'Inkuthazo Social Club Annual Year end celebration',
    audience: 'Members and family',
  },
  
];

export function Gatherings() {
  const upcoming = gatherings;

  return (
    <section id="gatherings" className="border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-tight text-accent-600 uppercase">
              What's Coming Up
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
              Upcoming gatherings.
            </h2>
          </div>
          <p className="text-base text-stone-600 max-w-md">
            Members are welcome at every gathering. Dates are confirmed at the monthly meeting.
          </p>
        </div>

        {upcoming.length > 0 ? (
          <ul className="divide-y divide-stone-200 border-y border-stone-200">
            {upcoming.map((gathering) => (
              <li
                key={`${gathering.date}-${gathering.title}`}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5"
              >
                {/* Date block */}
                <div className="sm:w-40 shrink-0">
                  <p className="text-sm font-semibold tracking-tight text-stone-900">
                    {gathering.date}
                  </p>
                  <p className="text-xs text-stone-500">{gathering.time}</p>
                </div>

                {/* Detail */}
                <div className="flex-1 space-y-1">
                  <p className="text-base font-semibold tracking-tight text-stone-900">
                    {gathering.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {gathering.audience}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-10 text-center">
            <p className="text-sm text-stone-600">
              No gatherings are scheduled at the moment. Check back soon, or get in touch to hear
              what's next.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
