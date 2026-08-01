const questions = [
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

export function FrequentlyAsked() {
  return (
    <section id="faq" className="border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-tight text-accent-600 uppercase">Before you join</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
            Questions, answered plainly.
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto mt-3">
            Membership should feel clear from the start. Here are the questions we hear most often.
          </p>
        </div>

        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {questions.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-sm font-semibold text-stone-900">
                {item.question}
                <span className="text-xl font-normal text-accent-600 transition-transform group-open:rotate-45" aria-hidden="true">
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
