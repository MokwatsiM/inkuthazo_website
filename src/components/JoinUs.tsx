import { ExternalLink, CheckCircle, MessageCircle } from 'lucide-react';

export function JoinUs() {
  return (
    <section id="join" className="bg-white">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-14 items-start">
        {/* Left Side - Information */}
        <div className="space-y-5">
          <p className="text-xs font-semibold tracking-tight text-accent-600 uppercase">Join Inkuthazo</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Ready to be part of our community?
          </h2>
          <p className="text-base text-stone-600">
            Take the first step towards being part of a community that celebrates together, grows
            together, and supports each other through everything in between.
          </p>

          {/* What to Expect Box */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-3">
            <p className="text-sm font-semibold tracking-tight text-stone-900">What to expect after you apply</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0"></span>
                A call or message from a committee member to answer your questions
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0"></span>
                Information about membership, events, and contribution options
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0"></span>
                An invitation to our next meetup or orientation session
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0"></span>
                Guidance on next steps to complete your membership
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Application CTA */}
        <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-primary-50 to-accent-50 p-4 sm:p-5 space-y-4">
          <h3 className="text-sm font-semibold tracking-tight text-stone-900">Application form</h3>

          <div className="space-y-4 py-4">
            <p className="text-sm text-stone-600">
              Complete our membership application form to begin your journey with
              Inkuthazo Social Club. Our team will review and contact you with the next steps.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-stone-700">
                <CheckCircle className="h-5 w-5 text-accent-600 flex-shrink-0" />
                <span className="text-sm">R550 joining fee, once-off</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-700">
                <CheckCircle className="h-5 w-5 text-accent-600 flex-shrink-0" />
                <span className="text-sm">R200 per month, no hidden charges</span>
              </div>
              <div className="flex items-center space-x-3 text-stone-700">
                <CheckCircle className="h-5 w-5 text-accent-600 flex-shrink-0" />
                <span className="text-sm">Covers you and up to 3 dependants</span>
              </div>
            </div>

            <a
              href="#membership"
              className="inline-block text-xs font-semibold text-accent-700 hover:text-accent-800 underline underline-offset-2"
            >
              See full membership details
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="https://forms.gle/13NdfK6b7Mofcjp59"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold tracking-tight py-2.5 px-4 shadow-sm hover:shadow-md hover:from-primary-400 hover:to-accent-400 transition-all"
            >
              Complete application
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://wa.me/27734715116?text=Hi%20Inkuthazo%2C%20I%27d%20like%20to%20learn%20more%20about%20joining%20the%20social%20club."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-accent-200 bg-white text-accent-700 text-sm font-semibold tracking-tight py-2.5 px-4 hover:bg-accent-50 transition-colors"
            >
              Chat on WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </div>

          <p className="text-[0.7rem] text-stone-500 text-center">
            Your information will only be used to contact you about Inkuthazo Social Club.
          </p>
        </div>
      </div>
    </section>
  );
}
