import { motion } from 'motion/react';

export default function GallerySection() {
  const allImages = [
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0047.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0052.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0051.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0050.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0049.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-12.04.45_df4de1cd.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0055.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0054.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0053.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0057.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0056.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0061.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0060.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0059.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0058.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0062.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0064.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/IMG-20240411-WA0063.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-11.58.21_af086816.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-12.00.18_13d98607.jpg",
    "https://kitasystems.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-11-at-12.00.19_096ea015.jpg"
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Our Portfolio
            </span>
            <div className="h-px w-12 bg-brand-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6"
          >
            Product Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-white/5"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
