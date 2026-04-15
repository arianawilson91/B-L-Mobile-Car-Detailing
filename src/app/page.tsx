import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesPreview from "@/components/ServicesPreview";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhyChooseUs />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
