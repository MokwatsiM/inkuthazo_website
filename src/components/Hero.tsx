import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import groupPhoto from '../assets/update_group_photo.webp';

const values = [
  'Unity',
  'Ubuntu',
  'Dignity',
  'Accountability',
  'Fellowship',
  'Equality',
  'Respect',
  'Empowerment',
];

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div id="home" className="relative bg-stone-50 pt-16 border-b border-stone-200">
      <div className="max-w-6xl mx-auto py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white text-stone-600 text-xs font-medium tracking-tight px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent-600" />
              A social club built on community
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.1]">
              We rise together,{' '}
              <span className="text-accent-600">or not at all.</span>
            </h1>

            {/* Covenant statement */}
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed border-l-2 border-accent-500 pl-4">
              We are neighbours who chose one another — bound by intention, not by
              proximity or circumstance.
            </p>

            {/* Description */}
            <p className="text-base text-stone-600 max-w-xl">
              From our roots supporting families through life's hardest moments, we've grown into a
              vibrant social club — a united, financially resilient and socially responsible society.
            </p>

            {/* Values */}
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-tight text-stone-500 uppercase">Our values</p>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 text-white text-sm font-semibold tracking-tight py-3 px-6 hover:bg-stone-800 transition-colors"
              >
                Become a Member
              </a>
              <a
                href="#pillars"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white text-stone-700 text-sm font-medium tracking-tight py-3 px-6 hover:border-stone-400 hover:bg-stone-50 transition-colors"
              >
                See what we offer
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 max-w-md pt-8 border-t border-stone-200">
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">2023</p>
                <p className="text-xs text-stone-500">Founded</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">20+</p>
                <p className="text-xs text-stone-500">Active members</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">3+</p>
                <p className="text-xs text-stone-500">Years of community</p>
              </div>
            </div>
          </div>

          {/* Right: photograph */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
              <img
                className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src={groupPhoto}
                alt="Inkuthazo Social Club members gathered together"
                width={1200}
                height={900}
                loading="eager"
                fetchPriority="high"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="absolute left-4 right-4 bottom-4 rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-6 sm:right-6 sm:bottom-6">
              <p className="text-xs font-semibold uppercase tracking-tight text-accent-600">Your circle, beyond the moment</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-stone-600">
                <div>
                  <p className="font-semibold text-stone-900">Connect</p>
                  <p className="mt-1">Regular gatherings</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Grow</p>
                  <p className="mt-1">Shared opportunities</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Support</p>
                  <p className="mt-1">When it matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
