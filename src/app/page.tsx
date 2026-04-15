import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesPreview from "@/components/ServicesPreview";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <WhyChooseUs />
      <ServicesPreview />
      <BeforeAfterSection />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
