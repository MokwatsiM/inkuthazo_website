import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'
import { Shield, ArrowRight } from 'lucide-react';

const logo = require("../assets/inkuthazo.jpeg");

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: any;
  ctaText: string;
}

export function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const query = `*[_type == "hero"][0] {
      title,
      subtitle,
      description,
      backgroundImage,
      ctaText
    }`

    client.fetch(query).then((data) => {
      setHeroData(data)
    })
  }, [])

  if (!heroData) {
    return (
      <div id="home" className="relative bg-secondary-900 pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div id="home" className="relative bg-secondary-900 pt-16 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-40' : 'opacity-0'
          }`}
          src={urlFor(heroData.backgroundImage).url()}
          alt="Community support"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-secondary-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={logo}
                alt="Inkuthazo Logo"
                className="h-20 w-20 rounded-full border-4 border-primary-500 shadow-strong animate-scale-in"
              />
              <div className="absolute -inset-2 bg-primary-500/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight animate-slide-up">
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-200 font-medium max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
              {heroData.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <a
              href="#join"
              className="group inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
            >
              {heroData.ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary-500" />
                <span className="text-sm font-medium">Trusted by Community</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Established Heritage</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Dignified Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}