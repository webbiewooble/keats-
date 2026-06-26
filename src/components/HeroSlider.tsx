import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://kitasystems.com/wp-content/uploads/2026/06/product-showcase-ultra-compressed.webp',
    title: <><span className="text-black">PURE WATER.</span><br/><span className="text-[#0033a0]">SMART LIVING.</span></>,
    subtitle: 'Advanced water treatment solutions for a healthier home and a better tomorrow.',
    accent: <><span className="text-black">SOFTEN</span> <span className="text-gray-400">|</span> <span className="text-black">PURIFY</span> <span className="text-gray-400">|</span> <span className="text-[#0033a0]">PROTECT</span></>
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
    title: <span className="text-slate-900">Industrial Scale Filtration</span>,
    subtitle: 'Heavy-duty water purification designed for industrial demands.',
    accent: <span className="text-brand-gold">Unmatched Capacity</span>
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2000&auto=format&fit=crop',
    title: <span className="text-slate-900">Sustainable Engineering</span>,
    subtitle: 'Eco-friendly water systems that protect our most valuable resource.',
    accent: <span className="text-brand-gold">Future Forward</span>
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-brand-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-right md:bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/0 via-brand-navy/0 to-transparent" />
          <div className="absolute inset-0 bg-brand-navy/0" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pointer-events-none">
            <div className="max-w-3xl pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight mb-4">
                  {slides[current].title}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col gap-4 mb-6"
              >
                <div className="h-px w-full max-w-sm bg-slate-300" />
                <span className="font-medium tracking-widest uppercase text-lg">
                  {slides[current].accent}
                </span>
                <div className="h-px w-full max-w-sm bg-slate-300" />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl text-slate-800 mb-10 max-w-xl leading-relaxed"
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#services"
                  className="group flex items-center gap-2 bg-brand-gold text-brand-navy px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-colors rounded"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-2 px-8 py-4 font-semibold text-slate-900 border border-slate-900/20 hover:bg-slate-900/10 transition-colors rounded"
                >
                  Discover More
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20 hidden md:flex">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-slate-900/20 flex items-center justify-center text-slate-900 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-slate-900/20 flex items-center justify-center text-slate-900 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20 md:left-auto md:translate-x-0 md:right-10 md:bottom-28">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              current === index ? 'bg-brand-gold w-8' : 'bg-slate-900/30 hover:bg-slate-900/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
