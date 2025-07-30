import Link from "next/link";

const BrainforceWelcomeSection = () => {
  return (
    <div className="bg-white mx-auto p-10 border border-gray-100 min-h-[600px] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Heading */}
        <div className=" lg:text-left text-center space-y-6">
          <h1 className="text-2xl text-center md:text-5xl font-bold text-gray-800 mb-5 sm:hidden">
            Welcome to
            <br />
            <span className="text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              The Aio Tech,
            </span>
            <br />
            where innovation meets excellence
          </h1>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-5 hidden lg:block ms-10 me-10">
            Welcome to
            <br />
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              The Aio Tech,
            </span>
            <br />
            where innovation meets excellence
          </h1>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <div className="space-y-5">
            <p className="text-lg text-gray-600 leading-relaxed">
              In today&rsquo;s fast-paced digital world, staying ahead of the
              curve requires more than just expertise—it demands creativity,
              adaptability, and cutting-edge technology. That&rsquo;s where we
              come in.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to empower businesses, The Aio Tech is your
              trusted partner in navigating the ever-evolving digital landscape.
              We specialize in AI-Driven SEO, Social Media Marketing, Website
              Development, and Digital Marketing, offering tailored solutions
              that deliver measurable results.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-3 bg-black text-white font-medium rounded-lg transition duration-200 text-lg border border-gray-200"
            >
              Explore work
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainforceWelcomeSection;
