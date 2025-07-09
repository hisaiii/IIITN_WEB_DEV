import React from "react";

const Achievements = () => {
  return (
    <div
      className="relative py-12 flex flex-col items-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/5.jpeg')",
      }}
    >
      {/* Dark Blurred Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 relative z-10 text-white">
        Achievements
      </h2>

      {/* Container for Images & Content */}
      <div className="relative w-full max-w-6xl flex flex-col items-center z-10 px-4">
        {/* Image Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-center">
          {/* Left Image */}
          <div className="w-full md:w-[420px] h-[280px] rounded-lg overflow-hidden shadow-lg mx-auto">
            <img
              src="/images/rew1.jpg"
              alt="Achievement 1"
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[420px] h-[280px] rounded-lg overflow-hidden shadow-lg mx-auto">
            <img
              src="/images/rew2.jpeg"
              alt="Achievement 2"
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="relative mt-10 p-6 sm:p-8 bg-white text-black rounded-lg shadow-lg w-full md:w-3/4 lg:w-3/5 text-center z-10">
          <h3 className="text-2xl font-bold">Our Achievements</h3>
          <p className="mt-2 text-lg text-gray-700">
            We strive for excellence in academics and community engagement,
            impacting lives through innovation.
          </p>

          {/* More Information Button */}
          <a href="/latest">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              More Information
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
