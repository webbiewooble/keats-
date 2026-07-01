import { motion } from 'motion/react';
import { ArrowRight, Droplets, ShieldCheck, Activity } from 'lucide-react';

export default function PremiumHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-light-gray pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <img 
          src="/images/kita_hero_banner_1782926217492.jpg" 
          alt="Water Treatment Technology" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 shadow-xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-brand-light"></span>
              <span className="text-brand-navy text-sm font-bold tracking-widest uppercase">Let's Solve Water</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6 leading-tight text-brand-navy">
              Innovative Solutions for a <br className="hidden lg:block"/>
              <span className="text-brand-light">Sustainable Future</span>
            </h1>
            
            <p className="text-lg text-brand-gray mb-10 max-w-xl leading-relaxed">
              We are a leading global water technology provider, dedicated to addressing the world's most critical water challenges through innovation, engineering, and sustainable practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#solutions" className="group inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-bold rounded-sm overflow-hidden transition-all hover:bg-brand-light">
                <span className="relative flex items-center gap-2">
                  Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-brand-navy font-bold rounded-sm border-2 border-brand-navy hover:bg-brand-navy hover:text-white transition-colors">
                Contact Our Experts
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
