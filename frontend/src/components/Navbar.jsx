import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href={location.pathname === '/' ? '#home' : '/'} className="flex items-center space-x-3">
              <img
                src="https://customer-assets.emergentagent.com/job_e6936146-32b4-41d1-9215-4616bacb2820/artifacts/311cz3q0_PHOTO-2026-02-10-19-55-21.jpg"
                alt="The FixSir Logo"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-black">The FixSir</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={location.pathname === '/' ? link.href : `/${link.href}`}
                  className="px-5 py-2 text-gray-700 hover:text-[#D32F2F] font-medium transition-colors duration-200 text-base"
                >
                  {link.name}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
            <a
              href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 bg-[#D32F2F] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#B71C1C] transition-all duration-200 hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={location.pathname === '/' ? link.href : `/${link.href}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#D32F2F] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#B71C1C] transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
