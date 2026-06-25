import { HeroSection } from "@/components/sections/hero-section";
import { ProductGroupsSection } from "@/components/sections/product-groups-section";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { ContactSection } from "@/components/sections/contact-section";
import { CountersSection } from "@/components/sections/counters-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LocationSection } from "@/components/sections/location-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <ProductGroupsSection />

      <PartnersMarquee />

      <CountersSection />

      <TestimonialsSection />

      <ContactSection />

      <FaqSection />

      <LocationSection />
    </main>
  );
}
