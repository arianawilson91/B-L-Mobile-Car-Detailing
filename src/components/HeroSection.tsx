import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/img_1929.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
        {/* Red accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,24,55,0.25)_0%,_transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <Image
            src="/logo.png"
            alt="B&L Auto Detailing"
            width={200}
            height={200}
            className="mx-auto mb-8 drop-shadow-2xl"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up-delay drop-shadow-lg">
          Premium Auto <span className="text-red-primary">Detailing</span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-fade-up-delay-2 drop-shadow">
          Professional mobile car detailing in Cape Coral &amp; surrounding areas.
          We come to you. From basic washes to full detail packages, we treat
          every car like it&apos;s our own.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Link
            href="/services"
            className="bg-red-primary hover:bg-red-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors shadow-lg shadow-red-primary/30"
          >
            View Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 hover:border-white/60 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
