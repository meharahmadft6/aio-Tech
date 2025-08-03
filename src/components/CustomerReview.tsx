"use client";
import React, { useRef, useState } from "react";

const CustomerReviews = () => {
  const videos = [
    { id: 1, src: "/video1.mp4", title: "Anna Senior" },
    { id: 2, src: "/video2.mp4", title: "Rhino Movers" },
    { id: 3, src: "/video3.mp4", title: "Ameri Park" },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState(videos.map(() => false));

  // Initialize refs array
  if (videoRefs.current.length !== videos.length) {
    videoRefs.current = Array(videos.length).fill(null);
  }

  const handlePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingStates((prev) => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
      } else {
        video.pause();
        setPlayingStates((prev) => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
      }
    }
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
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-gradient bg-gradient-to-br from-gray-900 to-black p-0.5"
              style={{ height: "400px", width: "100%" }} // Fixed dimensions
            >
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-black">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="w-full h-full object-cover cursor-pointer"
                  aria-label={`Customer testimonial video ${video.id}`}
                  controlsList="nodownload noplaybackrate nofullscreen"
                  playsInline
                  onEnded={() => {
                    setPlayingStates((prev) => {
                      const newStates = [...prev];
                      newStates[index] = false;
                      return newStates;
                    });
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold">{video.title}</h3>
                </div>

                {/* Custom play/pause overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePlayPause(index);
                    }}
                    aria-label={
                      playingStates[index] ? "Pause video" : "Play video"
                    }
                  >
                    {playingStates[index] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
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
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
