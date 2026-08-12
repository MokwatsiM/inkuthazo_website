import { History, Users, GraduationCap, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-tight text-ochre-700 uppercase">About Inkuthazo</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Our story, reimagined.
          </h2>
          <div className="max-w-none text-stone-600 leading-relaxed space-y-4">
            <p>
              Inkuthazo began in 2023 as a burial society, built by neighbours who wanted to make sure
              no family faced life's hardest moments alone. That spirit of solidarity never left us —
              but our members told us they wanted more from their community.
            </p>
            <p>
              Today, Inkuthazo is a social club. We still have each other's backs, but we've expanded
              into the good times too: celebrations, gatherings, personal development, and building
              financial security together. It's the same trusted community, now with a lot more to offer.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="h-9 w-9 rounded-full bg-brand-100 flex items-center justify-center mb-3">
              <History className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-stone-900">Rich Heritage</h3>
            <p className="text-base text-stone-600">
              Years of trust, built on established values and a proven track record of showing up for our members.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-9 w-9 rounded-full bg-brand-100 flex items-center justify-center mb-3">
              <Users className="h-5 w-5 text-ochre-700" />
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-stone-900">Community &amp; Belonging</h3>
            <p className="text-base text-stone-600">
              A network of members who genuinely look out for one another, at events and in everyday life.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-9 w-9 rounded-full bg-brand-100 flex items-center justify-center mb-3">
              <GraduationCap className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-stone-900">Personal Development</h3>
            <p className="text-base text-stone-600">
              Workshops, mentorship, and resources that help members grow beyond the club itself.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-9 w-9 rounded-full bg-brand-100 flex items-center justify-center mb-3">
              <TrendingUp className="h-5 w-5 text-ochre-700" />
            </div>
            <h3 className="text-sm font-semibold tracking-tight text-stone-900">Financial Growth</h3>
            <p className="text-base text-stone-600">
              Group savings and investment opportunities that help members build wealth together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
