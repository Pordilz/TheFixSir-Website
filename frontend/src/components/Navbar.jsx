import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '/about', isPage: true },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Blog', href: '/blog', isPage: true },
    { name: 'Contact', href: '#contact' },
  ];

  const getHref = (link) => {
    if (link.isPage) return link.href;
    return location.pathname === '/' ? link.href : `/${link.href}`;
  };

  const isActive = (link) => {
    if (link.isPage) return location.pathname === link.href;
    return false;
  };

  return (
    <>
      {/* Inline styles for underline animation */}
      <style>{`
        .nav-link-item {
          position: relative;
          padding: 0.375rem 0;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #D32F2F;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 1px;
        }
        .nav-link-item:hover::after,
        .nav-link-item.active::after {
          width: 100%;
        }
        .nav-link-item.active {
          color: #D32F2F;
        }

        .mobile-menu-enter {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-link-item {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/98 shadow-[0_1px_20px_rgba(0,0,0,0.08)] backdrop-blur-md'
            : 'bg-white'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <a
              href={location.pathname === '/' ? '#home' : '/'}
              className="flex items-center gap-3 group"
            >
              <img
                src="https://customer-assets.emergentagent.com/job_e6936146-32b4-41d1-9215-4616bacb2820/artifacts/311cz3q0_PHOTO-2026-02-10-19-55-21.jpg"
                alt="The FixSir Logo"
                className="h-11 w-11 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
                  The FixSir
                </span>
                <span className="text-[10px] font-medium text-[#D32F2F] tracking-widest uppercase leading-tight">
                  Recovery Therapy
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <div className="flex items-center gap-7 mr-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={getHref(link)}
                    className={`nav-link-item text-[15px] font-medium transition-colors duration-200 ${isActive(link)
                        ? 'active text-[#D32F2F]'
                        : 'text-gray-600 hover:text-[#D32F2F]'
                      }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#D32F2F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#B71C1C] transition-all duration-300 hover:shadow-lg hover:shadow-red-200/50 active:scale-[0.98]"
              >
                <Phone size={14} strokeWidth={2.5} />
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all duration-200 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span className={`absolute left-0 w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? 'top-[9px] rotate-45' : 'top-[3px]'}`} />
                <span className={`absolute left-0 top-[9px] w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`absolute left-0 w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? 'top-[9px] -rotate-45' : 'top-[15px]'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu-enter border-t border-gray-100/80">
            <div className="bg-white px-5 py-5">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={getHref(link)}
                    onClick={() => setIsOpen(false)}
                    className={`mobile-link-item flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${isActive(link)
                        ? 'bg-red-50 text-[#D32F2F]'
                        : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {isActive(link) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] mr-3" />
                    )}
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/27648906906?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mobile-link-item flex items-center justify-center gap-2 w-full bg-[#D32F2F] text-white px-6 py-3 rounded-xl text-[15px] font-semibold hover:bg-[#B71C1C] transition-all duration-200 active:scale-[0.98]"
                  style={{ animationDelay: `${navLinks.length * 50}ms` }}
                >
                  <Phone size={16} />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
