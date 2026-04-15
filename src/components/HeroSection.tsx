import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,24,55,0.15)_0%,_transparent_70%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <Image
            src="/logo.png"
            alt="B&L Auto Detailing"
            width={200}
            height={200}
            className="mx-auto mb-8"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up-delay">
          Premium Auto{" "}
          <span className="text-red-primary">Detailing</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-up-delay-2">
          Professional car detailing that brings out the best in your vehicle.
          From basic washes to full detail packages, we treat every car like
          it&apos;s our own.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Link
            href="/services"
            className="bg-red-primary hover:bg-red-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            View Our Services
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
