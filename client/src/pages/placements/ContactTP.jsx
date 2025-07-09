import React from "react";

export default function ContactTNP() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Training & Placement
      </h1>

      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Dr. Paritosh Peshwe */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <img
            src="../../../images/111.jpg"
            alt="Dr. Paritosh Peshwe"
            className="w-40 h-40 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">Dr. Paritosh Peshwe</h2>
          <p className="text-gray-600">Faculty Coordinator, T&P</p>
          <p className="text-gray-800 font-medium">📞 9975104323</p>
          <p className="text-blue-600 underline">
            📧 paritoshpeshwe@iiitn.ac.in
          </p>
        </div>

        {/* Dr. Meera Jagdale */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <img
            src="../../../images/222.jpg"
            alt="Dr. Meera Jagdale"
            className="w-40 h-40 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">Dr. Meera Jagdale</h2>
          <p className="text-gray-600">Training & Placement Officer</p>
          <p className="text-gray-800 font-medium">📞 +91 9764490050</p>
          <p className="text-blue-600 underline">📧 tnp@iiitn.ac.in</p>
        </div>

        {/* Shri Pritesh Tiwari */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <img
            src="../../../images/333.jpg"
            alt="Shri Pritesh Tiwari"
            className="w-40 h-40 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">Shri Pritesh Tiwari</h2>
          <p className="text-gray-600">Officer (Training & Placement)</p>
          <p className="text-gray-800 font-medium">📞 +91 9890070945</p>
          <p className="text-blue-600 underline">📧 otp@iiitn.ac.in</p>
        </div>
      </div>
    </div>
  );
}