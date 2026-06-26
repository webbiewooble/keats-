import { Phone, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="bg-brand-navy py-16 relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light opacity-5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Get a Free Quote Today
          </h2>
          <p className="text-brand-gray text-lg md:text-xl mb-10 leading-relaxed">
            Tell us your water quality problem. We'll recommend the right system — no obligation.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white">
              <Phone className="w-5 h-5 text-brand-gold" />
              <span className="font-semibold tracking-wide">Toll-Free: <a href="tel:18002701121" className="hover:text-brand-gold transition-colors">1800 270 1121</a></span>
            </div>
            
            <a
              href="mailto:info@kitawater.com"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-8 py-3.5 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Request a Quote
            </a>
            
            <a
              href="https://wa.me/18002701121"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wide hover:bg-[#1ebd57] transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
