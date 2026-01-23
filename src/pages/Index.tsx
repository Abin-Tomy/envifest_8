import { lazy, Suspense } from "react";
import Preloader from "@/components/Preloader";

// Lazy load components for better performance
const HeroSection = lazy(() => import("@/components/HeroSection"));
const CountdownTimer = lazy(() => import("@/components/CountdownTimer"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FeaturedEvents = lazy(() => import("@/components/FeaturedEvents"));
const SponsorsSection = lazy(() => import("@/components/SponsorsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading fallback
const LoadingFallback = () => (
  <Preloader compact message="Deploying ENVI 8 surface" />
);

const Index = () => {
  const eventDate = new Date("2026-02-09T09:00:00");

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <main>
          <HeroSection />
          <CountdownTimer eventDate={eventDate} />
          <AboutSection />
          <FeaturedEvents />
          <SponsorsSection />
          <ContactSection />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
