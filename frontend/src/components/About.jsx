import React from 'react';
import { Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1598555748505-ccca0d9b9f7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxjdXBwaW5nJTIwdGhlcmFweXxlbnwwfHx8fDE3NzA3NDczMTB8MA&ixlib=rb-4.1.0&q=85"
                alt="Hijama Cupping Therapy"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Our Philosophy
              </h2>
              <div className="w-20 h-1 bg-[#D32F2F]"></div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#D32F2F] relative space-y-6">
              <Quote className="absolute top-6 right-6 text-[#D32F2F] opacity-20" size={48} />

              <div>
                <p className="text-xl font-semibold text-gray-800 italic mb-2">
                  "Indeed the best of remedies you have is cupping."
                </p>
                <p className="text-sm text-gray-600">
                  Sahih Bukhari 5371
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-gray-800 italic mb-2">
                  "If there is any good in the medicines with which you treat yourselves, it is in the incisions of the Hijama therapist..."
                </p>
                <p className="text-sm text-gray-600">
                  Sahih Muslim 2205
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                At The FixSir, we combine traditional Sunnah-compliant healing practices with modern sports therapy techniques. Our mobile service brings professional treatment directly to your home in Musgrave, Durban and surrounding areas, ensuring comfort and convenience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in sports massage, deep tissue therapy, Hijama (wet and dry cupping), and injury taping. We are fully certified Hijama Cupping Therapists, Sports Massage Therapists, and Injury Taping Therapists.
              </p>
              <div className="bg-black text-white p-4 rounded-xl mt-4">
                <p className="font-bold text-lg mb-1">⚠️ Males Only Service</p>
                <p className="text-sm text-gray-300">Alternative female therapists available upon request</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-[#D32F2F] mb-1">100s</p>
                <p className="text-sm text-gray-600">Clients Served</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-[#D32F2F] mb-1">3+ Years</p>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
