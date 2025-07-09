import React from "react";

export default function NIRF() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        NIRF Rankings
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../images/ThumbnailImage.jpg" // Same image as previous pages
          alt="NIRF Reports"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* NIRF Reports */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        {/* NIRF 2025 */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">NIRF 2025</h2>
        <p className="mb-2 font-semibold">
          All Report Ministry of Education (Shiksha Mantralaya):
        </p>
        <a
          href="/downloads/NIRF_2025_Engineering_IIITN.pdf"
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Engineering_IIITN - Download
        </a>

        {/* NIRF 2024 */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-4">
          NIRF 2024
        </h2>
        <p className="mb-2 font-semibold">
          All Report Ministry of Education (Shiksha Mantralaya):
        </p>
        <div className="space-y-2">
          <a
            href="/downloads/NIRF_2024_Engineering_IIITN.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Engineering_IIITN - Download
          </a>
          <a
            href="/downloads/NIRF_2024_Overall_IIITN.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition ml-4"
          >
            Overall_IIITN - Download
          </a>
          <a
            href="/downloads/NIRF_2024_Innovation_IIIT.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition ml-4"
          >
            Innovation_IIIT - Download
          </a>
        </div>

        {/* NIRF 2023 */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-4">
          NIRF 2023
        </h2>
        <p className="mb-2 font-semibold">
          All Report Ministry of Education (Shiksha Mantralaya):
        </p>
        <div className="space-y-2">
          <a
            href="/downloads/NIRF_2023_Engineering_IIITN.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Engineering_IIITN - Download
          </a>
          <a
            href="/downloads/NIRF_2023_Overall_IIITN.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition ml-4"
          >
            Overall_IIITN - Download
          </a>
        </div>
      </div>
    </div>
  );
}
