import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import { useEffect } from 'react';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find product in all categories
  const allProducts = [
    ...products.waterAppliances,
    ...products.homeAppliances,
    ...products.treatments,
    ...products.ionizers
  ];
  
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Product Not Found</h2>
        <Link to="/" className="text-brand-gold hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-2xl p-8 border border-gray-100 sticky top-32"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-brand-gold" />
              <span className="text-brand-gold font-medium tracking-widest uppercase text-xs">
                Product Details
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight mb-6">
              {product.name}
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="bg-slate-50 border border-gray-100 rounded-xl p-8 mb-8">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Key Features</h3>
              <ul className="space-y-3">
                {['Premium Build Quality', 'Advanced Filtration Technology', 'High Performance Capacity', 'Energy Efficient Operation'].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contact"
                className="inline-flex justify-center items-center gap-2 bg-brand-navy text-white px-8 py-4 font-semibold hover:bg-brand-gold hover:text-brand-navy transition-colors rounded shadow-lg"
              >
                Request a Quote
              </Link>
              <a
                href="mailto:info@kitawater.com"
                className="inline-flex justify-center items-center gap-2 bg-white border-2 border-gray-200 text-brand-navy px-8 py-4 font-semibold hover:border-brand-navy transition-colors rounded"
              >
                Contact Sales
              </a>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}
