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
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {missionData.title}
            {/* Our Mission */}
          </h2>
        </div>
        
        <div className="mt-12 prose prose-lg max-w-4xl mx-auto text-gray-500">
          <PortableText value={missionData.content} />
          {/* <p>
            Until recently burial societies in South Africa were associated with the elderly, but these
            days many young people also join burial societies. One cannot deny the fact that burial
            societies are able to help in situations where money is needed expeditiously because
            they are flexible and accommodating.
          </p>
          
          <p>
            We are raised in communities which value respectable and dignified funerals because of
            the cultural importance thereon, which is an expensive all-day event.
          </p>

          <p>
            Inkuthazo does not exist in a vacuum, but draws the inspiration of its existence from
            many other burial societies which have existed in African communities since time
            immemorial. We remain grateful and heavily indebted to our predecessors for paving
            the way for organizations such as Inkuthazo.
          </p>

          <p>
            Inkuthazo is intended to be an informal and independent insurance scheme, designed to
            assist our esteemed members to absorb some of the costs associated with funerals.
            Inkuthazo is fully autonomous and with a specific goal of providing social relief and
            support (material and non-material) to a member or member's family in bereavement.
          </p> */}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <History className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Rich Heritage</h3>
            <p className="mt-2 text-gray-500">Building on generations of community support traditions</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Community Focused</h3>
            <p className="mt-2 text-gray-500">Supporting families when they need it most</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Compassionate Care</h3>
            <p className="mt-2 text-gray-500">Providing both material and emotional support</p>
          </div>
        </div>
      </div>
    </section>
  );
}