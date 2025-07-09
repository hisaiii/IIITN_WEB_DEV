import React from "react";
import { FaExclamationCircle, FaPhone, FaEnvelope, FaClipboardList } from "react-icons/fa";

const Grievance = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">Grievance Redressal</h1>
        <p className="text-lg text-white mb-6">
          Ensuring a fair and responsive system for addressing concerns.
        </p>
      </div>

      {/* Grievance Details Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Submit a Grievance</h2>
        <p className="text-gray-700 text-center">
          If you have any issues, you can submit your grievance through the official process.
        </p>

        <div className="mt-4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaClipboardList className="text-blue-600" /> Online Submission
            </h3>
            <p className="text-gray-600">Submit your complaint online through the grievance portal.</p>
            <a href="#" className="text-blue-600 flex items-center mt-2 hover:underline">
              <FaExclamationCircle className="mr-2" /> Submit Grievance
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaClipboardList className="text-blue-600" /> In-Person Submission
            </h3>
            <p className="text-gray-600">Visit the administrative office for grievance submission.</p>
          </div>
        </div>

        {/* Contact Info */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6 text-center">Contact Details</h2>
        <p className="text-gray-700 text-center flex items-center justify-center gap-2">
          <FaPhone className="text-blue-600" /> +91 9405215010
        </p>
        <p className="text-gray-700 text-center flex items-center justify-center gap-2">
          <FaEnvelope className="text-blue-600" /> grievance@iiitn.ac.in
        </p>
      </div>
    </div>
  );
};

export default Grievance;