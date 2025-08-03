"use client";
import React, { useRef, useState } from "react";

const CustomerReviews = () => {
  const videos = [
    {
      id: 1,
      src: "/video1.mp4",
      title: "Anna Senior",
      thumbnail: "/v1.png", // Add thumbnail paths
    },
    {
      id: 2,
      src: "/video2.mp4",
      title: "Rhino Movers",
      thumbnail: "/v2.png",
    },
    {
      id: 3,
      src: "/video3.mp4",
      title: "Ameri Park",
      thumbnail: "/v3.png",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState<null | {
    src: string;
    title: string;
  }>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = (video: { src: string; title: string }) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-6xl font-bold mb-4">
            Customer{" "}
            <span className="text-3xl lg:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Get an idea of result-driven solutions that changed the business
            experience of these owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-gradient bg-gradient-to-br from-gray-900 to-black p-0.5"
              style={{ height: "400px", width: "100%" }}
            >
              <div
                className="relative h-full w-full rounded-xl overflow-hidden bg-black cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                {/* Thumbnail image */}
                <img
                  src={video.thumbnail}
                  alt={`${video.title} testimonial thumbnail`}
                  className="w-full h-full object-cover"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {/* Video title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Popup Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative w-full max-w-4xl mx-auto">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-50"
                aria-label="Close video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="aspect-w-16 aspect-h-9 w-full">
                <video
                  ref={videoRef}
                  className="w-full h-full max-h-[80vh] object-contain"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">
                  {selectedVideo.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
