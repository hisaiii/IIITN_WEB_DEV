import React, { useState } from "react";
import { FaUsers, FaGraduationCap, FaGlobe } from "react-icons/fa";

export default function Admissions() {
  const [selectedTab, setSelectedTab] = useState(1);

  const content = {
    1: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          B.Tech Admission 2024-2025
        </h2>
        <ul className="list-disc list-inside text-blue-600 font-bold space-y-2">
          <li>📌 <span className="text-red-600">Revised Institute Reporting Schedule 08.08.2024</span> <a href="#" className="text-blue-600 underline">Click Here</a></li>
          <li>📌 Notice for latest availability of Hostel Accommodation <a href="#" className="text-blue-600 underline">Click Here</a></li>
          <li>📌 Institute Reporting Schedule 2024-2025 <a href="#" className="text-blue-600 underline">Click Here</a></li>
          <li>📌 Important Notice for Students with PWD Status <a href="#" className="text-blue-600 underline">Click Here</a></li>
          <li>📌 Institute Details at a Glance 2024-25 <a href="#" className="text-blue-600 underline">Click Here</a></li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-700 mt-6">
          IIIT Nagpur offers the following Undergraduate Courses:
        </h3>

        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
              <th className="border border-gray-300 px-4 py-2">Program Name</th>
              <th className="border border-gray-300 px-4 py-2">Total Seat Intake</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech. Computer Science & Engineering", 223],
              ["B.Tech. CSE (Artificial Intelligence & Machine Learning)", 66],
              ["B.Tech. CSE (Data Science & Analytics)", 66],
              ["B.Tech. CSE (Human Computer Interaction & Gaming Technology)", 66],
              ["B.Tech. Electronics & Communication Engineering", 150],
              ["B.Tech. ECE (Internet of Things)", 66],
            ].map(([course, seats], index) => (
              <tr key={index} className="text-center bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{course}</td>
                <td className="border border-gray-300 px-4 py-2 font-bold">{seats}</td>
              </tr>
            ))}
            <tr className="text-center bg-gray-200 font-bold">
              <td colSpan="2" className="border border-gray-300 px-4 py-2">Total</td>
              <td className="border border-gray-300 px-4 py-2">637</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 text-blue-600 font-bold">
          More Details About Courses <a href="#" className="underline">Click Here</a>
        </p>

        <div className="mt-6 space-y-3">
          <p className="text-blue-600 font-bold">Admission Cancellation & Fees Refund Policy <a href="#" className="underline">Click Here</a></p>
          <p className="text-blue-600 font-bold">How to Generate Academic Bank of Credits (ABC)/APPAR ID <a href="#" className="underline">Click Here</a></p>
          <p className="text-blue-600 font-bold">Antiragging Undertaking <a href="#" className="underline">Click Here</a></p>
          <p className="text-blue-600 font-bold">Online Admission Portal <a href="#" className="underline">Click Here</a></p>
        </div>
      </>
    ),
    2: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          PhD Admissions Winter 2024-2025
        </h2>
        <ul className="list-disc list-inside text-blue-600 font-bold space-y-2">
          <li>📌 Schedule of Written Test and Interview <a href="#" className="underline">Click Here</a></li>
          <li>📌 Provisionally Shortlisted Candidates for Written Test <a href="#" className="underline">Click Here</a></li>
          <li>📌 Revised Admission Schedule <a href="#" className="underline">Click Here</a></li>
          <li>📌 Official Notification <a href="#" className="underline">Click Here</a></li>
        </ul>
      </>
    ),
    3: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-">
          Academic Rule Book (UG)
        </h2>
        <p className="text-blue-600 font-bold">
          B.Tech Rule Book <a href="#" className="underline">Click Here</a>
        </p>
      </>
    ),
    4: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Academic Rule Book (PG)
        </h2>
        <p className="text-blue-600 font-bold">
          PhD Rule Book <a href="#" className="underline">Click Here</a>
        </p>
      </>
    ),
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen p-10 w-full">
      <h1 className="text-center text-5xl font-bold text-gray-800 mt-10 mb-10">
        ADMISSIONS
      </h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {["Undergraduate B.Tech", "Postgraduate", "UG Academic Rule Book", "PG Academic Rule Book"].map((label, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index + 1)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedTab === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {content[selectedTab]}
      </div>
    </div>
  );
}