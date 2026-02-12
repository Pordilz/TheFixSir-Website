import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_e6936146-32b4-41d1-9215-4616bacb2820/artifacts/311cz3q0_PHOTO-2026-02-10-19-55-21.jpg"
                alt="The FixSir Logo"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold">The FixSir</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Recovery, Relief, and Revitalization. Experience professional therapy in the comfort of your own home with our mobile service, or visit our private practice in Musgrave, Durban.
            </p>
            <div className="flex space-x-4">

              <a
                href="https://www.instagram.com/thefixsir.sa?igsh=Y2h2NncxeW9pdzJw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-[#D32F2F] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/27648906906"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-[#D32F2F] transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href={location.pathname === '/' ? '#home' : '/'} className="text-gray-400 hover:text-[#D32F2F] transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href={location.pathname === '/' ? '#about' : '/#about'} className="text-gray-400 hover:text-[#D32F2F] transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href={location.pathname === '/' ? '#services' : '/#services'} className="text-gray-400 hover:text-[#D32F2F] transition-colors duration-200">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href={location.pathname === '/' ? '#events' : '/#events'} className="text-gray-400 hover:text-[#D32F2F] transition-colors duration-200">
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="text-[#D32F2F] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm text-gray-500">Males</p>
                  <a href="tel:0648906906" className="text-gray-300 hover:text-[#D32F2F] transition-colors">
                    064 890 6906
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-[#D32F2F] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm text-gray-500">Females (Referrals)</p>
                  <a href="tel:0828827865" className="text-gray-300 hover:text-[#D32F2F] transition-colors">
                    082 882 7865
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#D32F2F] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-300">
                    Musgrave, Durban
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#D32F2F] rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to Experience Professional Therapy?</h3>
              <p className="text-white/90">Book your appointment today and feel the difference</p>
            </div>
            <a
              href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#D32F2F] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} The FixSir. All rights reserved.
              <span className="hidden md:inline mx-2">|</span>
              <span className="block md:inline mt-1 md:mt-0">Developed by Qroma</span>
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-[#D32F2F] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#D32F2F] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
