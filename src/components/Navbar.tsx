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
  
  // If we are not on the home page, make the navbar always look scrolled (white bg)
  // because the hero image is only on the home page.
  const isHomePage = location.pathname === '/';
  const navbarScrolled = isScrolled || !isHomePage;

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Water Appliances', href: '/#purifiers' },
    { name: 'Water Ionizers', href: '/#ionizers' },
    { name: 'Water Treatments', href: '/#sand-filters' },
    { name: 'Home Appliances', href: '/#home-appliances' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navbarScrolled 
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-brand-navy/20 py-3' 
          : 'bg-gradient-to-b from-brand-navy/80 via-brand-navy/35 to-transparent py-4 lg:py-6'
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/#home" className="flex items-center gap-2 group flex-shrink-0">
          <img 
            src="https://kitasystems.com/wp-content/uploads/2024/02/logo-1.png" 
            alt="Kita Systems" 
            className="h-10 xl:h-12 w-auto transition-all duration-300 brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[13px] 2xl:text-[15px] font-semibold transition-colors relative group ${
                navbarScrolled ? 'text-brand-light-gray hover:text-brand-gold' : 'text-white hover:text-brand-gold'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block flex-shrink-0">
          <Link
            to="/#contact"
            className={`px-6 py-2.5 bg-transparent border text-[13px] 2xl:text-[15px] font-semibold rounded transition-all duration-300 block ${
              navbarScrolled 
                ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy' 
                : 'border-white text-white hover:bg-white hover:text-brand-navy'
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 transition-colors flex-shrink-0 text-white hover:text-brand-gold"
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
            className="xl:hidden bg-brand-dark border-t border-brand-light overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-light-gray hover:text-brand-gold text-lg font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center px-6 py-3 bg-brand-gold text-brand-navy font-medium rounded transition-colors"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
