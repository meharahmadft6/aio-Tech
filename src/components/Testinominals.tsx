"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 5,
      name: "Dario Berutti",
      role: "Innogames",
      rating: 5,
      content: "Game-Changing Social Media Strategies!",
      highlight:
        '"Their Social Media Marketing expertise boosted our followers and engagement. The campaigns were tailored to our brand, delivering exceptional results in no time!"',
    },
    {
      id: 6,
      name: "Opera Nio",
      role: "Elevated to Industry Leaders",
      rating: 5,
      content: "Stunning Website Development!",
      highlight:
        '"The website they created for us is beautiful and functional. It truly represents our brand, and customer feedback has been overwhelmingly positive. Highly satisfied!"',
    },
    {
      id: 7,
      name: "Robert Mathew",
      role: "Innovation Group",
      rating: 5,
      content: "Incredible SEO Results!",
      highlight:
        '"The AIO Tech improved our online presence with their AI-driven SEO strategies. Our website traffic increased significantly, and we ranked higher on Google. Highly recommend!"',
    },
  ];

  const renderStars = (count: number) => {
    return (
      <div className="flex mb-4">
        {[...Array(count)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f7f9] ms-5 me-5 mb-5 rounded-2xl shadow-md border border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-10 h-10 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className=" text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What people say about their <br />
            <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent mb-4">
              experience{" "}
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            backgroundImage: `url('/testbg2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {renderStars(testimonial.rating)}

              {testimonial.role ? (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {testimonial.role}
                  </p>
                </>
              ) : (
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {testimonial.name}
                </h3>
              )}

              {testimonial.highlight ? (
                <>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    {testimonial.content}
                  </h4>
                  <p className="text-gray-600 italic">
                    &ldquo;{testimonial.highlight}&rdquo;
                  </p>
                </>
              ) : (
                <p className="text-gray-600">{testimonial.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
