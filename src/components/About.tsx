import  { useEffect, useState } from 'react';
import { History, Users, Heart } from 'lucide-react';
import { PortableText } from '@portabletext/react'
import { client, } from '../lib/sanity'


interface MissionData {
  title: string;
  content: any[];
}

export function About() {
  const [missionData, setMissionData] = useState<MissionData | null>(null)

  useEffect(() => {
    const query = `*[_type == "mission"][0] {
      title,
      content
    }`

    client.fetch(query).then((data) => {
      setMissionData(data)
    })
  }, [])

  if (!missionData) return null
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-4 tracking-tight animate-slide-up">
            {missionData.title}
          </h2>
          <div className="mt-6 w-24 h-1 bg-primary-500 mx-auto rounded-full animate-scale-in"></div>
        </div>

        {/* Mission Content */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12 animate-fade-in">
            <div className="prose prose-lg max-w-none text-secondary-600 leading-relaxed">
              <PortableText value={missionData.content} />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-500 rounded-2xl flex items-center justify-center transition-all duration-300">
                <History className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Rich Heritage</h3>
            <p className="text-secondary-600 leading-relaxed">Building on generations of community support traditions</p>
          </div>

          <div className="group text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-500 rounded-2xl flex items-center justify-center transition-all duration-300">
                <Users className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Community Focused</h3>
            <p className="text-secondary-600 leading-relaxed">Supporting families when they need it most</p>
          </div>

          <div className="group text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-500 rounded-2xl flex items-center justify-center transition-all duration-300">
                <Heart className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Compassionate Care</h3>
            <p className="text-secondary-600 leading-relaxed">Providing both material and emotional support</p>
          </div>
        </div>
      </div>
    </section>
  );
}