// app/page.tsx
import Navbar from "../components/Navbar";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import CounterSection from "@/components/WhyAIO";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testinominals";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutSection />
      <CounterSection />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}
