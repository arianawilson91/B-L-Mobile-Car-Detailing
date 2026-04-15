import { buildPageMetadata } from "@/lib/metadata";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = buildPageMetadata(
  "Gallery",
  "See the results of our professional car detailing work. Before and after photos from sports cars to trucks, SUVs, and RVs.",
  "/gallery"
);

const photos = [
  { src: "/gallery/img_1929.jpg", alt: "Detailed black Camaro exterior", caption: "Black Camaro — Full Detail" },
  { src: "/gallery/img_1931.jpg", alt: "Vehicle exterior detail", caption: "Exterior Wash & Shine" },
  { src: "/gallery/img_1932.jpg", alt: "Clean vehicle exterior", caption: "Exterior Detail" },
  { src: "/gallery/img_1933.jpg", alt: "Detailed Jeep Wrangler", caption: "Jeep Wrangler — Full Detail" },
  { src: "/gallery/img_1934.jpg", alt: "Vehicle detail work", caption: "Detail Work" },
  { src: "/gallery/img_1936.jpg", alt: "Detailing in progress", caption: "In Progress" },
  { src: "/gallery/img_1937.jpg", alt: "Clean interior detail", caption: "Interior Deep Clean" },
  { src: "/gallery/img_1939.jpg", alt: "Interior detailing result", caption: "Interior Detail" },
  { src: "/gallery/img_1940.jpg", alt: "Fresh interior cleaning", caption: "Fresh Interior" },
  { src: "/gallery/img_1941.jpg", alt: "Detailed vehicle interior", caption: "Interior Conditioning" },
  { src: "/gallery/img_1942.jpg", alt: "Interior detail close-up", caption: "Interior Close-Up" },
  { src: "/gallery/img_1944.jpg", alt: "Red Volvo exterior detail", caption: "Volvo XC60 — Full Detail" },
  { src: "/gallery/img_1945.jpg", alt: "Volvo side detail", caption: "Volvo Side Profile" },
  { src: "/gallery/img_1946.jpg", alt: "Clean exterior finish", caption: "Polished Finish" },
  { src: "/gallery/img_1947.jpg", alt: "Wheel and tire detail", caption: "Wheel & Tire Detail" },
  { src: "/gallery/img_1948.jpg", alt: "Vehicle detail result", caption: "Detail Result" },
  { src: "/gallery/img_1949.jpg", alt: "Truck exterior detail", caption: "Truck Exterior" },
  { src: "/gallery/img_1950.jpg", alt: "White Silverado detail", caption: "Silverado — Full Detail" },
  { src: "/gallery/img_1951.jpg", alt: "Truck detail work", caption: "Truck Detail" },
  { src: "/gallery/img_1952.jpg", alt: "SUV exterior detail", caption: "SUV Exterior Wash" },
  { src: "/gallery/img_1953.jpg", alt: "Vehicle wash result", caption: "Wash Result" },
  { src: "/gallery/img_1954.jpg", alt: "Detailed truck exterior", caption: "Truck Polish" },
  { src: "/gallery/img_1955.jpg", alt: "Clean back seat interior", caption: "Back Seat Detail" },
  { src: "/gallery/img_1956.jpg", alt: "Ford Bronco exterior detail", caption: "Ford Bronco — Exterior" },
  { src: "/gallery/img_1957.jpg", alt: "Vehicle detail finish", caption: "Tire Dressing" },
  { src: "/gallery/img_1958.jpg", alt: "Detail work in progress", caption: "Wash In Progress" },
  { src: "/gallery/img_1959.jpg", alt: "Vehicle cleaning result", caption: "Cleaning Result" },
  { src: "/gallery/img_1960.jpg", alt: "Clean vehicle finish", caption: "Clean Finish" },
  { src: "/gallery/img_1961.jpg", alt: "Detailed vehicle", caption: "Detailed & Ready" },
  { src: "/gallery/img_1962.jpg", alt: "Mercedes RV detail", caption: "Mercedes RV — Full Detail" },
  { src: "/gallery/img_1963.jpg", alt: "RV exterior cleaning", caption: "RV Exterior" },
  { src: "/gallery/img_1964.jpg", alt: "Large vehicle detail", caption: "Large Vehicle Detail" },
  { src: "/gallery/img_1966.jpg", alt: "Boat detail work", caption: "Marine Detailing" },
  { src: "/gallery/img_1968.jpg", alt: "Marine detailing", caption: "Boat Detail" },
  { src: "/gallery/img_1969.jpg", alt: "Detail project", caption: "Detail Project" },
  { src: "/gallery/img_1970.jpg", alt: "Exterior detail result", caption: "Exterior Result" },
  { src: "/gallery/img_1971.jpg", alt: "Completed detail job", caption: "Completed Job" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-primary">Work</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From sports cars to trucks, SUVs, and even RVs — we handle it all.
            Click any photo to view full size.
          </p>
        </div>

        <GalleryGrid photos={photos} />

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Want your vehicle to look this good? Tag us on social media or{" "}
            <a href="/contact" className="text-red-primary hover:text-white transition-colors">
              get in touch
            </a>{" "}
            to book your detail.
          </p>
        </div>
      </div>
    </section>
  );
}
