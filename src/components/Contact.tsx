import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+27 (0) 734715116',
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'inkuthazoburialclub@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'Ratanda, Heidelberg, 1441\nGauteng, South Africa',
      description: 'Visit us by appointment'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help you every step of the way.
          </p>
          <div className="mt-6 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-gray-50 hover:bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-500 rounded-2xl flex items-center justify-center transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-900">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-secondary-800 font-semibold whitespace-pre-line">
                      {item.content}
                    </p>
                    <p className="text-secondary-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Hours Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center shadow-strong animate-scale-in">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-primary-100">
              <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-lg">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-lg">Sunday: Closed</p>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-400">
              <p className="text-primary-200">
                For emergencies, our support team is available 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-secondary-600 mb-6">
            Ready to join our community? Get started today.
          </p>
          <a
            href="#join"
            className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}