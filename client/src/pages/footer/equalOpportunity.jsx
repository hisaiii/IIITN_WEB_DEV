import React from "react";

const EqualOpportunity = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">Equal Opportunity Policy</h1>
        <p className="text-lg text-white mb-6">
          Ensuring fairness, inclusion, and diversity for all students and staff.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Our Commitment</h2>
        <p className="text-gray-700 mb-4 text-center">
          The institution is committed to providing equal opportunities regardless of gender, caste, religion, or background.
        </p>

        <h2 className="text-xl font-semibold text-blue-700 mt-6">Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Promote an inclusive and diverse academic environment.</li>
          <li>Ensure fairness in recruitment, admissions, and promotions.</li>
          <li>Provide necessary support and accommodations.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-700 mt-6">Contact Details</h2>
        <p className="text-gray-700">📞 Helpline: 9405215011</p>
        <p className="text-gray-700">✉️ Email: equalopportunity@iiitn.ac.in</p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EqualOpportunity;