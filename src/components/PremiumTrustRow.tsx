import { Award, Globe, ShieldCheck, Clock } from 'lucide-react';

export default function PremiumTrustRow() {
  const stats = [
    { label: "Years of Excellence", value: "10+", icon: Award },
    { label: "Global Reach", value: "Multi-Region", icon: Globe },
    { label: "Quality Assured", value: "ISO 9001", icon: ShieldCheck },
    { label: "Technical Support", value: "24/7", icon: Clock }
  ];

  return (
    <div className="bg-brand-light-gray border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-300">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center text-center py-10 px-4 group">
                <div className="mb-4 text-brand-navy">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-display font-bold text-brand-navy mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-brand-gray uppercase tracking-widest">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
