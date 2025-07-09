import React from "react";

const AntiRagging = () => {
  return (
    <div className="bg-white min-h-screen text-blue-900 flex flex-col items-center p-6">
      <div className="shadow-lg rounded-2xl p-8 max-w-3xl w-full border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-4 border-b-2 pb-2">Anti-Ragging Committee</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Committed to maintaining a safe and ragging-free environment for all students.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Report a Ragging Incident</h2>
          <form className="flex flex-col gap-4">
            <label className="text-gray-700 font-medium">Full Name</label>
            <input type="text" className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />

            <label className="text-gray-700 font-medium">Email</label>
            <input type="email" className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />

            <label className="text-gray-700 font-medium">Incident Details</label>
            <textarea className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Describe the incident"></textarea>

            <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all">
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;