import BeforeAfter from "./BeforeAfter";

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See the <span className="text-red-primary">Difference</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Drag the slider to see what a B&L detail can do.
          </p>
        </div>

        <BeforeAfter
          beforeSrc="/gallery/img_1958.jpg"
          afterSrc="/gallery/img_1950.jpg"
          beforeAlt="Truck being washed, covered in suds"
          afterAlt="Clean white Silverado after detailing"
        />

        <p className="text-gray-500 text-sm text-center mt-6">
          Want your own before &amp; after?{" "}
          <a href="/contact" className="text-red-primary hover:text-white transition-colors">
            Book your detail today
          </a>
        </p>
      </div>
    </section>
  );
}
