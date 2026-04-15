import { buildPageMetadata } from "@/lib/metadata";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = buildPageMetadata(
  "Contact",
  "Get in touch with B&L Auto Detailing. Request a quote or book your detailing appointment today.",
  "/contact"
);

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in <span className="text-red-primary">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to get your car detailed? Reach out and we&apos;ll get you
            scheduled.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Suspense
            fallback={
              <div className="bg-card-bg border border-white/10 rounded-xl p-8 animate-pulse">
                <div className="h-8 bg-gray-800 rounded w-1/2 mb-6" />
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-12 bg-gray-800 rounded" />
                  ))}
                </div>
              </div>
            }
          >
            <ContactForm />
          </Suspense>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card-bg border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Info
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-red-primary mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <a
                      href="tel:+12392036581"
                      className="text-white hover:text-red-primary transition-colors"
                    >
                      (239) 203-6581
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-red-primary mt-0.5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a
                      href="mailto:bldetailing3@gmail.com"
                      className="text-white hover:text-red-primary transition-colors"
                    >
                      bldetailing3@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-red-primary mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white">
                      Cape Coral, FL &amp; Surrounding Areas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card-bg border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Hours</h2>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday &ndash; Friday</span>
                  <span className="text-white">8:00 AM &ndash; 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">9:00 AM &ndash; 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
