import React from "react";

export default function StudentMess() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Student Mess
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Student Mess"
          className="w-full md:w-3/4 lg:w-1/2 h-auto shadow-xl rounded-lg"
        />
      </div>

      {/* Mess Information */}
      <div className="bg-white p-6 rounded-xl shadow-xl text-lg">
        <p className="mb-4">
          IIIT Nagpur provides good quality food at the mess. The food is served
          four times a day:{" "}
          <strong>Breakfast, Lunch, Supper, and Dinner</strong>.
        </p>
      </div>
    </div>
  );
}
