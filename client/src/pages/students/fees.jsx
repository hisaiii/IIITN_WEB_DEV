import React from "react";

export default function Fees() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Fees
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Fees Details"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Fees Details */}
      <div className="bg-white p-6 rounded-xl shadow-xl mb-10 text-lg">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Higher Semester Fees Details
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <a
              href="../../../pdfs/25.pdf"
              className="text-blue-500 hover:underline font-semibold"
            >
              Academic Fees Details - Click Here
            </a>
          </li>
          <li>
            <a
              href="../../../pdfs/26.pdf"
              className="text-blue-500 hover:underline font-semibold"
            >
              Hostel Fees Details - Click Here
            </a>
          </li>
        </ul>
      </div>

      {/* Payment Links */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Payment Link
        </h2>

        <div className="space-y-4">
          <a
            href="https://iiitn.ac.in/admission.php?id=434"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition block text-center"
          >
            Pay Academic Fees - Click Here
          </a>
          <a
            href="https://iiitn.ac.in/admission.php?id=435"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition block text-center"
          >
            Pay Hostel Fees - Click Here
          </a>
        </div>
      </div>
    </div>
  );
}