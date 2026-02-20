import React from 'react';
import { Quote, Award, Heart, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            About The FixSir
          </h2>
          <p className="text-2xl text-[#D32F2F] font-semibold mb-2">
            Recharge. Recover. Reenergize.
          </p>
          <div className="w-20 h-1 bg-[#D32F2F] mx-auto mt-6"></div>
        </div>

        {/* Core Belief */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-[#D32F2F]">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The FixSir was created with one core belief:
            </p>
            <p className="text-2xl font-bold text-black">
              Recovery is not a luxury — it is essential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Taking care of your body and giving it the attention it deserves is not optional. It is necessary for long-term performance, resilience, and well-being.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              We help individuals move better, recover smarter, and perform at their highest level — whether in sport, work, or daily life.
            </p>
          </div>
        </div>

        {/* The Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1598555748505-ccca0d9b9f7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxjdXBwaW5nJTIwdGhlcmFweXxlbnwwfHx8fDE3NzA3NDczMTB8MA&ixlib=rb-4.1.0&q=85"
                alt="Hijama Cupping Therapy"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Hadith quotes */}
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#D32F2F] relative mt-6 space-y-4">
              <Quote className="absolute top-4 right-4 text-[#D32F2F] opacity-20" size={40} />
              <div>
                <p className="text-lg font-semibold text-gray-800 italic mb-1">
                  "Indeed the best of remedies you have is cupping."
                </p>
                <p className="text-sm text-gray-600">Sahih Bukhari 5371</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 italic mb-1">
                  "If there is any good in the medicines with which you treat yourselves, it is in the incisions of the Hijama therapist..."
                </p>
                <p className="text-sm text-gray-600">Sahih Muslim 2205</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black">The Story Behind The FixSir</h3>
            <p className="text-gray-700 leading-relaxed">
              The FixSir was founded by <strong>Muhammed Hoosain</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In 2022, my life changed completely. I was diagnosed with <strong>Guillain-Barré Syndrome</strong> — a rare autoimmune condition that left me paralysed from the neck down.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For months, I could not walk, feel, grip, or perform basic daily tasks most of us take for granted. Recovery was not just physical — it was mental.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through structured rehabilitation, resilience, and faith, I gradually regained my strength and independence. Eventually, I returned to sport and physical activity at a level where it felt as though nothing had happened.
            </p>
            <p className="text-[#D32F2F] font-semibold text-lg">Alhamdulillah.</p>
            <p className="text-gray-700 leading-relaxed">
              That experience reshaped my purpose. Originally pursuing a path in commerce, I redirected my career toward sport science and recovery — driven by my gratitude towards every one of those heroes who helped me in my own personal journey, and a desire to help others regain, protect, and optimise their health.
            </p>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-black mb-2">Qualifications & Expertise</h3>
            <p className="text-gray-600">
              Today, The FixSir represents years of academic and practical dedication.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Sports Science', desc: 'Distinction Graduate' },
              { icon: Heart, title: 'Sports Massage', desc: 'Qualified Therapist' },
              { icon: Target, title: 'Hijama Cupping', desc: 'Certified (Wet & Dry)' },
              { icon: CheckCircle, title: 'Injury Taping', desc: 'Qualified Practitioner' },
            ].map((qual, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-[#D32F2F]">
                <div className="bg-[#D32F2F]/10 p-3 rounded-lg inline-block mb-4">
                  <qual.icon className="text-[#D32F2F]" size={28} />
                </div>
                <p className="font-bold text-black mb-1">{qual.title}</p>
                <p className="text-sm text-gray-600">{qual.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Help + Worked With */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center space-x-2">
              <Users className="text-[#D32F2F]" size={28} />
              <span>Who We Help</span>
            </h3>
            <ul className="space-y-3">
              {[
                'Searching for Sports/Deep Tissue massage in Durban',
                'Looking for Cupping therapy in Durban',
                'Managing muscular fatigue',
                'Recovering from injury',
                'Dealing with daily stress and tension',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <ArrowRight className="text-[#D32F2F] flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6 flex items-center space-x-2">
              <Award className="text-[#D32F2F]" size={28} />
              <span>I Have Worked With</span>
            </h3>
            <ul className="space-y-3">
              {[
                'Grassroots athletes',
                'Professional athletes',
                'High-performing individuals',
                'Corporate professionals',
                'Sedentary individuals under chronic stress',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#D32F2F] flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">
              Each client receives structured, intentional care — not generic treatment.
            </p>
          </div>
        </div>

        {/* Mission + CTA */}
        <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] rounded-3xl shadow-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            <p className="text-xl text-white/90">To elevate recovery standards and perceptions.</p>
            <p className="text-xl text-white/90">To combine science, experience, and purpose.</p>
            <p className="text-xl text-white/90">To help every client recharge their mind, recover their body, and reach new heights.</p>
          </div>
          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="text-lg text-white/80 mb-4">
              Your body works hard for you. Invest in keeping it strong, mobile, and resilient.
            </p>
            <a
              href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#D32F2F] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
            >
              Book Your Appointment Today
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <p className="text-3xl font-bold text-[#D32F2F] mb-1">100s</p>
            <p className="text-sm text-gray-600">Clients Served</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <p className="text-3xl font-bold text-[#D32F2F] mb-1">3+ Years</p>
            <p className="text-sm text-gray-600">Experience</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <p className="text-3xl font-bold text-[#D32F2F] mb-1">Mobile</p>
            <p className="text-sm text-gray-600">We Come to You</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
            <p className="text-3xl font-bold text-[#D32F2F] mb-1">Certified</p>
            <p className="text-sm text-gray-600">Professional Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
