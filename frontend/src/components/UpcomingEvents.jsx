import React from 'react';
import { Calendar, MapPin, Clock, Phone, Droplet } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      date: '2 July',
      islamicDate: '17th Muharram',
      day: 'Thursday',
      service: 'Hijama/Sunnah Dates',
      price: 'R350-R400',
      cups: '8 cups max',
      featured: true,
    },
    {
      date: '4 July',
      islamicDate: '19th Muharram',
      day: 'Saturday',
      service: 'Hijama/Sunnah Dates',
      price: 'R350-R400',
      cups: '8 cups max',
      featured: false,
    },
    {
      date: '6 July',
      islamicDate: '21st Muharram',
      day: 'Monday',
      service: 'Hijama/Sunnah Dates',
      price: 'R350-R400',
      cups: '8 cups max',
      featured: false,
    },
  ];

  // Sunnah Hijama calendar — July 2026 starts on a Wednesday (3 leading blanks).
  const sunnahDays = [2, 4, 6];
  const calendarCells = [
    ...Array(3).fill(null),
    ...Array.from({ length: 31 }, (_, i) => i + 1),
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            July / Muharram preferred cupping dates - dependent on moon sighting
          </p>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mt-6"></div>
        </div>

        {/* Location Banner */}
        <div className="bg-[#D32F2F] text-white rounded-3xl p-8 mb-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3">
              <MapPin size={32} />
              <div className="text-left">
                <p className="font-semibold text-lg">Coming to Musgrave, Durban</p>
                <p className="text-white/90">Mobile Service Available</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Droplet size={32} />
              <div className="text-left">
                <p className="font-semibold text-lg">Hijama Only</p>
                <p className="text-white/90">Wet/Dry Cupping Available</p>
              </div>
            </div>
            <div className="bg-black/30 px-6 py-3 rounded-full font-bold text-lg">
              Males Only
            </div>
          </div>
        </div>

        {/* Sunnah Hijama Dates Calendar */}
        <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="max-w-2xl mx-auto px-6 py-10 sm:px-10 sm:py-12 text-white">
            {/* Brand */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_e6936146-32b4-41d1-9215-4616bacb2820/artifacts/311cz3q0_PHOTO-2026-02-10-19-55-21.jpg"
                alt="TheFixSir"
                className="w-12 h-12 rounded-full object-cover bg-white"
              />
              <span className="text-3xl font-bold tracking-tight">TheFixSir</span>
            </div>

            <h3 className="text-center text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-8">
              Sunnah Hijama Dates
            </h3>

            {/* Calendar */}
            <div className="bg-[#F7ECEC] text-[#1B2A4A] rounded-2xl border-2 border-[#1B2A4A]/80 p-4 sm:p-6">
              <div className="flex items-end justify-between border-b-2 border-[#1B2A4A] pb-3 mb-4">
                <span className="bg-[#F0B9B9] text-[#1B2A4A] text-2xl sm:text-3xl font-bold px-4 py-1 rounded-lg">
                  2026
                </span>
                <span className="text-2xl sm:text-3xl font-bold tracking-wide">JULY</span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
                  <div key={d} className="text-[10px] sm:text-xs font-bold text-[#D32F2F] pb-1">
                    {d}
                  </div>
                ))}
                {calendarCells.map((day, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-md ${day ? 'bg-white/70' : ''}`}
                  >
                    {day && (
                      <span
                        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-lg font-bold rounded-full ${sunnahDays.includes(day) ? 'ring-2 ring-[#D32F2F] text-[#D32F2F]' : ''
                          }`}
                      >
                        {day}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mt-8 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-wide">R350 PP (8 CUPS)</p>
              <p className="mt-3 text-sm text-white/90 font-medium">
                Males – 064 890 6906&nbsp;&nbsp;•&nbsp;&nbsp;Females – 082 882 7865
              </p>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${event.featured ? 'ring-4 ring-[#D32F2F]' : ''
                }`}
            >
              {event.featured && (
                <div className="absolute top-0 right-0 bg-[#D32F2F] text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                  FEATURED
                </div>
              )}

              <div className="p-8">
                {/* Date Header */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Calendar className="text-[#D32F2F]" size={24} />
                    <p className="text-3xl font-bold text-black">{event.date}</p>
                  </div>
                  <p className="text-gray-600 font-medium">{event.islamicDate}</p>
                  <p className="text-sm text-gray-500 mt-1">{event.day}</p>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Droplet className="text-[#D32F2F] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-black">{event.service}</p>
                      <p className="text-sm text-gray-600">{event.cups}</p>
                    </div>
                  </div>

                  <div className="bg-[#D32F2F]/10 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Price per person</p>
                    <p className="text-2xl font-bold text-[#D32F2F]">{event.price}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                    <Clock size={16} />
                    <span className="font-medium">Limited slots available</span>
                  </div>
                </div>

                {/* Book Button */}
                <a
                  href={`https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20Hijama%20on%20${event.date}%20(${event.islamicDate})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full block text-center bg-[#D32F2F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#B71C1C] transition-all duration-200"
                >
                  Book This Date
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-gray-50 rounded-3xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Book Your Slot Now</h3>
              <p className="text-gray-600 mb-6">
                Limited slots available for each date. Contact us early to secure your appointment.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:0648906906"
                className="flex items-center space-x-4 bg-white p-4 rounded-xl hover:shadow-md transition-all duration-200"
              >
                <div className="p-3 bg-[#D32F2F]/10 rounded-lg">
                  <Phone className="text-[#D32F2F]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Males</p>
                  <p className="text-lg font-bold text-black">064 890 6906</p>
                </div>
              </a>
              <a
                href="tel:0828827865"
                className="flex items-center space-x-4 bg-white p-4 rounded-xl hover:shadow-md transition-all duration-200"
              >
                <div className="p-3 bg-[#D32F2F]/10 rounded-lg">
                  <Phone className="text-[#D32F2F]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Females (Referrals)</p>
                  <p className="text-lg font-bold text-black">082 882 7865</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
