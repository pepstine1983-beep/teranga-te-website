/**
 * Teranga Flow Design - Home Page
 * Assembles all sections into a single-page scrolling experience.
 * Design: Organic Sahélien with warm golden/blue palette, fluid wave separators.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import KeyFiguresSection from "@/components/sections/KeyFiguresSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertisesSection from "@/components/sections/ExpertisesSection";
import OffresSection from "@/components/sections/OffresSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import SahelSection from "@/components/sections/SahelSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <KeyFiguresSection />
        <AboutSection />
        <ExpertisesSection />
        <OffresSection />
        <ReferencesSection />
        <SahelSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
