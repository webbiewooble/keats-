import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Product {
  id?: string;
  name: string;
  image: string;
  description: string;
}

interface ProductGridProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  bgColor?: 'white' | 'gray';
}

export default function ProductGrid({ id, title, subtitle, products, bgColor = 'white' }: ProductGridProps) {
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-slate-50';
  const borderClass = bgColor === 'white' ? 'border-y border-gray-100' : 'border-t border-gray-100';

  return (
    <section id={id} className={`py-24 ${bgClass} ${borderClass} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-brand-gold" />
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">
              {subtitle}
            </span>
            <div className="h-px w-12 bg-brand-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight mb-6"
          >
            {title}
          </motion.h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
            >
              <Link
                to={`/product/${product.id || 'not-found'}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-brand-gold/30 hover:shadow-[0_20px_40px_rgba(10,25,47,0.08)] transition-all duration-500 hover:-translate-y-2 h-full"
              >
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/5 transition-colors duration-500 z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {product.description}
                  </p>
                  
                  <span className="self-start text-sm font-semibold text-brand-navy group-hover:text-brand-gold transition-colors duration-300 uppercase tracking-wide border-b-2 border-transparent group-hover:border-brand-gold pb-1">
                    View Details
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
