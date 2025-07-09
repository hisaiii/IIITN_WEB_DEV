import React from "react";

const NetworkingComplaint = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">Networking Complaint</h1>
        <p className="text-gray-600 text-center mb-6">Facing network issues? Fill out the form below.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Issue Description:</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Describe your network issue"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default NetworkingComplaint;