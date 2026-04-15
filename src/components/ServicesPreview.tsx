import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Exterior Wash",
    price: "$50",
    description: "Hand wash, wheel cleaning, tire dressing & more.",
    href: "/services",
  },
  {
    name: "Interior Detail",
    price: "$100",
    description: "Full vacuum, dashboard cleaning, upholstery conditioning.",
    href: "/services",
  },
  {
    name: "Full Detail",
    price: "$200",
    description: "Complete inside & out — clay bar, polish, sealant & more.",
    href: "/services",
    popular: true,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Our <span className="text-red-primary">Packages</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional detailing at competitive prices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.name}
              className={`bg-card-bg border rounded-xl p-6 hover:border-red-primary/50 transition-colors ${
                svc.popular ? "border-red-primary" : "border-white/10"
              }`}
            >
              {svc.popular && (
                <span className="text-xs font-bold text-red-primary uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white mt-1">{svc.name}</h3>
              <div className="text-3xl font-bold text-red-primary mt-2">
                {svc.price}
                <span className="text-sm text-gray-400 font-normal"> starting at</span>
              </div>
              <p className="text-gray-400 mt-3 text-sm">{svc.description}</p>
              <Link
                href={svc.href}
                className="inline-flex items-center gap-1 text-red-primary hover:text-white transition-colors mt-4 text-sm font-medium"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
