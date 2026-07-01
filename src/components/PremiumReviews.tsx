import { Star, Quote } from 'lucide-react';

export default function PremiumReviews() {
  const reviews = [
    {
      text: "The SS water softener is very nice. Great build quality and it's been running perfectly since installation.",
      author: "Ankur Kumar Bhardwaj",
      company: "Residential Client"
    },
    {
      text: "Every product is of the highest quality and affordable. If you're interested, visit them soon — you won't regret it.",
      author: "Pradeep Chauhan",
      company: "Commercial Client"
    },
    {
      text: "Awesome product along with the best service team I have ever seen. Highly recommended for industrial needs.",
      author: "Bohra Rubber",
      company: "Industrial Client"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-brand-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-brand-light"></span>
            <span className="text-brand-navy text-sm font-bold tracking-widest uppercase">Client Testimonials</span>
          </div>
          <h2 className="text-4xl font-display font-bold text-brand-navy mb-6">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-brand-light-gray p-8 relative border-t-4 border-brand-navy"
            >
              <div className="absolute top-6 right-6 text-brand-light opacity-20">
                <Quote className="w-10 h-10" />
              </div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-brand-navy fill-brand-navy" />
                ))}
              </div>
              <p className="text-brand-gray text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <div className="font-bold text-brand-navy">{review.author}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{review.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
