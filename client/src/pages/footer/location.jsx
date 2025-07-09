import React from "react";
import { FaMapMarkerAlt, FaUniversity, FaRoute } from "react-icons/fa";

const Location = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">
          IIIT Nagpur Location
        </h1>
        <p className="text-lg text-white mb-6">
          Find the exact location and directions to IIIT Nagpur.
        </p>
      </div>

      {/* Location Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
          Institute Address
        </h2>
        <div className="flex items-center gap-3 bg-white p-4 rounded-md shadow text-center">
          <FaMapMarkerAlt className="text-blue-600 text-2xl" />
          <p className="text-gray-700">
            📍 IIIT Nagpur, Near BSNL RTTC, Seminary Hills, Nagpur, Maharashtra, India - 440006
          </p>
        </div>

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

        {/* Directions Section */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6 text-center">
          Get Directions
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Use Google Maps to get step-by-step navigation to IIIT Nagpur.
        </p>
        <a
          href="https://www.google.com/maps/dir//IIIT+Nagpur/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2"
        >
          <FaRoute /> Get Directions
        </a>
      </div>
    </div>
  );
};

export default Location;