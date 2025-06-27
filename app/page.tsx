import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FounderSection } from "@/components/sections/founder-section";
import { InitiativesSection } from "@/components/sections/initiatives-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { GetInvolvedSection } from "@/components/sections/get-involved-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TeamSection } from "@/components/sections/team-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ArtisanDirectorySection } from "@/components/sections/artisan-directory-section";
import { MapSection } from "@/components/sections/map-section";

export default function HomePage() {
  const companyLatitude = 0.080972; // Converted from 0°04'51.5"N
  const companyLongitude = 34.722056; // Converted from 34°43'19.4"E

  const companyName = "Starbornlab Kenya";
  const companyDescription = "Find us at our main office!";
  const mapZoomLevel = 16;

  return (
    <div className="min-h-screen bg-neutral-light overflow-x-hidden">
      <AnimatedBackground />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <TeamSection />
      <ArtisanDirectorySection />
      <InitiativesSection />
      <TestimonialsSection />
      <ImpactSection />
      <GetInvolvedSection />
      <FaqSection />
      <MapSection
        latitude={companyLatitude}
        longitude={companyLongitude}
        title={`Visit ${companyName}`}
        description={companyDescription}
        markerTitle={companyName}
        zoom={mapZoomLevel}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
