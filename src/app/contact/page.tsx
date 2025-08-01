import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";
import HeroWithBg from "@/components/HeroWith3DBg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroWithBg
          title="Contact Us"
          backgroundImages={[
            "/abstract4.jpg",

            "/abstract1.jpg",
            "/abstract7.jpg",
            "/abstract5.jpg",
            "/abstract3.jpg",
          ]}
        />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
