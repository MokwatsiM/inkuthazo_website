import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';
import { LoadingState } from './LoadingState';

// import {} from '../../inkuthazo-burial/schemaTypes/benefits'



interface BenefitData {
  _id: string;
  title: string;
  description: string;
  icon?: {
    asset: {
      _ref: string;
    };
  };
  svgImage?: {
    asset: {
      _ref: string;
    };
  };
  order: number;
}
export function Benefits() {
  const [benefitData, setBenefits] = useState<BenefitData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch benefits from Sanity
    const fetchBenefits = async () => {
      try {
        const query = `
          *[_type == "benefit"] | order(order asc) {
            _id,
            title,
            description,
            icon,
            svgIcon,
            order
          }
        `;

        const data = await client.fetch<BenefitData[]>(query);
        setBenefits(data);
      } catch (err) {
        setError('Failed to load benefits');
        console.error('Error fetching benefits:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBenefits();
  }, []);
  const benefits = [
    'Immediate financial assistance for funeral expenses',
    'Support from an established community network',
    'Flexible and accommodating payment terms',
    'Dignified funeral arrangements',
    'Additional support services for the bereaved family',
    'Transparent and accountable management',
    'Regular community meetings and updates',
    'Emergency assistance when needed',
  ];

  if (isLoading) {
    return <div className="text-center py-8">{LoadingState()}</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-8">{error}</div>;
  }


  return (
    // <section id="benefits" className="py-16 bg-gray-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
    //         Member Benefits
    //       </h2>
    //       <p className="mt-4 text-lg text-gray-600">
    //         Join our community and receive comprehensive support during difficult times
    //       </p>
    //     </div>

    //     <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    //       {benefits.map((benefit, index) => (
    //         <div
    //           key={index}
    //           className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm"
    //         >
    //           <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
    //           <span className="text-gray-700">{benefit}</span>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Member Benefits</h2>
        <p className="mt-4 text-lg text-gray-600">
         Join our community and receive comprehensive support during difficult times
          </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitData.map((benefit) => (
            <div
              key={benefit._id}
              className="bg-white items-start space-x-3 rounded-lg shadow-ls p-6 transition-transform hover:scale-105"
            >
              {benefit.icon && (
                <div className="mb-4 flex justify-center">
                  <img
                    src={urlFor(benefit.icon).width(64).height(64)
                      .url()}
                    alt={benefit.title}
                    className="h-6 w-6 text-yellow-500 flex-shrink-0 object-contain"
                   
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3 text-center">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
          </div>
          </div>
      </div>
    </section>
  );
}