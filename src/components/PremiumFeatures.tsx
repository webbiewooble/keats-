import { Activity, ShieldCheck, Zap, Server } from 'lucide-react';

export default function PremiumFeatures() {
  const features = [
    {
      icon: Server,
      title: "Smart Infrastructure",
      desc: "IoT-enabled treatment plants providing real-time telemetry, data logging, and predictive maintenance alerts to maximize uptime.",
      metric: "Connected",
      metricLabel: "Cloud Analytics"
    },
    {
      icon: Activity,
      title: "Optimized Recovery",
      desc: "Advanced membrane technology and process design ensuring maximum water recovery rates with minimal energy consumption.",
      metric: "High Yield",
      metricLabel: "Efficiency"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      desc: "Variable frequency drives (VFD) and intelligent pressure management reduce operational energy costs significantly.",
      metric: "Eco-Friendly",
      metricLabel: "Operations"
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Compliance",
      desc: "Systems engineered to meet and exceed strict WHO, BIS, and industrial guidelines for specific applications.",
      metric: "Certified",
      metricLabel: "Standards"
    }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-brand-light"></span>
              <span className="text-white text-sm font-bold tracking-widest uppercase">Our Capabilities</span>
            </div>
            <h2 className="text-4xl font-display font-bold tracking-tight mb-6">
              Engineering solutions for the world's toughest water challenges.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              We leverage data-driven insights and rigorous engineering practices to design, construct, and manage water systems that deliver operational excellence, reliability, and sustainability at scale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-[#00458A] p-8 hover:bg-brand-light transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8 text-white">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-8">{feature.desc}</p>
                
                <div className="mt-auto pt-6 border-t border-white/20">
                  <div className="font-bold text-lg text-white">{feature.metric}</div>
                  <div className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{feature.metricLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
