import { FAQS_QUERY } from '../lib/queries';
import { useSanityData } from '../lib/useSanity';

interface Faq {
  _id?: string;
  question: string;
  answer: string;
}

/** Shipped fallback: used until Sanity responds, and if it never does. */
const fallbackQuestions: Faq[] = [
  {
    question: 'Is Inkuthazo only for funeral support?',
    answer:
      'No. Our roots are in burial-society support, but Inkuthazo is now a wider social club focused on belonging, gatherings, personal development, financial resilience, and standing together when life gets difficult.',
  },
  {
    question: 'How do I become a member?',
    answer:
      'Complete the application form or contact us on WhatsApp. A committee member will explain the current membership options, contribution expectations, and next steps before you commit.',
  },
  {
    question: 'What does membership cost?',
    answer:
      'There is a once-off joining fee of R550, and a monthly contribution of R200. That monthly contribution covers you and up to 3 registered dependants.',
  },
  {
    question: 'What funeral benefit does membership provide?',
    answer:
      'A R7 000 benefit is paid towards the member, and R5 000 towards each registered dependant, to help the family with funeral costs.',
  },
  {
    question: 'Is there a waiting period?',
    answer:
      'Yes. The funeral benefit becomes available 6 months after you join. Your monthly contribution is payable from the first month, so it is worth joining well before you expect to need the benefit.',
  },
  {
    question: 'What else does the club offer beyond the funeral benefit?',
    answer:
      'The club holds movable and immovable assets and investments in the name of the organisation, owned collectively by its members. Membership also brings regular gatherings, personal development opportunities, and a support network year-round.',
  },
  {
    question: 'Where is Inkuthazo based?',
    answer:
      'Our office is in Ratanda, Heidelberg, Gauteng. Gathering locations can vary, so we share confirmed details with members ahead of each event.',
  },
  {
    question: 'Can I ask questions before joining?',
    answer:
      'Absolutely. Joining starts with a conversation. Ask about the club, attend an upcoming gathering where possible, and decide when you feel comfortable with what membership involves.',
  },
];

/** FAQPage structured data, generated from the same list that is rendered. */
function buildFaqSchema(questions: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function FrequentlyAsked() {
  const questions = useSanityData<Faq[]>(FAQS_QUERY, fallbackQuestions);

  return (
    <section id="faq" className="border-b border-stone-200 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(questions)) }}
      />
      <div className="max-w-4xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-tight text-ochre-700 uppercase">Before you join</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
            Questions, answered plainly.
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto mt-3">
            Membership should feel clear from the start. Here are the questions we hear most often.
          </p>
        </div>

        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {questions.map((item) => (
            <details key={item._id ?? item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-sm font-semibold text-stone-900">
                {item.question}
                <span className="text-xl font-normal text-ochre-700 transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-3 pr-10 text-sm leading-relaxed text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
