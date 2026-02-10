import React from 'react';
import { MapPin, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Professional Mobile
                <span className="text-[#D32F2F]"> Sports Massage</span> &
                <span className="text-[#D32F2F]"> Hijama Therapy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Recovery, Relief, and Revitalization at your doorstep. Serving Stanger and surrounding areas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#D32F2F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B71C1C] transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                className="inline-block text-center bg-white text-[#D32F2F] border-2 border-[#D32F2F] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D32F2F] hover:text-white transition-all duration-200"
              >
                View Services
              </a>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#D32F2F]/10 rounded-lg">
                  <MapPin className="text-[#D32F2F]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-black">Mobile Service</p>
                  <p className="text-sm text-gray-600">We come to you</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#D32F2F]/10 rounded-lg">
                  <Clock className="text-[#D32F2F]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-black">Flexible Hours</p>
                  <p className="text-sm text-gray-600">7 days a week</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#D32F2F]/10 rounded-lg">
                  <Award className="text-[#D32F2F]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-black">Professional</p>
                  <p className="text-sm text-gray-600">Certified therapists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtYXNzYWdlfGVufDB8fHx8MTc3MDc0NzMwMHww&ixlib=rb-4.1.0&q=85"
                alt="Professional Sports Massage"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-600 mb-1">Starting from</p>
              <p className="text-3xl font-bold text-[#D32F2F]">R250</p>
              <p className="text-sm text-gray-600">per session</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
