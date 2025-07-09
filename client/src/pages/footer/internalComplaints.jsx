import React from "react";

const InternalComplaint = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col items-center p-6">
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 pb-2">Internal Complaint Committee</h1>
        <p className="text-lg text-white mb-6">
          Ensuring a respectful and safe environment for all students and staff.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Report an Issue</h2>
        <p className="text-gray-700 mb-4 text-center">
          If you have faced any misconduct, harassment, or unfair treatment, please submit your complaint below.
        </p>
        
        <form className="flex flex-col gap-4">
          <label className="text-gray-700 font-medium">Full Name</label>
          <input type="text" className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />

          <label className="text-gray-700 font-medium">Email</label>
          <input type="email" className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />

          <label className="text-gray-700 font-medium">Phone Number</label>
          <input type="tel" className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" />

          <label className="text-gray-700 font-medium">Complaint Details</label>
          <textarea className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Describe your complaint"></textarea>

          <label className="text-gray-700 font-medium">Upload Evidence (if any)</label>
          <input type="file" className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition-all shadow-md">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default InternalComplaint;