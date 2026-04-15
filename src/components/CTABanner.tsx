import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-primary/20 to-red-dark/10 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Make Your Car Shine?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Book your detailing appointment today and see the B&L difference.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-red-primary hover:bg-red-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
