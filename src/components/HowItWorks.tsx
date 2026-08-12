interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: 'Reach out',
    description:
      'Send us a message through the form below, or speak to a member you already know. We will get back to you with the details.',
  },
  {
    title: 'Meet the circle',
    description:
      'Come along to a gathering as our guest. Meet members, ask questions, and see how the club works before committing to anything.',
  },
  {
    title: 'Confirm the contribution',
    description:
      'Membership is a once-off R550 joining fee and R200 a month, which covers you and up to 3 registered dependants. A committee member confirms the payment arrangement with you.',
  },
  {
    title: 'Join the family',
    description:
      'Once you are welcomed in, you have the full backing of the club — at celebrations, in hard times, and everywhere in between.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          {/* Section Header */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-tight text-ochre-700 uppercase">
              Getting Started
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              How the club works.
            </h2>
            <p className="text-base text-stone-600">
              Joining Inkuthazo is straightforward, and there is no pressure at any stage.
            </p>
          </div>

          {/* Step List */}
          <ol className="lg:col-span-2 divide-y divide-stone-200 border-t border-stone-200">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-5 py-5">
                <span className="text-sm font-bold tracking-tight text-ochre-700 tabular-nums pt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold tracking-tight text-stone-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
