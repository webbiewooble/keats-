import { ArrowRight, Phone } from 'lucide-react';

export default function PremiumCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-light-gray">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/kita_cta_facility_1782926270577.jpg" 
          alt="Industrial Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl bg-white p-12 shadow-xl border-l-4 border-brand-navy">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-brand-light"></span>
            <span className="text-brand-navy text-sm font-bold tracking-widest uppercase">Partner With Us</span>
          </div>
          
          <h2 className="text-4xl font-display font-bold text-brand-navy mb-6 leading-tight">
            Ready to upgrade your water infrastructure?
          </h2>
          
          <p className="text-lg text-brand-gray mb-10 font-medium leading-relaxed">
            Consult with our engineering experts to design a customized water treatment solution tailored to your operational requirements and sustainability goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-bold rounded-sm hover:bg-brand-light transition-colors">
              <span className="relative flex items-center gap-2">
                Request Technical Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="tel:18002701121" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-brand-navy font-bold rounded-sm hover:bg-brand-light-gray transition-colors border-2 border-brand-navy gap-2">
              <Phone className="w-5 h-5" /> 1800-270-1121
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
