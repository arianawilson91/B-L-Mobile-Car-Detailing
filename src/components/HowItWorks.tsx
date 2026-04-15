import { Phone, Car, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book Your Detail",
    description:
      "Call, text, or fill out our quick form to schedule your appointment. We'll confirm a time that works for you.",
  },
  {
    number: "02",
    icon: Car,
    title: "We Come to You",
    description:
      "Mobile service means zero hassle. We bring all the equipment, water, and premium products right to your driveway.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Drive Away Happy",
    description:
      "Inspect the finished result. If you love it (you will), you're done. Showroom shine delivered every time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It <span className="text-red-primary">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three simple steps from booking to a spotless ride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-red-primary/0 via-red-primary/40 to-red-primary/0 z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 bg-card-bg border border-white/10 rounded-xl p-8 text-center hover:border-red-primary/40 transition-colors"
            >
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-primary text-white font-bold text-lg mb-4 shadow-lg shadow-red-primary/30">
                {step.number}
              </div>
              <div className="flex justify-center mb-4">
                <step.icon className="w-10 h-10 text-red-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
