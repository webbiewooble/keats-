import { Droplet, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050d1a] pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
      
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
            <p className="text-brand-gray leading-relaxed text-sm">
              Premium corporate water filtration systems. Delivering unparalleled purity and engineering excellence for industrial and residential applications worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center border border-white/10 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Project Gallery', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to="/#home" className="text-brand-gray hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3">
              {['Reverse Osmosis', 'Industrial Filtration', 'Water Softening', 'UV Purification', 'Maintenance'].map((link) => (
                <li key={link}>
                  <Link to="/#services" className="text-brand-gray hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-brand-gray text-sm leading-relaxed">
                  100 Premium Water Way,<br />
                  Suite 500, Tech District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+1234567890" className="text-brand-gray hover:text-brand-gold transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@kitawater.com" className="text-brand-gray hover:text-brand-gold transition-colors text-sm">
                  contact@kitawater.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray/60 text-sm">
            &copy; {new Date().getFullYear()} Kita Water Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-gray/60">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
