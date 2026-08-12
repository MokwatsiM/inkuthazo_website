/**
 * POPIA-oriented privacy notice.
 *
 * The factual claims below are drawn from what the site actually does today:
 * an external Google Form collects applications, Vercel Analytics and Speed
 * Insights run on every page, and the club is contactable by phone, WhatsApp
 * and email. Anything the club must decide for itself — a named information
 * officer, a retention period, whether ID numbers are collected — is marked
 * with a TODO rather than invented.
 */
const sections = [
  {
    heading: 'Who we are',
    body: [
      'Inkuthazo Social Club is a member-led society based in Ratanda, Heidelberg, Gauteng, South Africa. This notice explains what personal information we collect through this website, why we collect it, and what you can ask us to do with it.',
      // TODO(club): POPIA requires a named Information Officer. Add their name
      // and a contact address once the committee has appointed one.
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'When you apply for membership you complete a form hosted on Google Forms. That form asks for the details we need to process an application and to register your dependants. We only ask for what the club needs to administer your membership and any future benefit.',
      'If you contact us by phone, WhatsApp or email, we keep the contact details and the content of that conversation so that a committee member can respond and follow up.',
      'This website also records anonymous visit statistics through Vercel Analytics and Vercel Speed Insights. These measure page views and loading performance. They do not identify you personally and we do not use advertising cookies.',
    ],
  },
  {
    heading: 'Why we collect it',
    body: [
      'To assess and administer membership applications, to keep an accurate member and dependant register, to contact you about meetings, gatherings and club business, and to pay a benefit when one becomes due.',
      'We do not sell your information, and we do not share it with anyone outside the club except where the law requires it.',
    ],
  },
  {
    heading: 'Where it is stored',
    body: [
      'Application responses are stored in Google Forms and Google Sheets, under accounts controlled by the club committee. Google processes this data on servers outside South Africa. Website analytics are processed by Vercel.',
      // TODO(club): confirm how long applications and member records are kept
      // after a membership ends, and state that period here. POPIA expects a
      // defined retention period rather than "indefinitely".
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'Under the Protection of Personal Information Act you may ask us what information we hold about you, ask us to correct anything that is wrong, ask us to delete information we no longer need, and object to how we use it.',
      'To make any of these requests, contact the club on the details below. We will respond as soon as we reasonably can.',
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <a
          href="/"
          className="text-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-900"
        >
          &larr; Back to Inkuthazo Social Club
        </a>

        <h1 className="mt-8 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Privacy notice
        </h1>
        <p className="mt-3 text-base text-stone-600">
          How Inkuthazo Social Club handles your personal information.
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight text-stone-900">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-stone-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="space-y-3 rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-lg font-semibold tracking-tight text-stone-900">Contact us</h2>
            <p className="text-base text-stone-600">
              Inkuthazo Social Club, Ratanda, Heidelberg, 1441, Gauteng, South Africa
            </p>
            <p className="text-base text-stone-600">
              <a
                href="mailto:inkuthazoburialclub@gmail.com"
                className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                inkuthazoburialclub@gmail.com
              </a>
              {' · '}
              <a
                href="tel:+27734715116"
                className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                +27 73 471 5116
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
