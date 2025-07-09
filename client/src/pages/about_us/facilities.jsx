import React from "react";

export default function Facilities() {
  const facilities = [
    { name: "Academic Block", image: "../../../images/3.png" },
    { name: "Library", image: "../../../images/7.jpg" },
    { name: "Gym", image: "../../../images/gym.jpg" },
    { name: "Microprocessor Lab", image: "../../../images/9.jpg" },
    { name: "Control System Lab", image: "../../../images/10.jpg" },
    { name: "Computer Programming Lab", image: "../../../images/12.jpg" },
    { name: "Database Lab", image: "../../../images/13.jpg" },
    { name: "Data Structure & Algorithm Lab", image: "../../../images/14.jpg" },
    { name: "Nano SciTech Lab", image: "../../../images/15.png" },
  ];

  return (
    <div className="bg-white min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-poetsen text-gray-900 mt-25 mb-10">
        FACILITIES
      </h1>

      {/* First Image */}
      <div className="flex justify-center mb-16 w-full bg-gray-200 py-16">
        <img
          src="../../../images/top2.png"
          alt="Campus View"
          className="w-full max-w-7xl h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg border border-gray-300 hover:shadow-2xl transition duration-300 flex flex-col items-center"
            style={{
              background: "linear-gradient(to bottom, #0071D6, #0045B6, #152D5F)", // Softer WGB Gradient
            }}
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-poetsen text-white text-center">
              {facility.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}