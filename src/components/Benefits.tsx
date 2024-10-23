import React from 'react';
import { CheckCircle } from 'lucide-react';

export function Benefits() {
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

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Member Benefits
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our community and receive comprehensive support during difficult times
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm"
            >
              <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}