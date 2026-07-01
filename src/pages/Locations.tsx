import { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Droplets, ThermometerSun, AlertTriangle, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Models available", value: "10+" },
    { label: "Installation in Kanpur", value: "Free" },
    { label: "After-sales support", value: "24×7" },
    { label: "Delivery charges", value: "₹0" }
  ];

  const problems = [
    { title: "Hair Fall & Dryness", desc: "Calcium deposits strip natural oils from scalp and hair.", icon: Droplets },
    { title: "Dry, Itchy Skin", desc: "Hard water clogs pores and leaves a film after every wash.", icon: ThermometerSun },
    { title: "Scale on Appliances", desc: "Geysers, washing machines, and pipelines corrode faster.", icon: AlertTriangle },
    { title: "Stiff, Faded Clothes", desc: "Hard water prevents detergent from lathering and rinses poorly.", icon: ShieldAlert }
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-white overflow-hidden border-b border-brand-light-gray">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-white/70 via-brand-white/80 to-brand-white z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/60 to-transparent z-10"></div>
          <img 
            src="/images/kita_location_banner_1782926352619.jpg" 
            alt="Water Softener Kanpur" 
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan/20 mb-6 bg-white/60">
                <MapPin className="w-4 h-4 text-brand-light" />
                <span className="text-brand-navy text-sm font-semibold tracking-wider uppercase">Kanpur, Uttar Pradesh</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-brand-navy tracking-tight mb-6 leading-[1.1]">
                Best Water Softener in Kanpur <br className="hidden md:block"/>
                <span className="text-gradient-cyan">— Hard Water Solved</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-gray mb-10 leading-relaxed max-w-2xl font-light">
                Kanpur's water is among the hardest in UP, with TDS levels routinely above 400 ppm. Kita Systems supplies and installs automatic water softeners for homes, factories, and commercial buildings across the city.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-light text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-lg shadow-brand-navy/20">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative flex items-center gap-2">
                    Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="tel:18002701121" className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-md text-brand-navy font-bold rounded-full hover:bg-white transition-colors border border-brand-light-gray shadow-sm hover:border-brand-light hover:shadow-md gap-2">
                  <Phone className="w-5 h-5 text-brand-light" /> Call 1800-270-1121
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-brand-light-gray"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-display font-bold text-brand-navy mb-1">{stat.value}</span>
                <span className="text-sm text-brand-gray uppercase tracking-wide font-semibold">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 lg:py-32 bg-brand-light-gray relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-white to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-brand-navy mb-6 tracking-tight">What Hard Water Does in Kanpur Homes</h2>
            <p className="text-brand-gray text-lg leading-relaxed">The signs of hard water are everywhere. Here is what it's doing to your home, skin, and appliances.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-2xl relative group overflow-hidden border border-brand-light-gray hover:border-brand-light/50 transition-colors shadow-sm hover:shadow-md bg-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-brand-light-gray text-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-light/10 transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{problem.title}</h3>
                    <p className="text-brand-gray text-sm leading-relaxed">{problem.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 bg-brand-white text-center border-t border-brand-light-gray relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-light/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-navy mb-6 tracking-tight">Get Soft Water in Your Kanpur Home Today</h2>
          <p className="text-xl text-brand-light font-medium mb-12">Free site visit · Free installation · Same-week delivery across Kanpur</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="tel:18002701121" className="inline-flex justify-center items-center px-8 py-4 bg-white border border-brand-light text-brand-light font-bold rounded-full hover:bg-brand-light hover:text-white transition-all duration-300 text-lg shadow-sm">
              <Phone className="w-5 h-5 mr-2" /> 1800-270-1121 (Toll-free)
            </a>
            <Link to="/#contact" className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-light text-white font-bold rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-lg shadow-brand-navy/20">
              Send an Enquiry <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
