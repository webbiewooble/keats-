import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isHomePage = location.pathname === '/';
  const navbarScrolled = isScrolled || !isHomePage;

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Water Appliances', href: '/#purifiers' },
    { name: 'Our Locations', href: '/locations' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navbarScrolled 
          ? 'bg-white shadow-sm border-b border-gray-200 py-3' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 lg:py-6'
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/#home" className="flex items-center gap-2 group flex-shrink-0">
          <img 
            src="https://kitasystems.com/wp-content/uploads/2024/02/logo-1.png" 
            alt="Kita Systems" 
            className="h-10 xl:h-12 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[14px] 2xl:text-[15px] font-semibold transition-colors relative group text-brand-navy hover:text-brand-light`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block flex-shrink-0">
          <Link
            to="/#contact"
            className={`px-8 py-3 text-[14px] font-bold rounded-sm transition-all duration-300 block border-2 border-brand-navy bg-brand-navy text-white hover:bg-brand-light hover:border-brand-light`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 transition-colors flex-shrink-0 text-brand-navy hover:text-brand-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-brand-light-gray overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-navy hover:text-brand-light text-lg font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center px-6 py-3 bg-brand-navy text-white font-medium rounded-sm transition-colors hover:bg-brand-light"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
