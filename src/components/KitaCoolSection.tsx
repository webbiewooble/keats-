import { motion } from 'motion/react';
import { ShieldCheck, Droplet, Cog, Wrench } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'The First of Its Kind in India',
    description: 'The Kita Cool RO+UV storage water cooler-purifier combines RO, UV, and alkaline purification with built-in cooling and storage — a combination that, until now, hasn\'t existed in the Indian market in one unit. It\'s a different standard for what a workplace water solution should do.'
  },
  {
    icon: Droplet,
    title: 'Engineered for Real Water',
    description: 'Kita Cool\'s 7-stage purification process is built to handle what actually comes out of Indian taps and borewells: hardness, high TDS, heavy metals like arsenic, lead, and mercury, plus the pathogens that slip past lower-grade filters.'
  },
  {
    icon: Cog,
    title: 'Components That Match the Promise',
    description: 'Every purification and filtration module inside Kita Cool uses high-grade components sized for real demand — not a stripped-down version built to hit a price point. That means consistent performance even under higher-capacity use.'
  },
  {
    icon: Wrench,
    title: 'Backed, Not Just Sold',
    description: 'Kita Cool is supported by a nationwide service network and built on years of manufacturing experience. When you choose it for your workplace, you\'re choosing a system — and a team — that stands behind it after the sale.'
  }
];

export default function KitaCoolSection() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Abstract Background Vectors */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-light opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text/Features Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">
                Flagship Innovation
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-12">
              Why <span className="text-brand-gold">Kita Cool</span>
            </h2>

            <div className="space-y-10">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-gold/50 group-hover:bg-brand-gold/10 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-brand-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-brand-gray leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-full min-h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg" />
            <div className="relative w-full max-w-md bg-white rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col items-center">
              <img 
                src="https://kitasystems.com/wp-content/uploads/2024/02/water-cooler-product-2.jpg" 
                alt="Kita Cool RO+UV Storage Water Cooler" 
                className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl"
              />
              <div className="mt-8 text-center border-t border-gray-100 pt-6 w-full">
                <h4 className="text-2xl font-display font-bold text-brand-navy">Kita Cool Series</h4>
                <p className="text-gray-500 mt-2 text-sm uppercase tracking-wider font-semibold">RO + UV + Alkaline + Cooling</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
