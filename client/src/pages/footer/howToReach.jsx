import React from "react";
import { FaMapMarkerAlt, FaTrain, FaBus, FaPlane, FaCar } from "react-icons/fa";

const HowToReach = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">
          How to Reach IIIT Nagpur
        </h1>
        <p className="text-lg text-white mb-6">
          Find the best routes to reach our institute conveniently.
        </p>
      </div>

      {/* Travel Options Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
          Travel Options
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          IIIT Nagpur is well connected via road, rail, and air. Choose the best option that suits your travel needs.
        </p>

        {/* Travel Modes */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow">
            <FaPlane className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">By Air</h3>
              <p className="text-gray-700">
                Nearest Airport: Dr. Babasaheb Ambedkar International Airport, Nagpur (Approx. 12 km).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow">
            <FaTrain className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">By Train</h3>
              <p className="text-gray-700">
                Nearest Railway Station: Nagpur Junction (Approx. 15 km). Easily accessible via cabs and public transport.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow">
            <FaBus className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">By Bus</h3>
              <p className="text-gray-700">
                Regular buses are available from Nagpur city to the institute.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow">
            <FaCar className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">By Road</h3>
              <p className="text-gray-700">
                The institute is located near NH-44 and is easily accessible by taxis and private vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6 text-center">
          Institute Location
        </h2>
        <p className="text-gray-700 text-center">
          📍 IIIT Nagpur, Near BSNL RTTC, Seminary Hills, Nagpur, Maharashtra, India - 440006
        </p>

        {/* Google Maps Embed */}
        <div className="mt-6">
          <iframe
            title="IIIT Nagpur Location"
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1624034130197!2d79.0792713142455!3d21.13547178964482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0728b1e3e6b%3A0x7c9e47b2f50435f5!2sIIIT%20Nagpur!5e0!3m2!1sen!2sin!4v1642839043809!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HowToReach;