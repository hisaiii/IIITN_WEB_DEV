import React from "react";

const StudentLife = () => {
  return (
    <div
      className="relative py-16 px-8 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bgc.jpg')" }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Campus Life</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Building a vibrant community of creative and accomplished people from
          around the world.
        </p>
      </div>

      {/* Grid Section */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img
            src="/images/c1.JPG"
            alt="Student Life"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold">Student Life</h3>
          <p className="mt-2">
            A residential campus with diverse housing, dining, and over 600
            student organizations.
          </p>
          <a
            href="/students/activities"
            className="text-blue-600 mt-3 inline-block font-semibold"
          >
            Learn More &rarr;
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img
            src="/images/c2.jpg"
            alt="Arts & Culture"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold">Arts & Culture</h3>
          <p className="mt-2">
            Fostering a vibrant community where technology, innovation, and
            culture come together to inspire the leaders of tomorrow.
          </p>
          <a
            href="/students/activities"
            className="text-blue-600 mt-3 inline-block font-semibold"
          >
            Explore More &rarr;
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img
            src="/images/c3.jpg"
            alt="Recreation & Wellness"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold">Recreation & Wellness</h3>
          <p className="mt-2">
            State-of-the-art fitness programs, sports, and wellness activities
            for students.
          </p>
          <a
            href="/students/activities"
            className="text-blue-600 mt-3 inline-block font-semibold"
          >
            Find Out More &rarr;
          </a>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="relative z-10 text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-red-700 transition">
          More about Campus Life
        </button>
      </div> */}
    </div>
  );
};

export default StudentLife;