import React from "react";

export default function Hostel() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Hostel
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Hostel"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Hostel Rules & Guidelines */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <a
              href="../../../pdfs/19.pdf"
              className="text-blue-500 hover:underline"
            >
              Anti Ragging Rules
            </a>
          </li>
          <li className="mb-2">
            <a
              href="../../../pdfs/20.pdf"
              className="text-blue-500 hover:underline"
            >
              Institute Rules
            </a>
          </li>
          <li className="mb-2">
            <a
              href="../../../pdfs/21.pdf"
              className="text-blue-500 hover:underline"
            >
              Hostel Rules
            </a>
          </li>
          <li>
            <a
              href="../../../pdfs/22.pdf"
              className="text-blue-500 hover:underline"
            >
              Institute Do's and Don'ts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}