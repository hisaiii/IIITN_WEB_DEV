import React from "react";
import { FaFileContract, FaDownload, FaClipboardList } from "react-icons/fa";

const Tender = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">Tenders & Procurement</h1>
        <p className="text-lg text-white mb-6">
          Stay updated with the latest tenders and procurement notices from IIIT Nagpur.
        </p>
      </div>

      {/* Tender List Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
          Active Tenders
        </h2>

        {/* Sample Tender List */}
        <div className="bg-white p-4 rounded-md shadow mb-4 flex justify-between items-center">
          <div>
            <FaClipboardList className="text-blue-600 text-2xl inline mr-2" />
            <span className="text-gray-700 font-medium">Tender for IT Infrastructure Upgrade</span>
            <p className="text-sm text-gray-500">Last Date: 10th March 2025</p>
          </div>
          <a
            href="/documents/tender1.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all flex items-center gap-2"
          >
            <FaDownload /> Download
          </a>
        </div>

        <div className="bg-white p-4 rounded-md shadow mb-4 flex justify-between items-center">
          <div>
            <FaClipboardList className="text-blue-600 text-2xl inline mr-2" />
            <span className="text-gray-700 font-medium">Tender for Campus Security Services</span>
            <p className="text-sm text-gray-500">Last Date: 15th March 2025</p>
          </div>
          <a
            href="/documents/tender2.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all flex items-center gap-2"
          >
            <FaDownload /> Download
          </a>
        </div>

        {/* Contact Section */}
        <h2 className="text-xl font-semibold text-blue-700 mt-6 text-center">Contact for Tenders</h2>
        <p className="text-gray-700 text-center">📞 Phone: +91 9405215010</p>
        <p className="text-gray-700 text-center">✉️ Email: tenders@iiitn.ac.in</p>
      </div>
    </div>
  );
};

export default Tender;