import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-[#f5f7f9] rounded-2xl shadow-md border border-gray-100 min-h-[600px] flex flex-col justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">The AIO Tech</h1>
        <h2 className="text-3xl font-semibold text-gray-700">
          Our Digital Expertise
        </h2>

        <div className="max-w-4xl mx-auto space-y-5">
          <p className="text-lg text-gray-600 leading-relaxed">
            AIO Tech is a premier Illinois-based digital marketing firm serving
            clients nationwide. We blend artistic vision with advanced tech
            solutions to propel your brand digital transformation.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our core services include Search Engine Optimization (SEO), Custom
            Web Development, E-commerce Solutions, Social Media Campaigns, and
            Strategic Content Marketing. We convert your digital footprint into
            a high-performance growth channel. From emerging businesses to
            industry leaders, our forward-thinking approaches and passionate
            team deliver measurable, impactful outcomes.
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 text-lg"
          >
            Discover More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
