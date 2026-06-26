import { motion } from 'motion/react';
import { CheckCircle2, Quote } from 'lucide-react';

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
            <div className="relative rounded-lg overflow-hidden border border-gray-100 shadow-[0_20px_40px_rgba(10,25,47,0.08)]">
              <img 
                src="https://images.unsplash.com/photo-1574620610344-938b8137397e?q=80&w=1600&auto=format&fit=crop" 
                alt="Water filtration facility" 
                className="w-full h-auto object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/10 hover:bg-transparent transition-all duration-700" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded border-t-4 border-brand-gold shadow-[0_20px_40px_rgba(10,25,47,0.1)] hidden md:block max-w-xs"
            >
              <Quote className="w-10 h-10 text-brand-gold/30 absolute -top-4 -left-4" />
              <div className="text-xl font-display font-bold text-brand-navy mb-2">KITA is Japanese for "happiness."</div>
              <div className="text-gray-500 font-medium text-sm leading-relaxed">
                It's not a tagline — it's the standard we hold every product to.
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
              Welcome to Kita Systems India Pvt. Ltd.
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                We didn't start as a manufacturer. Over ten years ago, Kita began as a supplier of water treatment spare parts — the unglamorous, behind-the-scenes work that keeps other people's systems running.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That work put us in close contact with industry leaders like Nasaka (Okaya), Blue Mount, Bluebird, and Hindware, and it gave us a front-row seat to how water treatment equipment is actually built. What we saw convinced us we could build it better. So we did.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Kita Systems designs and manufactures water treatment solutions engineered to cut recurring costs and increase output — starting with a decision almost no one else in the market has made: <strong className="text-brand-navy">building our water softeners and sand filters with stainless steel vessels instead of plastic or FRP.</strong> It's the only fully developed product of its kind available in India, and the water it treats is non-toxic by design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We didn't stop at water. Our in-house team of engineers and industry veterans has gone on to build home appliances aimed at the same goal that started this company — making everyday life a little easier, a little healthier, and a little happier.
              </p>
            </div>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-brand-navy border-2 border-brand-navy text-white px-8 py-4 font-semibold hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy transition-colors rounded"
            >
              Explore Our Solutions
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
