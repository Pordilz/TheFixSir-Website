import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Musgrave, Durban and surrounding areas in KwaZulu-Natal. Call-out fees of R100-R150 apply depending on your location. Contact us to confirm if we service your area.',
    },
    {
      question: 'Is Hijama safe and hygienic?',
      answer: 'Absolutely. We follow strict hygiene protocols, use sterile single-use equipment, and are trained in proper Sunnah-compliant Hijama practices. Your safety and health are our top priorities.',
    },
    {
      question: 'Do you accept female clients?',
      answer: 'Our primary service is for male clients only. However, we can arrange alternative female therapists upon request for female clients. Please call us to discuss your requirements.',
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book via WhatsApp by clicking any "Book Now" button on this website, or call us directly at 064 890 6906 for males or 082 882 7865 for female referrals.',
    },
    {
      question: 'What is required for the session?',
      answer: 'Simply ensure you have 2 normal-sized bath towels available. We bring everything else including the massage bed, oils, cups, sprays, and expert care.',
    },
    {
      question: 'Can I combine multiple services?',
      answer: 'Yes! We offer a popular combo deal: 1 Hour Sports Massage + Wet Cupping for R750. You can also customize your treatment based on your needs.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Cash or EFT currently. Payment is due at the time of service.',
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'We request at least 24 hours notice for cancellations or rescheduling to avoid any cancellation fees. We understand emergencies happen - please contact us as soon as possible.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mt-6"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#D32F2F] transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="font-semibold text-lg text-black pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#D32F2F] flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 bg-gray-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us directly. We're happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27648906906?text=Hi%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D32F2F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#B71C1C] transition-all duration-200"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:0648906906"
              className="inline-block bg-white text-[#D32F2F] border-2 border-[#D32F2F] px-8 py-3 rounded-full font-semibold hover:bg-[#D32F2F] hover:text-white transition-all duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
