import { motion } from 'motion/react';
import { Award, Star, ShieldCheck, Headphones } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ElementType;
  value: string;
  label: string;
  sublabel?: string;
  colorClass: string;
  iconBgClass: string;
  renderExtra?: () => React.ReactNode;
}

export default function TrustStatsBar() {
  const stats: StatItem[] = [
    {
      id: 'stat-years',
      icon: Award,
      value: '10+',
      label: 'Years in Business',
      sublabel: 'Trusted Industry Experts',
      colorClass: 'text-brand-gold',
      iconBgClass: 'bg-brand-gold/10 text-brand-gold',
    },
    {
      id: 'stat-rating',
      icon: Star,
      value: '5★',
      label: 'Google Rating',
      sublabel: 'Based on Client Reviews',
      colorClass: 'text-yellow-500',
      iconBgClass: 'bg-yellow-500/10 text-yellow-500',
      renderExtra: () => (
        <div className="flex gap-0.5 mt-1 justify-center xl:justify-start" id="stat-stars-row">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      )
    },
    {
      id: 'stat-warranty',
      icon: ShieldCheck,
      value: '1+yr',
      label: 'Product Warranty',
      sublabel: 'Guaranteed Reliability',
      colorClass: 'text-blue-600',
      iconBgClass: 'bg-blue-600/10 text-blue-600',
    },
    {
      id: 'stat-support',
      icon: Headphones,
      value: '24/7',
      label: 'Toll-Free Support',
      sublabel: 'Always Here To Help',
      colorClass: 'text-brand-navy',
      iconBgClass: 'bg-brand-navy/10 text-brand-navy',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      id="trust-stats-section" 
      className="relative z-25 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-gray-100/80 py-10 lg:py-14 shadow-[0_4px_25px_-5px_rgba(10,25,47,0.03)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          id="stats-grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-100"
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={stat.id} 
                id={stat.id}
                variants={itemVariants}
                className={`flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-4 lg:gap-5 ${
                  idx > 1 ? 'pt-6 lg:pt-0' : idx > 0 ? 'pt-6 sm:pt-0' : ''
                } ${idx > 0 ? 'lg:pl-8 xl:pl-10' : ''}`}
              >
                <div 
                  id={`${stat.id}-icon-wrapper`}
                  className={`flex-shrink-0 w-12 h-12 rounded-xl ${stat.iconBgClass} flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-105`}
                >
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>
                
                <div id={`${stat.id}-content-wrapper`} className="flex-1 min-w-0">
                  <div className="flex flex-col items-center xl:items-start">
                    <span 
                      id={`${stat.id}-value`}
                      className={`font-display text-2xl lg:text-3xl font-extrabold tracking-tight ${stat.colorClass}`}
                    >
                      {stat.value}
                    </span>
                    <span 
                      id={`${stat.id}-label`}
                      className="text-brand-navy font-bold text-[14px] lg:text-[15px] mt-0.5 tracking-wide uppercase"
                    >
                      {stat.label}
                    </span>
                    <span 
                      id={`${stat.id}-sublabel`}
                      className="text-gray-500 text-xs mt-0.5 font-medium leading-relaxed"
                    >
                      {stat.sublabel}
                    </span>
                    {stat.renderExtra && stat.renderExtra()}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
