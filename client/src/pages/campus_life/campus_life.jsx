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
  ];

  return (
    <div className="bg-gradient-to-b from-blue-300 to-black min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-poetsen text-white mt-25 mb-10">
        CAMPUS LIFE
      </h1>

      {/* Facilities Grid */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 grid-cols-2 gap-30 p-16">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="p-1 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center"
            style={{
              background: "#0071D6", // Softer WGB Gradient
            }}
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-[30rem] object-cover rounded-2xl"
            />
            {/* <h2 className="text-2xl font-poetsen text-white text-center">
              {facility.name}
            </h2> */}
          </div>
        ))}
      </div>
    </div>
  );
}