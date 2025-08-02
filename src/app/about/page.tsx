import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrainforceWelcomeSection from "@/components/AboutEnhanced";
import AIDigitalSolutions from "@/components/Services";
import Testimonials from "@/components/Testinominals";
import HeroWithBg from "@/components/HeroWith3DBg";
import ClientCarousel from "@/components/ClientCarousel";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Add this import

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />
      <HeroWithBg title="About" backgroundImages={["/abstract1.jpg"]} />
      <BrainforceWelcomeSection />
      <AIDigitalSolutions />
      <div className="mt-5">
        <Testimonials />
      </div>
      <ClientCarousel />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default About;
