import { motion } from 'motion/react';
import { Settings, Filter, Droplet, Beaker, Thermometer, Home } from 'lucide-react';

const rangeItems = [
  {
    icon: Settings,
    title: 'Water Softeners',
    description: 'Full stainless steel vessel design. Removes hardness minerals that damage pipes and appliances.',
    tags: ['SS Vessel', 'Non-Toxic'],
    delay: 0.1
  },
  {
    icon: Filter,
    title: 'Sand Filters',
    description: 'Industrial stainless steel sand filters for turbidity removal in commercial and municipal use.',
    tags: ['Industrial', 'Heavy-Duty'],
    delay: 0.2
  },
  {
    icon: Droplet,
    title: 'Carbon Filters',
    description: 'Activated carbon filtration for chlorine, odour, and chemical contaminant removal.',
    tags: ['Residential', 'Commercial'],
    delay: 0.3
  },
  {
    icon: Beaker,
    title: 'Iron Filters',
    description: 'Removes dissolved iron and manganese from borewell water — common across North India.',
    tags: ['Borewell', 'North India'],
    delay: 0.4
  },
  {
    icon: Thermometer,
    title: 'Water Coolers',
    description: 'Stainless steel water coolers for offices, factories, and public spaces — durable and hygienic.',
    tags: ['Commercial', 'Office'],
    delay: 0.5
  },
  {
    icon: Home,
    title: 'Water Purifiers',
    description: 'Domestic and industrial RO/UV purifiers. Authorised manufacturer for Nasaka, Blue Mount, Hindware and more.',
    tags: ['Domestic', 'Industrial'],
    delay: 0.6
  }
];

export default function OurRangeSection() {
  return (
    <section id="our-range" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">
              Our Range
            </span>
            <div className="h-px w-12 bg-brand-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">
            Water Solutions for Every Scale
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From household purifiers to industrial-grade treatment systems — all manufactured and serviced in-house at our Delhi facility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rangeItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-brand-navy" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6 min-h-[80px]">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
