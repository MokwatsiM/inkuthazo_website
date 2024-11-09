// import React from 'react';
// import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'
import { Shield } from 'lucide-react';


const logo = require("../assets/inkuthazo.jpeg");
// const bgImage = require("../assets/bg-image.png");
interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: any;
  ctaText: string;
}


export function Hero() {
    const [heroData, setHeroData] = useState<HeroData | null>(null)
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

  if (!heroData) return null
  return (
    <div id="home" className="relative bg-gray-900 pt-16">
      <div className="absolute inset-0" >
        <img
          className="w-full h-full object-cover opacity-30"
         
          
            src={ urlFor(heroData.backgroundImage).url()}
         
          alt="Community support"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
           <div className="h-20 w-20 text-yellow-500 mx-auto mb-4 " />
          {/* <Shield className="h-16 w-16 text-yellow-500 mx-auto mb-4" /> */}
          <h1 className="text-3xl font-extrabold  tracking-widest text-white lg:text-5xl">
            
            {heroData.title}
           
          </h1>
           <img src={logo} alt="Logo" className="h-10 w-10 text-yellow-500 mx-auto mb-4 " />
           <i className="mt-4 text-xl text-gray-300 max-w-3l mx-auto">{heroData.subtitle}</i>
          <p className="mt-5 text-m text-gray-300 max-w-3xl mx-auto">
           
            {heroData.description}
          </p>
         
          <div className="mt-5">
            <a
              href="#join"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-400 transition-colors"
            >
              {heroData.ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}