import { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, CheckCircle2, Droplets, ShowerHead, Settings, ShieldCheck, Zap, Truck, Wrench, Factory, FileText, ArrowRight, Activity, ThermometerSun, AlertTriangle, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Models available", value: "10+" },
    { label: "Installation in Kanpur", value: "Free" },
    { label: "After-sales support", value: "24×7" },
    { label: "Delivery charges", value: "₹0" }
  ];

  const problems = [
    { title: "Hair Fall & Dryness", desc: "Calcium deposits strip natural oils from scalp and hair.", icon: Droplets },
    { title: "Dry, Itchy Skin", desc: "Hard water clogs pores and leaves a film after every wash.", icon: ThermometerSun },
    { title: "Scale on Appliances", desc: "Geysers, washing machines, and pipelines corrode faster.", icon: AlertTriangle },
    { title: "Stiff, Faded Clothes", desc: "Hard water prevents detergent from lathering and rinses poorly.", icon: ShieldAlert }
  ];

  const products = [
    {
      name: "Kita Soft A3",
      type: "Automatic, Home/Small Office",
      specs: [
        { label: "Flow rate", value: "2,000 L/hr" },
        { label: "Output @ 200 ppm hardness", value: "14,000 L" },
        { label: "Resin volume", value: "50 L" },
        { label: "Valve type", value: "Auto top-mount" }
      ],
      link: "/product/kita-soft-a3",
      popular: false
    },
    {
      name: "Kita Soft A6",
      type: "Automatic, Apartment/Villa",
      specs: [
        { label: "Flow rate", value: "4,000 L/hr" },
        { label: "Output @ 200 ppm hardness", value: "32,000 L" },
        { label: "Resin volume", value: "100 L" },
        { label: "Valve type", value: "Auto top-mount" }
      ],
      link: "/product/kita-soft-a6",
      popular: true
    },
    {
      name: "Kita Soft A9",
      type: "Automatic, Commercial/Factory",
      specs: [
        { label: "Flow rate", value: "6,000 L/hr" },
        { label: "Output @ 200 ppm hardness", value: "50,000 L" },
        { label: "Resin volume", value: "150 L" },
        { label: "Valve type", value: "Auto top-mount" }
      ],
      link: "/product/kita-soft-a9",
      popular: false
    },
    {
      name: "Kita Soft M6",
      type: "Manual, Industry/Borewell",
      specs: [
        { label: "Flow rate", value: "4,000 L/hr" },
        { label: "Output @ 200 ppm hardness", value: "32,000 L" },
        { label: "Resin volume", value: "100 L" },
        { label: "Valve type", value: "Manual side-mount" }
      ],
      link: "/product/kita-soft-m6",
      popular: false
    }
  ];

  const process = [
    { title: "Hard Water In", desc: "Municipal or borewell water with high calcium and magnesium enters the vessel.", icon: ShowerHead },
    { title: "Ion Exchange", desc: "Food-grade resin beads swap hardness minerals for harmless sodium ions.", icon: Activity },
    { title: "Soft Water Out", desc: "Treated water flows to your taps, showers, and appliances — zero scale.", icon: Droplets },
    { title: "Auto Regeneration", desc: "The system recharges the resin with salt overnight — fully automatic.", icon: Settings }
  ];

  const benefits = [
    { title: "Free Delivery in Kanpur", desc: "We ship directly to your address at zero delivery charge, anywhere in Kanpur city and districts.", icon: Truck },
    { title: "Free Installation", desc: "Our technician visits your site and installs the unit — no hidden service fees.", icon: Wrench },
    { title: "24×7 Support", desc: "Call our toll-free line any time. Kanpur service requests are prioritised for same-day response.", icon: Phone },
    { title: "Food-Grade Resin", desc: "All Kita softeners use certified food-grade cation exchange resin — safe for drinking-adjacent water.", icon: ShieldCheck },
    { title: "Fully Automatic", desc: "Automatic multiport valves regenerate the resin on a timer — no manual backwashing required.", icon: Zap },
    { title: "Residential & Industrial", desc: "Models range from compact home units (A3) to high-flow industrial systems (M14) for factories.", icon: Factory }
  ];

  const faqs = [
    {
      q: "What is the best water softener for home use in Kanpur?",
      a: "For a typical 3–4 BHK home in Kanpur, the Kita Soft A3 or A6 is the most suitable option. The A3 handles flows up to 2,000 L/hr and works well for single-floor homes, while the A6 suits larger villas or apartments with multiple bathrooms. Both models regenerate automatically overnight and require no daily maintenance."
    },
    {
      q: "How much does a water softener cost in Kanpur?",
      a: "Kita Systems water softener prices vary by model and capacity. Home models (A3, A4, A6) are priced affordably for residential budgets, while industrial units (M9, M14) are sized and priced for commercial requirements. Contact us on our toll-free number (1800-270-1121) for the latest Kanpur pricing and any running offers."
    },
    {
      q: "Does Kita Systems provide installation in Kanpur?",
      a: "Yes — Kita Systems offers free installation with every water softener purchased. Our technician will visit your home or site in Kanpur, connect the unit to your main water line, and configure the regeneration timer. Installation is typically completed within 1–2 hours."
    },
    {
      q: "How often does a water softener need salt refilling?",
      a: "Salt consumption depends on water hardness and daily usage. In Kanpur's typically hard water (300–500 ppm), most home units need the brine tank topped up roughly every 4–6 weeks. The Kita Soft A3, for example, uses about 8 kg of industrial salt per regeneration cycle. Our team advises you on the exact schedule based on your water test results."
    },
    {
      q: "Is softened water safe for drinking?",
      a: "Water softeners are primarily intended for household and industrial applications — bathing, laundry, appliances, and pipe protection. The ion-exchange process replaces calcium and magnesium with sodium, which at higher levels may not be ideal for direct drinking. We recommend pairing a water softener with an RO purifier for drinking water. Kita Systems also supplies domestic water purifiers for a complete solution."
    },
    {
      q: "What is the warranty on Kita water softeners?",
      a: "Kita Systems offers manufacturer warranty on all water softener units, covering defects in the multiport valve, vessel, and resin. The exact warranty period varies by model. For warranty terms specific to your chosen unit, please call our support team at 1800-270-1121 or write to support@kitasystems.com."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80 z-10"></div>
          <img 
            src="https://kitasystems.com/wp-content/uploads/2026/06/product-showcase-ultra-compressed.webp" 
            alt="Water Softener Kanpur" 
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" /> Kanpur, Uttar Pradesh
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight">
                Best Water Softener in Kanpur <br className="hidden md:block"/>
                <span className="text-brand-gold">— Hard Water Solved</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Kanpur's water is among the hardest in UP, with TDS levels routinely above 400 ppm. Kita Systems supplies and installs automatic water softeners for homes, factories, and commercial buildings across the city.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/#contact" className="inline-flex justify-center items-center px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded hover:bg-white transition-colors duration-300">
                  Get a Free Quote
                </Link>
                <a href="tel:18002701121" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-brand-navy transition-colors duration-300">
                  <Phone className="w-5 h-5 mr-2" /> Call 1800-270-1121
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white mb-1">{stat.value}</span>
                <span className="text-sm text-brand-light-gray/80 uppercase tracking-wide font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">What Hard Water Does in Kanpur Homes</h2>
            <p className="text-gray-600 text-lg">The signs of hard water are everywhere. Here is what it's doing to your home and health.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Choose the Right Model for Your Needs</h2>
            <p className="text-gray-600 text-lg">All models use food-grade resin, automatic multiport valves, and industrial salt regeneration.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col bg-white rounded-2xl border ${product.popular ? 'border-brand-gold shadow-lg shadow-brand-gold/5' : 'border-gray-200'} p-6 transition-all duration-300 hover:-translate-y-1`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular in Kanpur
                  </div>
                )}
                
                <h3 className="font-display font-bold text-2xl text-brand-navy mt-4 mb-1">{product.name}</h3>
                <p className="text-sm text-brand-gold font-semibold mb-6 pb-6 border-b border-gray-100">{product.type}</p>
                
                <div className="flex-1 space-y-4 mb-8">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">{spec.label}</span>
                      <span className="text-sm font-semibold text-brand-navy">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <Link to={product.link} className="mt-auto w-full inline-flex justify-center items-center py-3 bg-slate-50 text-brand-navy font-semibold rounded border border-gray-200 hover:bg-brand-navy hover:text-white transition-colors duration-300">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">How a Kita Softener Works</h2>
            <p className="text-gray-400 text-lg">The proven science behind our automatic water softening technology.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-brand-gold/40 to-transparent"></div>
                  )}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center mb-6 font-display font-bold text-xl relative z-10">
                      {idx + 1}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY KITA SYSTEMS */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">What Makes Us the Right Choice in Kanpur</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">Hard Water in Kanpur — What the Data Says</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Kanpur draws a large share of its municipal water from the Ganga river and groundwater borewells. Groundwater in many parts of the city — particularly industrial zones like Panki, Dada Nagar, and Govind Nagar — carries total dissolved solids (TDS) between <strong className="text-brand-navy">350 and 600 ppm</strong>, well above the BIS acceptable limit of 200 ppm for drinking water.
                </p>
                <p>
                  The textile and leather industries in Kanpur further stress city infrastructure, leaving residential pipelines susceptible to mineral build-up. Residents in older colonies like Kidwai Nagar, Arya Nagar, and Swaroop Nagar often report white scale on geysers and bathroom fittings within months of installation — a direct sign of extreme hardness.
                </p>
                <p>
                  A water softener using ion-exchange technology is the most reliable long-term solution. Kita Systems serves homes, hospitals, hotels, and small factories across the Kanpur district.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 mt-8">
                  <h4 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-gold" /> Areas Served in Kanpur:
                  </h4>
                  <p className="text-sm font-medium">Panki, Govind Nagar, Kidwai Nagar, Arya Nagar, Swaroop Nagar, Civil Lines, Kakadeo, Kalyanpur, Rama Devi, Unnao Road</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://kitasystems.com/wp-content/uploads/2026/06/product-showcase-ultra-compressed.webp" alt="Kanpur Local Context" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 lg:py-28 bg-brand-navy text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6">Get Soft Water in Your Kanpur Home Today</h2>
          <p className="text-xl text-brand-gold font-medium mb-10">Free site visit · Free installation · Same-week delivery across Kanpur</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:18002701121" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold font-bold rounded hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 text-lg">
              <Phone className="w-5 h-5 mr-2" /> 1800-270-1121 (Toll-free)
            </a>
            <Link to="/#contact" className="inline-flex justify-center items-center px-8 py-4 bg-white text-brand-navy font-bold rounded hover:bg-gray-100 transition-colors duration-300 text-lg">
              Send an Enquiry <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">People Also Ask in Kanpur</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3 flex items-start gap-4">
                  <span className="text-brand-gold shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed flex items-start gap-4">
                  <span className="text-gray-400 font-bold shrink-0">A:</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
