import { useState } from 'react';
import { ArrowRight, Droplets, Factory, Home, Settings } from 'lucide-react';
import { products } from '../data/products';

type Category = 'industrial' | 'commercial' | 'residential';

export default function PremiumSolutions() {
  const [activeTab, setActiveTab] = useState<Category>('industrial');

  const categories = [
    { id: 'industrial', label: 'Industrial Plants', icon: Factory, data: products.industrialRO },
    { id: 'commercial', label: 'Commercial Systems', icon: Settings, data: products.waterCoolers },
    { id: 'residential', label: 'Residential Purity', icon: Home, data: products.purifiers }
  ];

  const currentProducts = categories.find(c => c.id === activeTab)?.data?.slice(0, 3) || [];

  return (
    <section id="solutions" className="py-24 bg-brand-light-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-1 bg-brand-light"></span>
            <span className="text-brand-navy text-sm font-bold tracking-widest uppercase">Our Portfolio</span>
          </div>
          <h2 className="text-4xl font-display font-bold text-brand-navy tracking-tight mb-8">
            Products & Services
          </h2>

          <div className="flex flex-wrap gap-2 border-b border-gray-300">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as Category)}
                  className={`px-6 py-4 font-bold flex items-center gap-2 transition-all ${
                    isActive ? 'border-b-4 border-brand-navy text-brand-navy' : 'text-gray-500 hover:text-brand-navy'
                  }`}
                >
                  <Icon className="w-5 h-5" /> {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-light uppercase tracking-wider mb-2">{activeTab}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{product.name}</h3>
                <p className="text-sm text-brand-gray mb-6 flex-1 line-clamp-3">
                  {product.description}
                </p>
                
                {product.specs && (
                  <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-gray-200">
                    {product.specs.slice(0, 2).map((spec, sIdx) => (
                      <div key={sIdx}>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{spec.label}</div>
                        <div className="text-sm font-bold text-brand-navy">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                <a href={`/product/${product.id}`} className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm hover:text-brand-light transition-colors mt-auto group">
                  View Product <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-brand-navy text-white font-bold rounded-sm hover:bg-brand-light transition-colors group">
            Explore All Products <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
