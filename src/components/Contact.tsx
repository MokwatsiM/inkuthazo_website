import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

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
    <section id="contact" className="border-b border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-tight text-accent-600 uppercase">Contact Us</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
            We're here to help.
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto mt-3">
            Have questions about membership or upcoming events? Reach out and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 text-center space-y-3"
              >
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-accent-600" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold tracking-tight text-stone-900">
                  {item.title}
                </h3>

                <div className="space-y-1">
                  <p className="text-sm text-stone-700 font-medium whitespace-pre-line">
                    {item.content}
                  </p>
                  <p className="text-xs text-stone-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="https://wa.me/27734715116?text=Hi%20Inkuthazo%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20club."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp the club
          </a>
          <a
            href="tel:+27734715116"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call +27 73 471 5116
          </a>
        </div>

        {/* Business Hours Card */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-accent-50 p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Clock className="h-5 w-5 text-accent-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Business Hours</h3>
            <div className="space-y-2 text-stone-600">
              <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-sm">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-200/60">
              <p className="text-sm text-stone-500">
                For urgent matters, our support team is available 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-sm text-stone-600 mb-4">
            Ready to join our community? Get started today.
          </p>
          <a
            href="#join"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold tracking-tight py-2.5 px-6 shadow-sm hover:shadow-md hover:from-primary-400 hover:to-accent-400 transition-all"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}
