import { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

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
    { name: 'Water Appliances', href: '/#services' },
    { name: 'Water Ionizers', href: '/#ionizers' },
    { name: 'Water Treatments', href: '/#treatments' },
    { name: 'Home Appliances', href: '/#home-appliances' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navbarScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/#home" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-brand-navy transition-transform duration-300 group-hover:scale-110">
            <Droplet className="w-6 h-6 fill-brand-navy" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${navbarScrolled ? 'text-brand-navy' : 'text-white'}`}>
            KITA<span className="text-brand-gold">WATER</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors relative group ${navbarScrolled ? 'text-brand-navy/80 hover:text-brand-gold' : 'text-white/90 hover:text-brand-gold'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/#contact"
            className={`px-6 py-2.5 bg-transparent border font-medium rounded transition-all duration-300 ${
              navbarScrolled 
                ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white' 
                : 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
            }`}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${navbarScrolled ? 'text-brand-navy' : 'text-white'}`}
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
            className="lg:hidden bg-brand-dark border-t border-brand-light overflow-hidden"
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
