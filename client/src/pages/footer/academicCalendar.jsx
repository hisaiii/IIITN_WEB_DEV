import React from "react";

const AcademicCalendar = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">Academic Calendar</h1>
        <p className="text-lg text-white">
          Stay updated with the latest academic schedules, events, and deadlines.
        </p>
      </div>

      {/* Download Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Download Calendar</h2>
        <p className="text-gray-700 mb-4">
          Click below to download the latest academic calendar.
        </p>
        <a
          href="/path-to-academic-calendar.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all"
        >
          📥 Download PDF
        </a>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Upcoming Events</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>📌 Mid-Semester Exams: March 15 - March 20</li>
          <li>📌 Summer Vacation Starts: May 10</li>
          <li>📌 New Semester Registration: July 5</li>
          <li>📌 Convocation Ceremony: August 20</li>
        </ul>
      </div>
    </div>
  );
};

export default AcademicCalendar;