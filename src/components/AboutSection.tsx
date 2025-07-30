import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-[#f5f7f9] rounded-2xl shadow-md border border-gray-100 min-h-[600px] flex flex-col justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">The Agency</h1>

        <div className="max-w-4xl mx-auto space-y-5">
          <p className="text-lg text-gray-600 leading-relaxed">
            At The AIO Tech, we bring innovation and expertise to the forefront
            of your digital marketing strategy. Here why businesses trust us to
            drive their success:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 py-4 max-w-3xl mx-auto">
            {[
              "AI-Powered Insights",
              "Customized Strategies",
              "Proven Results",
              "Seamless Integration",
              "Expert Team",
              "Continuous Optimization",
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-blue-600 text-4xl leading-6">•</span>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-black hover:bg-black text-white font-medium rounded-lg transition duration-200 text-lg"
          >
            Discover More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
