import React from 'react';
import { MapPin, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 bg-gradient-to-b from-[#F2F6F8] via-[#F7FBFB] to-white overflow-hidden"
    >
      {/* Honeycomb watermark */}
      <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-[0.09]" />
      {/* Teal diagonal echoing the logo stroke */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6rem] h-[140%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-[#178E92]/40 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#178E92]">
                Mobility / Vitality / Performance
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0C3242] leading-tight">
                Professional
                <span className="bg-gradient-to-r from-[#136281] to-[#178E92] bg-clip-text text-transparent"> Recovery Therapy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Recovery, Relief, and Revitalization in the comfort of your own home or visit us at our calm oasis away from the hustle and bustle of everyday life. Serving Musgrave, Durban and surrounding areas.
              </p>
              <div className="inline-block bg-[#0C3242] text-white px-6 py-2 rounded-full font-semibold mt-4 mb-4">
                Males Only Service
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#136281] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#178E92] transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                className="inline-block text-center bg-white text-[#178E92] border-2 border-[#178E92] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#178E92] hover:text-white transition-all duration-200"
              >
                View Services
              </a>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#136281]/10 rounded-lg">
                  <MapPin className="text-[#136281]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0C3242]">Mobile Service</p>
                  <p className="text-sm text-gray-600">We come to you + Practice in Musgrave</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#178E92]/10 rounded-lg">
                  <Clock className="text-[#178E92]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0C3242]">Flexible Hours</p>
                  <p className="text-sm text-gray-600">7 days a week</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-[#136281]/10 rounded-lg">
                  <Award className="text-[#136281]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0C3242]">Professional</p>
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
                alt="Professional Sports Massage Therapy Session in Durban"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C3242]/55 via-[#0C3242]/10 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl ring-1 ring-[#136281]/10">
              <p className="text-sm text-gray-600 mb-1">Starting from</p>
              <p className="text-3xl font-bold text-[#178E92]">R250</p>
              <p className="text-sm text-gray-600">per session</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
