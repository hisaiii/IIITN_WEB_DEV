import React from "react";
import { FaEnvelope, FaGlobe, FaArrowRight } from "react-icons/fa";

const InstituteWebmail = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">
          Institute Webmail
        </h1>
        <p className="text-lg text-white mb-6">
          Access your official institute email with ease and security.
        </p>
      </div>

      {/* Webmail Information Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
          Webmail Access
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          The institute provides official email accounts for students, faculty,
          and staff. Ensure secure communication through the official webmail
          portal.
        </p>

        <h2 className="text-xl font-semibold text-blue-700 mt-6">
          How to Login?
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Visit the official webmail portal.</li>
          <li>Enter your assigned email ID and password.</li>
          <li>Ensure two-step verification if enabled.</li>
        </ul>

        {/* Access Webmail Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://webmail.iiitn.ac.in" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all"
          >
            <FaGlobe /> Access Webmail <FaArrowRight />
          </a>
        </div>

        {/* Contact Support Section */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6">
          Need Help?
        </h2>
        <p className="text-gray-700">
          📞 IT Support: 9405215010 <br />
          ✉️ Email: support@iiitn.ac.in
        </p>
      </div>
    </div>
  );
};

export default InstituteWebmail;