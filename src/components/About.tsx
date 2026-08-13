import {
  GraduationCap,
  HeartHandshake,
  History,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ABOUT_QUERY } from '../lib/queries';
import { useSanityData } from '../lib/useSanity';

/** Studio stores an icon name; the component is resolved here. */
const iconByName: Record<string, LucideIcon> = {
  History,
  Users,
  GraduationCap,
  TrendingUp,
  HeartHandshake,
  ShieldCheck,
};

interface Highlight {
  title: string;
  description: string;
  icon?: string;
}

interface AboutContent {
  eyebrow: string;
  heading: string;
  story: string[];
  highlights: Highlight[];
}

/** Shipped fallback: used until Sanity responds, and if it never does. */
const fallbackAbout: AboutContent = {
  eyebrow: 'About Inkuthazo',
  heading: 'Our story, reimagined.',
  story: [
    "Inkuthazo began in 2023 as a burial society, built by neighbours who wanted to make sure no family faced life's hardest moments alone. That spirit of solidarity never left us — but our members told us they wanted more from their community.",
    "Today, Inkuthazo is a social club. We still have each other's backs, but we've expanded into the good times too: celebrations, gatherings, personal development, and building financial security together. It's the same trusted community, now with a lot more to offer.",
  ],
  highlights: [
    {
      icon: 'History',
      title: 'Rich Heritage',
      description:
        'Years of trust, built on established values and a proven track record of showing up for our members.',
    },
    {
      icon: 'Users',
      title: 'Community & Belonging',
      description:
        'A network of members who genuinely look out for one another, at events and in everyday life.',
    },
    {
      icon: 'GraduationCap',
      title: 'Personal Development',
      description:
        'Workshops, mentorship, and resources that help members grow beyond the club itself.',
    },
    {
      icon: 'TrendingUp',
      title: 'Financial Growth',
      description:
        'Group savings and investment opportunities that help members build wealth together.',
    },
  ],
};

export function About() {
  const about = useSanityData<AboutContent>(ABOUT_QUERY, fallbackAbout);
  const story = about.story ?? fallbackAbout.story;
  const highlights = about.highlights ?? fallbackAbout.highlights;

  return (
    <section id="about" className="border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-tight text-ochre-700 uppercase">
            {about.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            {about.heading}
          </h2>
          <div className="max-w-none text-stone-600 leading-relaxed space-y-4">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = iconByName[highlight.icon ?? ''] ?? History;
            // Alternate the icon colour so the grid keeps its rhythm no matter
            // how many highlights an editor adds.
            const iconColor = index % 2 === 0 ? 'text-brand-700' : 'text-ochre-700';

            return (
              <div key={highlight.title} className="space-y-2">
                <div className="h-9 w-9 rounded-full bg-brand-100 flex items-center justify-center mb-3">
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-stone-900">
                  {highlight.title}
                </h3>
                <p className="text-base text-stone-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
