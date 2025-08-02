import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIDigitalSolutions from "@/components/EnhancedService";
import WhyAIO from "@/components/WhyAIO";
import HeroWithBg from "@/components/HeroWith3DBg";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Add this import

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroWithBg title="Services" backgroundImages={["/abstract1.jpg"]} />

        <AIDigitalSolutions />
        {/* Stats Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left big card */}
            <div className="bg-black text-left p-10 rounded-2xl lg:col-span-1">
              <h3
                className="text-5xl md:text-6xl font-bold mb-4 
        bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 
        text-transparent bg-clip-text"
              >
                5 million
              </h3>
              <p className="text-lg font-semibold text-white mb-2">
                Revenue Growth
              </p>
              <p className="text-gray-300">
                Generated over 5 million in additional revenue for our clients
              </p>
            </div>

            {/* Right two stats */}
            <div className="flex flex-col gap-8 lg:col-span-2 lg:flex-row lg:justify-between">
              <div className="flex-1 text-center">
                <h3
                  className="text-6xl font-bold mb-2 
          bg-gradient-to-r from-blue-500 to-red-500 
          text-transparent bg-clip-text"
                >
                  98%
                </h3>
                <p className="text-lg font-semibold text-black mb-2">
                  Client Satisfaction
                </p>
                <p className="text-gray-600">
                  98% client satisfaction rate across all our services.
                </p>
              </div>

              <div className="flex-1 text-center">
                <h3
                  className="text-6xl font-bold mb-2 
          bg-gradient-to-r from-blue-500 to-red-500 
          text-transparent bg-clip-text"
                >
                  78%
                </h3>
                <p className="text-lg font-semibold text-black mb-2">
                  Conversion Rate
                </p>
                <p className="text-gray-600">
                  Successfully managed and executed 40+ marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <WhyAIO />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Add this component */}
    </div>
  );
};

export default Services;
