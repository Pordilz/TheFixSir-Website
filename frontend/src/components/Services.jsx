import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const Services = () => {
  const massageServices = [
    { duration: '30 Minutes', description: 'Targeted Muscle Group', price: 'R250' },
    { duration: '45 Minutes', description: 'Up to 2 Muscle Groups', price: 'R350' },
    { duration: '1 Hour', description: 'Up to 3 Muscle Groups', price: 'R450' },
    {
      duration: 'Full Body',
      description: 'Neck, Shoulders, Arms, Chest, Back, Glute Release, Legs, Feet (2.5+ hrs)',
      price: 'R1000',
      special: 'R900',
      badge: 'Special',
    },
  ];

  const cuppingServices = [
    { name: 'Dry Cupping', description: 'Up to 10 cups', price: 'R200' },
    { name: 'Wet/Hijama Cupping', description: 'Up to 8 cups', price: 'R350' },
    { name: 'Specific Hijama Sunnah Points', description: 'Up to 8 cups', price: 'R400' },
    { name: 'Each Additional Cup', description: 'Per cup', price: 'R50' },
  ];

  const tapingServices = [
    { name: 'Kinesiology Taping', description: 'Injury site/tape quantity dependent', price: 'R100-R250' },
    { name: 'Rigid Taping', description: 'Injury site/tape quantity dependent', price: 'R100-R250' },
  ];

  const comboDeal = {
    name: '1 Hour Sports Massage + Sunnah/Hijama Cupping',
    description: 'Up to 8 cups',
    price: 'R750',
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mobile therapy services at competitive rates
          </p>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Sports Massage */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-black">Sports Massage / Deep Tissue Massage</h3>
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxzcG9ydHMlMjBtYXNzYWdlfGVufDB8fHx8MTc3MDc0NzMwMHww&ixlib=rb-4.1.0&q=85"
                alt="Sports Massage"
                className="hidden md:block w-16 h-16 rounded-lg object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {massageServices.map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-[#D32F2F] hover:shadow-md transition-all duration-200 relative"
                >
                  {service.badge && (
                    <span className="absolute -top-3 right-4 bg-[#D32F2F] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {service.badge}
                    </span>
                  )}
                  <p className="text-lg font-bold text-black mb-2">{service.duration}</p>
                  <p className="text-sm text-gray-600 mb-4 min-h-[40px]">{service.description}</p>
                  <div>
                    {service.special ? (
                      <div>
                        <p className="text-gray-400 line-through text-sm">{service.price}</p>
                        <p className="text-2xl font-bold text-[#D32F2F]">{service.special}</p>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold text-[#D32F2F]">{service.price}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cupping */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-black">Cupping / Hijama</h3>
              <img
                src="https://images.unsplash.com/photo-1621287571777-c725d8e34d39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxjdXBwaW5nJTIwdGhlcmFweXxlbnwwfHx8fDE3NzA3NDczMTB8MA&ixlib=rb-4.1.0&q=85"
                alt="Hijama Cupping"
                className="hidden md:block w-16 h-16 rounded-lg object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cuppingServices.map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-[#D32F2F] hover:shadow-md transition-all duration-200"
                >
                  <p className="text-lg font-bold text-black mb-2">{service.name}</p>
                  <p className="text-sm text-gray-600 mb-4 min-h-[40px]">{service.description}</p>
                  <p className="text-2xl font-bold text-[#D32F2F]">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Taping */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Injury Taping / Strapping</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {tapingServices.map((service, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-[#D32F2F] hover:shadow-md transition-all duration-200"
                >
                  <p className="text-lg font-bold text-black mb-2">{service.name}</p>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-[#D32F2F]">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Combo Deal */}
          <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] rounded-3xl shadow-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  COMBO DEAL
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">{comboDeal.name}</h3>
                <p className="text-white/90">{comboDeal.description}</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">{comboDeal.price}</p>
                <a
                  href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20the%20Combo%20Deal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#D32F2F] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200"
                >
                  Book Combo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">Important Information:</p>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-start">
                  <Check className="text-amber-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>All prices exclude call-out fees (R100-R150 location dependent)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-amber-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span><strong>Males Only.</strong> Alternative female therapists available upon request.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
