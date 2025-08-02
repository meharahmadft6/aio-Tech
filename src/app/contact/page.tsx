import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";
import HeroWithBg from "@/components/HeroWith3DBg";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Add this import

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroWithBg title="Contact Us" backgroundImages={["/abstract1.jpg"]} />

        <ContactForm />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
