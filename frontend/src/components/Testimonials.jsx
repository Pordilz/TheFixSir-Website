import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed K.',
      location: 'Stanger',
      rating: 5,
      text: 'Excellent service! The sports massage really helped with my shoulder pain. Professional therapist who came right to my home. Highly recommend!',
      service: 'Sports Massage',
    },
    {
      name: 'Yusuf M.',
      location: 'Durban',
      rating: 5,
      text: 'Best Hijama experience I\'ve had. Very professional, clean, and follows proper Sunnah practices. The mobile service made it so convenient.',
      service: 'Hijama Therapy',
    },
    {
      name: 'Ibrahim S.',
      location: 'Stanger Heights',
      rating: 5,
      text: 'Had the combo deal - massage and cupping. Fantastic value and amazing results. My back pain is completely gone. Will definitely book again!',
      service: 'Combo Deal',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from satisfied clients
          </p>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-[#D32F2F] opacity-20" size={40} />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <div className="mt-2">
                  <span className="inline-block bg-[#D32F2F]/10 text-[#D32F2F] px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Join hundreds of satisfied clients experiencing professional mobile therapy
          </p>
          <a
            href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D32F2F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B71C1C] transition-all duration-200 hover:shadow-xl"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
