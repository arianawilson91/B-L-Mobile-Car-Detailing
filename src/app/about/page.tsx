import { buildPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildPageMetadata(
  "About",
  "Learn about B&L Auto Detailing. Est. 2024, we're passionate about making every vehicle look its absolute best.",
  "/about"
);

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Image
            src="/logo.png"
            alt="B&L Auto Detailing"
            width={150}
            height={150}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-red-primary">B&L</span>
          </h1>
        </div>

        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Founded in 2024, B&L Auto Detailing was born from a genuine passion
            for cars and a commitment to quality. We believe every vehicle
            deserves to look its best, whether it&apos;s a daily driver or a
            weekend showpiece.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our team takes pride in delivering meticulous, professional detailing
            services that go beyond a simple wash. We use premium products and
            proven techniques to protect your investment and keep your vehicle
            turning heads.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            At B&L, we treat every car like it&apos;s our own. That means no
            cutting corners, no rushing the job, and always going the extra mile
            to make sure you drive away satisfied.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-card-bg border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-primary mb-2">2024</div>
            <div className="text-gray-400">Established</div>
          </div>
          <div className="bg-card-bg border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-primary mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Guaranteed</div>
          </div>
          <div className="bg-card-bg border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-primary mb-2">Premium</div>
            <div className="text-gray-400">Products Only</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-red-primary hover:bg-red-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
