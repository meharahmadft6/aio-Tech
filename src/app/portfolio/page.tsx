import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/EnhancedProject";
import HeroWithBg from "@/components/HeroWith3DBg";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Add this import

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroWithBg title="Portfolio" />
      </main>
      <Projects />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Portfolio;
