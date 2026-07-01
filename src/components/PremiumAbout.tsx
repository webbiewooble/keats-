import { ArrowRight, Microscope, Factory, Globe, Shield } from 'lucide-react';

export default function PremiumAbout() {
  const features = [
    { icon: Microscope, title: "Applied Research", desc: "Developing next-generation filtration media and technologies." },
    { icon: Factory, title: "Precision Engineering", desc: "Building industrial-grade, reliable water infrastructure." },
    { icon: Globe, title: "Global Impact", desc: "Solving water scarcity and quality challenges worldwide." },
    { icon: Shield, title: "Certified Quality", desc: "Rigorous testing and compliance with international standards." }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-brand-light"></span>
              <span className="text-brand-navy text-sm font-bold tracking-widest uppercase">Who We Are</span>
            </div>
            
            <h2 className="text-4xl font-display font-bold text-brand-navy mb-6 leading-tight">
              Creating a more water-secure and sustainable world.
            </h2>
            
            <p className="text-brand-gray text-lg leading-relaxed mb-8">
              Kita Systems partners with communities, industries, and municipalities to provide high-performance water treatment ecosystems. We optimize water management, reduce energy consumption, and ensure the highest standards of water purity.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="group">
                    <div className="w-12 h-12 bg-brand-light-gray flex items-center justify-center mb-4 text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-brand-navy font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            <a href="#company" className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-light transition-colors group">
              Read Our Full Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden bg-brand-light-gray p-4 shadow-lg">
              <img 
                src="/images/kita_about_lab_1782926255093.jpg" 
                alt="Modern Water Testing Lab" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-brand-navy p-6 shadow-xl text-white">
                <div className="font-display font-bold text-4xl mb-1">100+</div>
                <div className="text-sm font-bold tracking-wider uppercase opacity-80">Patented Solutions</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
