import { HeartHandshake, ShieldCheck, Sprout } from 'lucide-react';

const promises = [
  {
    icon: HeartHandshake,
    title: 'Belong from day one',
    description:
      'Meet people who care about showing up, sharing the load, and making room for one another.',
  },
  {
    icon: Sprout,
    title: 'Grow with your circle',
    description:
      'Take part in gatherings, learning opportunities, and conversations that help members move forward.',
  },
  {
    icon: ShieldCheck,
    title: 'Know where you stand',
    description:
      'Get clear guidance on membership, contributions, and the support available before you commit.',
  },
];

export function MemberExperience() {
  return (
    <section id="member-experience" className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-tight text-ochre-700 uppercase">
              The member experience
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              A club for the whole year.
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Inkuthazo began with mutual support in difficult moments. That same spirit now shapes
              the ordinary days too — through connection, celebration, growth, and practical care.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {promises.map((promise) => {
              const Icon = promise.icon;
              return (
                <div key={promise.title} className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-100 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-ochre-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold tracking-tight text-stone-900">{promise.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{promise.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
