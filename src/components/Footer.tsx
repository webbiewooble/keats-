import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy text-white pt-24 pb-8 relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-light" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/#home" className="flex items-center gap-2 group inline-flex">
            <img 
              src="https://kitasystems.com/wp-content/uploads/2024/02/logo-1.png" 
              alt="Kita Systems" 
              className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm">
              We are a leading global water technology provider, dedicated to addressing the world's most critical water challenges through innovation and engineering.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-white hover:bg-brand-light transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-white hover:bg-brand-light transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-white hover:bg-brand-light transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/#home' },
                { name: 'About Us', path: '/#about' },
                { name: 'Our Products', path: '/#solutions' },
                { name: 'Locations', path: '/locations' },
                { name: 'Contact Us', path: '/#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-light" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Our Capabilities
            </h4>
            <ul className="space-y-3">
              {['Applied Research', 'Industrial Filtration', 'Water Scarcity Solutions', 'Smart Analytics', 'Global Projects'].map((link) => (
                <li key={link}>
                  <Link to="/#services" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-light" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-light shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  100 Premium Water Way,<br />
                  Suite 500, Tech District<br />
                  Kanpur, UP 208001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-light shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-light shrink-0" />
                <a href="mailto:info@kitawater.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  contact@kitawater.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kita Water Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
