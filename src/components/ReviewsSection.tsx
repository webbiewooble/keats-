import { motion } from 'motion/react';
import { Star, MessageSquare, Quote } from 'lucide-react';

interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  role?: string;
  location?: string;
}

export default function ReviewsSection() {
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      text: "The SS water softener is very nice. Great build quality and it's been running perfectly.",
      author: "Ankur Kumar Bhardwaj",
      role: "Verified Customer",
      location: "New Delhi"
    },
    {
      id: 2,
      rating: 5,
      text: "Every product is best quality and affordable. If you're interested, visit them soon — you won't regret it.",
      author: "Pradeep Chauhan",
      role: "Verified Customer",
      location: "Haryana"
    },
    {
      id: 3,
      rating: 5,
      text: "Awesome product along with the best service I have ever seen. Highly recommended.",
      author: "Bohra Rubber",
      role: "Business Owner",
      location: "Punjab"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section 
      id="reviews-section" 
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-gray-100"
    >
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-brand-gold" />
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs sm:text-sm">
              Client Reviews
            </span>
            <div className="h-px w-8 bg-brand-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight mb-6"
          >
            Trusted Across North India
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 font-medium text-base lg:text-lg"
          >
            <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <span className="text-brand-navy font-bold">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-xs text-gray-400">on Google</span>
            </div>
            <span>across 21 reviews. Here's what customers say.</span>
          </motion.div>
        </div>

        <motion.div
          id="reviews-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-[0_4px_20px_-4px_rgba(10,25,47,0.02)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(10,25,47,0.06)] hover:-translate-y-1 relative flex flex-col justify-between group"
            >
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-brand-gold/10 transition-colors duration-300">
                <Quote className="w-10 h-10 stroke-[1.5]" />
              </div>
              
              <div className="relative z-10 flex-1">
                {/* Rating stars */}
                <div className="flex gap-0.5 mb-6" id={`review-stars-${review.id}`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-gray-600 text-base md:text-[15px] lg:text-base leading-relaxed italic mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50/80">
                <div className="w-10 h-10 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center font-bold text-sm tracking-wider uppercase">
                  {review.author.split(' ').map(name => name[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-navy text-[15px] sm:text-base tracking-tight">
                    {review.author}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-brand-gold font-semibold tracking-wide uppercase">
                      {review.role}
                    </span>
                    <span className="text-[10px] text-gray-300">•</span>
                    <span className="text-xs text-gray-400">
                      {review.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
