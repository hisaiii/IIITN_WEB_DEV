import React from "react";
import { FaUserTie, FaDownload, FaBriefcase } from "react-icons/fa";

const Recruitment = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">Recruitment</h1>
        <p className="text-lg text-white mb-6">
          Explore job opportunities and be a part of IIIT Nagpur.
        </p>
      </div>

      {/* Job Openings Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
          Current Openings
        </h2>

        {/* Sample Job Opening 1 */}
        <div className="bg-white p-4 rounded-md shadow mb-4 flex justify-between items-center">
          <div>
            <FaBriefcase className="text-blue-600 text-2xl inline mr-2" />
            <span className="text-gray-700 font-medium">Assistant Professor - Computer Science</span>
            <p className="text-sm text-gray-500">Last Date: 20th March 2025</p>
          </div>
          <a
            href="/documents/job1.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all flex items-center gap-2"
          >
            <FaDownload /> Apply Now
          </a>
        </div>

        {/* Sample Job Opening 2 */}
        <div className="bg-white p-4 rounded-md shadow mb-4 flex justify-between items-center">
          <div>
            <FaBriefcase className="text-blue-600 text-2xl inline mr-2" />
            <span className="text-gray-700 font-medium">Lab Assistant - Electronics</span>
            <p className="text-sm text-gray-500">Last Date: 25th March 2025</p>
          </div>
          <a
            href="/documents/job2.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all flex items-center gap-2"
          >
            <FaDownload /> Apply Now
          </a>
        </div>

        {/* Contact Section */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6 text-center">Recruitment Contact</h2>
        <p className="text-gray-700 text-center">📞 Phone: +91 9405215010</p>
        <p className="text-gray-700 text-center">✉️ Email: recruitment@iiitn.ac.in</p>
      </div>
    </div>
  );
};

export default Recruitment;