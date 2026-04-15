import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const previewPhotos = [
  { src: "/gallery/img_1929.jpg", alt: "Black Camaro full detail" },
  { src: "/gallery/img_1944.jpg", alt: "Red Volvo exterior detail" },
  { src: "/gallery/img_1937.jpg", alt: "Clean leather interior" },
  { src: "/gallery/img_1956.jpg", alt: "Ford Bronco exterior wash" },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Our Recent <span className="text-red-primary">Work</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          See the B&L difference for yourself.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {previewPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-red-primary hover:text-white transition-colors font-medium"
          >
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
