import { ShieldCheck, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description:
      "We use only premium, professional-grade products that protect your vehicle's finish and interior.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description:
      "Every inch of your vehicle gets the care it deserves. No shortcuts, no rush jobs.",
  },
  {
    icon: Clock,
    title: "Convenient Service",
    description:
      "Flexible scheduling to fit your busy life. We work around your schedule, not the other way around.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Why Choose <span className="text-red-primary">B&L</span>?
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We&apos;re passionate about cars and it shows in every detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card-bg border border-white/10 rounded-xl p-8 text-center hover:border-red-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-primary/10 text-red-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
