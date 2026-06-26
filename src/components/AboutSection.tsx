import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Advanced reverse osmosis technology',
  'Industrial-grade purification systems',
  '24/7 maintenance and support',
  'Eco-friendly water conservation'
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-[-20deg] translate-x-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574620610344-938b8137397e?q=80&w=1600&auto=format&fit=crop" 
                alt="Water filtration facility" 
                className="w-full h-auto object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/40 hover:bg-transparent transition-all duration-700" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded border-t-4 border-brand-gold shadow-[0_20px_40px_rgba(10,25,47,0.1)] hidden md:block"
            >
              <div className="text-5xl font-display font-bold text-brand-navy mb-2">25+</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                Years of <br/> Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">
                About Our Company
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight mb-6">
              Setting the Gold Standard in Water Filtration.
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Kita Water Systems, we blend state-of-the-art engineering with uncompromising quality. We specialize in designing, deploying, and maintaining premium water purification solutions that meet the rigorous demands of both industrial complexes and modern residential spaces.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-brand-navy font-medium text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-navy border-2 border-brand-navy text-white px-8 py-4 font-semibold hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy transition-colors rounded"
            >
              Learn More About Us
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
