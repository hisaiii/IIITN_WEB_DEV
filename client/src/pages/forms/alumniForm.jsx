import React, { useState } from "react";
import api from "../../utils/axiosInstance"; // Axios instance with baseURL
import toast from "react-hot-toast";

const AlumniForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    degree: "",
    department: "",
    currentPosition: "",
    company: "",
    location: "",
    linkedIn: "",
    achievements: "",
    profileImage: null, // File object for profile image upload
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData to send file
    const alumniData = new FormData();
    Object.keys(formData).forEach((key) => {
      alumniData.append(key, formData[key]);
    });

    try {
      await api.post("/api/v1/alumni/create", alumniData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Alumni data added successfully!");
      setFormData({
        name: "",
        batch: "",
        degree: "",
        department: "",
        currentPosition: "",
        company: "",
        location: "",
        linkedIn: "",
        achievements: "",
        profileImage: null,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add alumni data");
    }
  };

  return (
    <div className="w-full max-w-lg mt-[8rem] mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Register as Alumni</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Batch */}
        <input
          type="text"
          name="batch"
          placeholder="Batch (e.g., 2020-2024)"
          className="w-full p-2 border rounded"
          value={formData.batch}
          onChange={handleChange}
          required
        />

        {/* Degree */}
        <select
          name="degree"
          className="w-full p-2 border rounded"
          value={formData.degree}
          onChange={handleChange}
          required
        >
          <option value="">Select Degree</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="PhD">PhD</option>
        </select>

        {/* Department */}
        <select
          name="department"
          className="w-full p-2 border rounded"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="AI">AI ML</option>
          <option value="Other">ECI</option>
          <option value="Other">HGI</option>
          <option value="Other">DSA</option>
        </select>

        {/* Current Position */}
        <input
          type="text"
          name="currentPosition"
          placeholder="Current Position"
          className="w-full p-2 border rounded"
          value={formData.currentPosition}
          onChange={handleChange}
          required
        />

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full p-2 border rounded"
          value={formData.company}
          onChange={handleChange}
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Current Location"
          className="w-full p-2 border rounded"
          value={formData.location}
          onChange={handleChange}
        />

        {/* LinkedIn */}
        <input
          type="url"
          name="linkedIn"
          placeholder="LinkedIn Profile URL"
          className="w-full p-2 border rounded"
          value={formData.linkedIn}
          onChange={handleChange}
        />

        {/* Achievements */}
        <textarea
          name="achievements"
          placeholder="Achievements (comma-separated)"
          className="w-full p-2 border rounded"
          value={formData.achievements}
          onChange={handleChange}
        />

        {/* Profile Image Upload */}
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded"
          onChange={handleFileChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default AlumniForm;
