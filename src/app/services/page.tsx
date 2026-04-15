import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = buildPageMetadata(
  "Services",
  "Explore our car detailing packages: Exterior Wash, Interior Detail, and Full Detail. Professional results at competitive prices.",
  "/services"
);

const packages = [
  {
    name: "Exterior Wash",
    price: "$50",
    slug: "exterior-wash",
    description:
      "A thorough hand wash and dry to restore your vehicle's exterior shine.",
    features: [
      "Hand wash & dry",
      "Wheel & tire cleaning",
      "Window cleaning",
      "Tire dressing",
      "Door jamb wipe-down",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    price: "$200",
    slug: "full-detail",
    description:
      "The complete package. Inside and out, your car will look showroom-ready.",
    features: [
      "Everything in Exterior Wash",
      "Everything in Interior Detail",
      "Clay bar treatment",
      "Machine polish",
      "Sealant / wax protection",
      "Engine bay cleaning",
      "Headlight restoration",
    ],
    popular: true,
  },
  {
    name: "Interior Detail",
    price: "$100",
    slug: "interior-detail",
    description:
      "Deep clean every surface inside your vehicle for a fresh, like-new feel.",
    features: [
      "Full vacuum (seats, carpet, trunk)",
      "Dashboard & console cleaning",
      "Leather / upholstery conditioning",
      "Window cleaning (interior)",
      "Air freshener treatment",
      "Door panel detailing",
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-primary">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the package that fits your needs. Every service is performed
            with care, using premium products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card-bg border rounded-xl p-8 flex flex-col ${
                pkg.popular
                  ? "border-red-primary shadow-lg shadow-red-primary/20"
                  : "border-white/10"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h2 className="text-2xl font-bold text-white mb-2">
                {pkg.name}
              </h2>
              <div className="text-4xl font-bold text-red-primary mb-4">
                {pkg.price}
                <span className="text-sm text-gray-400 font-normal">
                  {" "}starting at
                </span>
              </div>
              <p className="text-gray-400 mb-6">{pkg.description}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <Check className="w-5 h-5 text-red-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?service=${pkg.slug}`}
                className={`text-center py-3 rounded-md font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-red-primary hover:bg-red-dark text-white"
                    : "border border-white/20 hover:border-white/40 text-white"
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Prices may vary based on vehicle size and condition.{" "}
            <Link href="/contact" className="text-red-primary hover:text-white transition-colors">
              Contact us
            </Link>{" "}
            for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
}
