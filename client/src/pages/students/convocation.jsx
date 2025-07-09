import React from "react";

export default function Convocation() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Convocation
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Convocation"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Convocation 2023 */}
      <div className="bg-white p-6 rounded-xl shadow-xl mb-10">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          3rd Convocation (2023) - Videos & News
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>
            <a
              href="https://www.youtube.com/watch?v=V3JdPVaihJE"
              className="text-blue-500 hover:underline font-semibold"
            >
              YouTube Link - Click Here
            </a>
          </li>
          <li>UCN News</li>
          <li>24 INDIA News</li>
          <li>MISSION INDIA News</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          Photo Gallery
        </h3>

        <div className="mt-4">
          <a
            href="../../../pdfs/23.pdf"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            3rd Convocation Invitation - Click Here
          </a>
        </div>
      </div>

      {/* Convocation 1st */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          1st Convocation - Videos & News
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>
            <a
              href="https://www.youtube.com/watch?v=RVm3iyBhlS8"
              className="text-blue-500 hover:underline font-semibold"
            >
              YouTube Link - Click Here
            </a>
          </li>
          <li>UCN News</li>
          <li>DD Sahyadri News</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          Photo Gallery
        </h3>

        <div className="mt-4">
          <a
            href="../../../pdfs/24.pdf"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            1st Convocation Invitation - Click Here
          </a>
        </div>
      </div>
    </div>
  );
}