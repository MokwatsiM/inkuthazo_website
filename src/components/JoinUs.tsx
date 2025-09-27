import React from 'react';
import { ExternalLink, CheckCircle, Users, Shield, Heart } from 'lucide-react';

export function JoinUs() {
  const steps = [
    {
      number: '01',
      title: 'Complete Application',
      description: 'Fill out our simple membership application form with your details'
    },
    {
      number: '02',
      title: 'Review Process',
      description: 'Our team reviews your application and contacts you within 2 business days'
    },
    {
      number: '03',
      title: 'Welcome Meeting',
      description: 'Attend a brief orientation meeting to learn about member benefits'
    },
    {
      number: '04',
      title: 'Start Your Journey',
      description: 'Begin enjoying the security and support of our community'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Coverage',
      description: 'Comprehensive financial protection for your family'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a caring network of like-minded individuals'
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Rest assured knowing your loved ones are protected'
    }
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-secondary-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-4 tracking-tight">
            Join Inkuthazo Burial Club
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Take the first step towards securing peace of mind for you and your family.
            Join a community that truly cares.
          </p>
          <div className="mt-6 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-secondary-900 text-center mb-12">
            Simple 4-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Step Number */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-medium">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-secondary-900">
                    {step.title}
                  </h4>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-strong p-8 md:p-12 animate-scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Features */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    Why Choose Inkuthazo?
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    Join hundreds of families who trust us to provide dignified support
                    during life's most difficult moments.
                  </p>
                </div>

                <div className="space-y-6">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={feature.title}
                        className="flex items-start space-x-4 animate-slide-up"
                        style={{animationDelay: `${0.5 + index * 0.1}s`}}
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-secondary-900 mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-secondary-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Application Form */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-2xl text-white">
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
                    <p className="text-primary-100 leading-relaxed">
                      Complete our membership application form to begin your journey with
                      Inkuthazo Burial Club. Our team will review your application and
                      contact you with the next steps.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-primary-100">
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm">Free consultation included</span>
                    </div>
                    <div className="flex items-center space-x-3 text-primary-100">
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm">No hidden fees or charges</span>
                    </div>
                    <div className="flex items-center space-x-3 text-primary-100">
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm">Flexible payment options</span>
                    </div>
                  </div>

                  <a
                    href="https://forms.gle/13NdfK6b7Mofcjp59"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-medium hover:shadow-strong"
                  >
                    Complete Application Form
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>

                  <p className="text-primary-200 text-xs">
                    Secure application powered by Google Forms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Support */}
        <div className="text-center mt-16">
          <p className="text-secondary-600 mb-4">
            Have questions about membership? We're here to help.
          </p>
          <a
            href="#contact"
            className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
}