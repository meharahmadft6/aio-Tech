import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrainforceWelcomeSection from "@/components/AboutEnhanced";
import AIDigitalSolutions from "@/components/Services";
import Testimonials from "@/components/Testinominals";
import HeroWithBg from "@/components/HeroWith3DBg";
import ClientCarousel from "@/components/ClientCarousel";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />

      <HeroWithBg
        title="About"
        backgroundImages={[
          "/abstract3.jpg",
          "/abstract7.jpg",
          "/abstract1.jpg",
          "/abstract5.jpg",

          "/abstract4.jpg",
        ]}
      />

      <BrainforceWelcomeSection />
      <AIDigitalSolutions />
      <div className="mt-5">
        <Testimonials />
      </div>
      <ClientCarousel />
      <Footer />
    </div>
  );
};

export default About;
