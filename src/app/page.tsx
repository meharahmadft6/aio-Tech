// app/page.tsx
import Navbar from "../components/Navbar";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import CounterSection from "@/components/WhyAIO";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testinominals";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Marque from "@/components/Marque";
import LargerImage from "@/components/LargerImage";
import FuturisticReveal from "@/components/FuturisticSection";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Add this import
import ClientCarousel from "@/components/ClientCarousel";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marque />
      <Services />
      <AboutSection />
      <LargerImage
        imageUrl="/large.png"
        altText="The AIO TECH Digital Services"
      />
      <CounterSection />
      <section className="w-full mb-5">
        <FuturisticReveal imageUrl="/world.png" altText="AIO TECH Platform" />
      </section>
      <Projects />
      <Testimonials />
      <ClientCarousel />
      <Footer />
      <ScrollToTopButton /> {/* Add this component */}
    </>
  );
}
