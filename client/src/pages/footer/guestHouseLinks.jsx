import React from "react";
import { FaBed, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const GuestHouseQuickLinks = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">Guest House</h1>
        <p className="text-lg text-white mb-6">
          Comfortable accommodations for visitors, faculty, and guests.
        </p>
      </div>

      {/* Guest House Info Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Facilities Available</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Well-furnished rooms with AC and Wi-Fi</li>
          <li>24/7 security and housekeeping</li>
          <li>Dining and refreshment facilities</li>
          <li>Conference and meeting halls</li>
          <li>Prime location within campus</li>
        </ul>

        {/* Booking Details */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6 text-center">Booking Information</h2>
        <p className="text-gray-700 text-center">For booking requests, please contact:</p>

        <div className="mt-4 text-center">
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <FaPhone className="text-blue-600" /> +91 9405215010
          </p>
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <FaEnvelope className="text-blue-600" /> guesthouse@iiitn.ac.in
          </p>
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" /> IIIT Nagpur Campus
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuestHouseQuickLinks;