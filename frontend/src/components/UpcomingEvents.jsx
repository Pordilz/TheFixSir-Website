import React from 'react';
import { Calendar, MapPin, Clock, Phone, Droplet } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      date: '30 August',
      islamicDate: '17th Rabi al-Awwal',
      day: 'Sunday',
      service: 'Hijama/Sunnah Dates',
      price: 'R350-R400',
      cups: '8 cups max',
      featured: true,
    },
    {
      date: '1 September',
      islamicDate: '19th Rabi al-Awwal',
      day: 'Tuesday',
      service: 'Hijama/Sunnah Dates',
      price: 'R350-R400',
      cups: '8 cups max',
      featured: false,
    },
    {
      date: '3 September',
      islamicDate: '21st Rabi al-Awwal',
      day: 'Thursday',
      service: 'Hijama/Sunnah Dates',
      price: 'R350-R400',
      cups: '8 cups max',
      featured: false,
    },
  ];

  // The cycle runs across two months, so the calendar shows the tail of August
  // followed by September. 30 Aug 2026 is a Sunday; September starts on a
  // Tuesday (2 leading blanks).
  const augustSunnah = [30];
  const augustCells = [30, 31, null, null, null, null, null];
  const septemberSunnah = [1, 3];
  const septemberCells = [
    ...Array(2).fill(null),
    ...Array.from({ length: 30 }, (_, i) => i + 1),
  ];

  const dayCell = (day, key, highlight) => (
    <div
      key={key}
      className={`aspect-square flex items-center justify-center rounded-md ${day ? 'bg-white/80' : ''}`}
    >
      {day && (
        <span
          className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-lg font-bold rounded-full ${highlight ? 'ring-2 ring-[#178E92] bg-[#178E92]/10 text-[#0E4249]' : ''
            }`}
        >
          {day}
        </span>
      )}
    </div>
  );

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0C3242] mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            August / September - Rabi al-Awwal preferred cupping dates - dependent on moon sighting
          </p>
          <div className="w-20 h-1 brand-rule rounded-full mx-auto mt-6"></div>
        </div>

        {/* Location Banner */}
        <div className="bg-gradient-to-r from-[#136281] to-[#178E92] text-white rounded-3xl p-8 mb-12 text-center">
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
        <div className="relative bg-gradient-to-br from-[#136281] via-[#11526D] to-[#0E4249] rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="pointer-events-none absolute inset-0 bg-honeycomb-invert opacity-[0.10]" />
          <div className="relative max-w-2xl mx-auto px-6 py-10 sm:px-10 sm:py-12 text-white">
            {/* Brand */}
            <div className="flex justify-center mb-7">
              <img
                src="/brand/logo-copyline-whiteteal.png"
                alt="FixSir — The Science of Movement"
                className="h-14 w-auto"
              />
            </div>

            <h3 className="text-center text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mb-8">
              Sunnah Hijama Dates
            </h3>

            {/* Calendar — the cycle spans the end of August into September */}
            <div className="bg-[#F2F6F8] text-[#0C3242] rounded-2xl border-2 border-[#0C3242]/25 p-4 sm:p-6 shadow-lg">
              {/* August tail */}
              <div className="flex items-end justify-end border-b-2 border-[#136281]/40 pb-2 mb-3">
                <span className="text-lg sm:text-xl font-bold tracking-wide text-[#136281]">AUGUST</span>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center mb-7">
                {augustCells.map((day, i) =>
                  dayCell(day, `aug-${i}`, augustSunnah.includes(day))
                )}
              </div>

              {/* September */}
              <div className="flex items-end justify-between border-b-2 border-[#136281] pb-3 mb-4">
                <span className="bg-[#C3E2E3] text-[#0E4249] text-2xl sm:text-3xl font-bold px-4 py-1 rounded-lg">
                  2026
                </span>
                <span className="text-2xl sm:text-3xl font-bold tracking-wide">SEPTEMBER</span>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
                  <div key={d} className="text-[10px] sm:text-xs font-bold text-[#178E92] pb-1">
                    {d}
                  </div>
                ))}
                {septemberCells.map((day, i) =>
                  dayCell(day, `sep-${i}`, septemberSunnah.includes(day))
                )}
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
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${event.featured ? 'ring-4 ring-[#178E92]' : ''
                }`}
            >
              {event.featured && (
                <div className="absolute top-0 right-0 bg-[#178E92] text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                  FEATURED
                </div>
              )}

              <div className="p-8">
                {/* Date Header */}
                <div className="bg-[#F2F6F8] rounded-2xl p-6 mb-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Calendar className="text-[#136281]" size={24} />
                    <p className="text-3xl font-bold text-[#0C3242]">{event.date}</p>
                  </div>
                  <p className="text-gray-600 font-medium">{event.islamicDate}</p>
                  <p className="text-sm text-gray-500 mt-1">{event.day}</p>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Droplet className="text-[#136281] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-[#0C3242]">{event.service}</p>
                      <p className="text-sm text-gray-600">{event.cups}</p>
                    </div>
                  </div>

                  <div className="bg-[#178E92]/10 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Price per person</p>
                    <p className="text-2xl font-bold text-[#178E92]">{event.price}</p>
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
                  className="mt-6 w-full block text-center bg-[#136281] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#178E92] transition-all duration-200"
                >
                  Book This Date
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-[#F2F9F9] rounded-3xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0C3242] mb-4">Book Your Slot Now</h3>
              <p className="text-gray-600 mb-6">
                Limited slots available for each date. Contact us early to secure your appointment.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:0648906906"
                className="flex items-center space-x-4 bg-white p-4 rounded-xl hover:shadow-md transition-all duration-200"
              >
                <div className="p-3 bg-[#136281]/10 rounded-lg">
                  <Phone className="text-[#136281]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Males</p>
                  <p className="text-lg font-bold text-[#0C3242]">064 890 6906</p>
                </div>
              </a>
              <a
                href="tel:0828827865"
                className="flex items-center space-x-4 bg-white p-4 rounded-xl hover:shadow-md transition-all duration-200"
              >
                <div className="p-3 bg-[#136281]/10 rounded-lg">
                  <Phone className="text-[#136281]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Females (Referrals)</p>
                  <p className="text-lg font-bold text-[#0C3242]">082 882 7865</p>
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
