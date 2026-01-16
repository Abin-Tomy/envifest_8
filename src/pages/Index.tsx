import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import AboutSection from "@/components/AboutSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const eventDate = new Date("2026-02-09T09:00:00");

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <main>
        <HeroSection />
        <CountdownTimer eventDate={eventDate} />
        <AboutSection />
        <FeaturedEvents />
        <SponsorsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
