import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";
const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f9]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden ms-5 me-5 mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-600 to-black opacity-90"></div>
          <div className="absolute inset-0"></div>
          <div className="relative flex items-center justify-center h-72 md:h-96">
            <h1 className="text-white text-4xl md:text-6xl font-semibold">
              Contact
            </h1>
          </div>
        </section>
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
