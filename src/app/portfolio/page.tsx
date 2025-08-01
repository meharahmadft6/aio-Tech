import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/EnhancedProject";
import HeroWithBg from "@/components/HeroWith3DBg";
const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroWithBg
          title="Portfolio"
          backgroundImages={[
            "/abstract5.jpg",

            "/abstract3.jpg",
            "/abstract4.jpg",
            "/abstract1.jpg",

            "/abstract7.jpg",
          ]}
        />
      </main>

      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
