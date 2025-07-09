import React, { useState } from "react";
import axios from "axios";

const GovernanceGroupsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    profile_image: null,
    education: "",
    specialization: "",
    experience: "",
    group_type: "BoG",
    group_name: "",
    position: "Member",
    tenure: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", message: "" });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profile_image: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "", message: "" });

    try {
      const memberResponse = await axios.post("/api/members", {
        name: formData.name,
        email: [formData.email],
        contact_number: [formData.contact_number],
        profile_image: formData.profile_image,
        additional_info: {
          education: formData.education,
          specialization: formData.specialization,
          experience: formData.experience,
        },
      });

      await axios.post("/api/governance-groups", {
        member_id: memberResponse.data._id,
        group_type: formData.group_type,
        group_name: formData.group_name,
        position: formData.position,
        tenure: formData.tenure,
        description: formData.description,
      });

      setSubmitMessage({
        type: "success",
        message: "Member added to governance group successfully!",
      });

      setFormData({
        name: "",
        email: "",
        contact_number: "",
        profile_image: null,
        education: "",
        specialization: "",
        experience: "",
        group_type: "BoG",
        group_name: "",
        position: "Member",
        tenure: "",
        description: "",
      });
      setImagePreview(null);
    } catch (error) {
      setSubmitMessage({
        type: "error",
        message: error.response?.data?.message || "Failed to add member. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex mt-[8rem] justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Add to Governance Group</h2>

        {submitMessage.message && (
          <div
            className={`p-4 mb-4 rounded ${
              submitMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitMessage.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="contact_number"
            placeholder="+91 xxxxxxxxxx"
            value={formData.contact_number}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <div className="space-y-2">
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              name="profile_image"
              onChange={handleFileChange}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            {imagePreview && (
              <div className="mt-2 flex justify-center">
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="h-32 w-32 object-cover rounded-full border-2 border-gray-300"
                />
              </div>
            )}
          </div>

          <input
            type="text"
            name="education"
            placeholder="Education Qualifications"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="specialization"
            placeholder="Area of Specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <label className="block text-gray-700">Group Type</label>
          <select
            name="group_type"
            value={formData.group_type}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="BoG">Board of Governors</option>
            <option value="Committee">Committee</option>
            <option value="Senate">Senate</option>
          </select>

          <label className="block text-gray-700">Position</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            <option value="Member">Member</option>
            <option value="Secretary">Secretary</option>
            <option value="Chairman">Chairman</option>
          </select>

          {formData.group_type === "Committee" && (
            <input
              type="text"
              name="group_name"
              placeholder="Committee Name"
              value={formData.group_name}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          )}

          <input
            type="text"
            name="tenure"
            placeholder="Tenure Period"
            value={formData.tenure}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <textarea
            name="description"
            placeholder="Brief Description/Role"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 h-32"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 rounded text-white font-medium transition-colors ${
              isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GovernanceGroupsForm;
