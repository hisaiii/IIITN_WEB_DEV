import React from "react";

export default function ForCompanies() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        GUIDELINES FOR COMPANIES
      </h1>
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-xl">
        <ul className="list-disc pl-5 text-lg">
          <li className="mb-4">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Invitation for Campus Placements Click Here....
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Placement Policy Click Here....
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Placement Brochure Click Here....
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Guidelines for companies Click Here....
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHnTqRwRCry212Zv44KS4EMfG_f6XWzYUKQ1h_AQwdvAH8VA/viewform"
              className="text-blue-600 font-semibold hover:underline"
            >
              Job Announcement Form Click Here....
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}