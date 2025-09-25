import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import FounderSection from "@/components/Home/FounderSection";
import PartnersSection from "@/components/Home/PartnersSection";
import RibbonSection from "@/components/Home/RibbonSection";
import AimVisionSection from "@/components/Home/AimVisionSection";
import ServicesSection from "@/components/Home/ServicesSection";
import GalleryPreviewSection from "@/components/Home/GalleryPreviewSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FounderSection />
      <PartnersSection />
      <AimVisionSection />
      <RibbonSection />
      <ServicesSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <RibbonSection />
      <ContactSection />
    </Layout>
  );
}