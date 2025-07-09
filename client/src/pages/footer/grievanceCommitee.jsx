import React from "react";

const GrievanceCommitteeSCST = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full border border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-4 border-b-4 border-blue-900 pb-2">SC/ST Cell Grievance Committee</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Ensuring equal opportunity and a discrimination-free environment for SC/ST students.
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-900 mb-3 text-center">Submit Your Complaint</h2>
          <form className="flex flex-col gap-4">
            <label className="text-gray-700 font-medium">Full Name</label>
            <input type="text" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />

            <label className="text-gray-700 font-medium">Email</label>
            <input type="email" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />

            <label className="text-gray-700 font-medium">Issue Description</label>
            <textarea className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Describe your grievance"></textarea>

            <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-all shadow-md">
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrievanceCommitteeSCST;