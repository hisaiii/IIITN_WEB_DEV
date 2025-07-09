import React from "react";

export default function Download() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Download
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Download Resources"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Downloadable Forms */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <ul className="list-disc list-inside space-y-3">
          <li>
            <a
              href="../../../downloads/Semester_Registration_Form.pdf"
              className="text-blue-500 hover:underline font-semibold"
              download
            >
              Semester Registration Form
            </a>
          </li>
          <li>
            <a
              href="../../../downloads/Hostel_Leave_Form.pdf"
              className="text-blue-500 hover:underline font-semibold"
              download
            >
              Hostel Leave Form
            </a>
          </li>
          <li>
            <a
              href="../../../downloads/Syllabus.pdf"
              className="text-blue-500 hover:underline font-semibold"
              download
            >
              Syllabus
            </a>
          </li>
          <li>
            <a
              href="../../../downloads/Administration_Forms.pdf"
              className="text-blue-500 hover:underline font-semibold"
              download
            >
              Other Administration Forms
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}