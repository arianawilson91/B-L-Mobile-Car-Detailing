import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    quote:
      "B&L did an incredible job on my truck. It looked better than when I bought it. Definitely coming back for regular details.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    quote:
      "Super professional and thorough. They got stains out of my seats that I thought were permanent. Highly recommend!",
    rating: 5,
  },
  {
    name: "David R.",
    quote:
      "Best detailing service in Cape Coral. Fair prices and the results speak for themselves. My Camaro has never looked this good.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          What Our Customers <span className="text-red-primary">Say</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Don&apos;t just take our word for it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card-bg border border-white/10 rounded-xl p-8 hover:border-red-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-red-primary text-red-primary"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="text-white font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
