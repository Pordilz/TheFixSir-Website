import React from 'react';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Piet Wiersma (Nedbank Running Club)',
      location: '2024 Comrades Marathon Winner',
      rating: 5,
      text: 'Thanks again Mo!! I bet the massage gave me that edge ;)',
      service: 'Sports Massage',
    },
    {
      name: 'Zakariya Suder',
      location: 'Client',
      rating: 5,
      text: 'A very special thank you to Muhammed for the most professional experience. I was struggling with lower back and persistent sciatica pain... The cupping along my back and even on my head brought on a complete sense of calmness... I highly recommend you try it.',
      service: 'Combo Deal',
    },
    {
      name: 'Umeir Samad',
      location: 'Brazilian Jiu Jitsu Trainee',
      rating: 5,
      text: 'What differentiates the Fixsir from others in his field is the interactive questioning before the treatment... It\'s a great feeling after a session with Muhammed.',
      service: 'Sports Massage & Cupping',
    },
    {
      name: 'Asad Carrim',
      location: 'Client',
      rating: 5,
      text: 'Much appreciated Mo. No pain or sores at all post hijama treatment. Trained this morning.',
      service: 'Hijama Therapy',
    },
    {
      name: 'Novarr Pillay',
      location: 'DHS Rugby Team Physio',
      rating: 5,
      text: 'Coaching staff and team members continue to praise you guys... and are believing that it\'s the hard work of you guys that have been giving us our winning streak 😂',
      service: 'Sports Massage',
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

        {/* Testimonials Carousel */}
        <div className="relative px-12">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="bg-white rounded-3xl shadow-lg p-8 h-full flex flex-col relative hover:shadow-xl transition-all duration-300">
                    <Quote className="absolute top-6 right-6 text-[#D32F2F] opacity-20" size={40} />

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <div className="mt-2">
                        <span className="inline-block bg-[#D32F2F]/10 text-[#D32F2F] px-3 py-1 rounded-full text-xs font-semibold">
                          {testimonial.service}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
