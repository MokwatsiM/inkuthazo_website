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
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-4 tracking-tight">
            Member Benefits
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Join our community and receive comprehensive support during difficult times
          </p>
          <div className="mt-6 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitData.map((benefit, index) => (
            <div
              key={benefit._id}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-strong p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon Container */}
              {benefit.icon && (
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <img
                        src={urlFor(benefit.icon).width(64).height(64).url()}
                        alt={benefit.title}
                        className="h-8 w-8 object-contain filter group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-secondary-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-secondary-600 font-medium">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">10+</div>
              <div className="text-secondary-600 font-medium">Years of Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-secondary-600 font-medium">Community Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}