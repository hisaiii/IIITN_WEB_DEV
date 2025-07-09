import React, { useState } from "react";
import axios from "axios";

const AdministrativePeopleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    profile_image: null,
    education: "",
    specialization: "",
    experience: "",
    designation: "",
    department: "",
    responsibilities: "",
    office_location: "",
    reports_to: "",
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
    
    // Create image preview
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
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
      // Single API call with complete form data
      await axios.post("https://iiitn-web-dev.onrender.com/api/administrative-people/create", formData);

      setSubmitMessage({
        type: "success",
        message: "Administrative person added successfully!",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        contact_number: "",
        profile_image: null,
        education: "",
        specialization: "",
        experience: "",
        designation: "",
        department: "",
        responsibilities: "",
        office_location: "",
        reports_to: "",
      });
      setImagePreview(null);
      
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage({
        type: "error",
        message: error.response?.data?.message || "Failed to add administrative person. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-200 p-8 mt-[8rem] rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
        Add Administrative Person
      </h2>
      
      {submitMessage.message && (
        <div 
          className={`p-4 mb-6 rounded-lg ${
            submitMessage.type === "success" 
              ? "bg-green-100 text-green-800 border border-green-200" 
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {submitMessage.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">
              Personal Information
            </h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number*
            </label>
            <input
              type="text"
              name="contact_number"
              placeholder="+91 xxxxxxxxxx"
              value={formData.contact_number}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image*
            </label>
            <div className="flex items-center space-x-4">
              <label className="cursor-pointer bg-white p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-200 flex-grow text-center">
                <span className="text-blue-600">Choose file</span>
                <input
                  type="file"
                  name="profile_image"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                  required
                />
              </label>
              
              {imagePreview && (
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-blue-500">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Upload a professional headshot (JPG, PNG)
            </p>
          </div>
            
          {/* Professional Background */}
          <div className="md:col-span-2 pt-2">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">
              Professional Background
            </h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Education*
            </label>
            <input
              type="text"
              name="education"
              placeholder="MBA in Business Administration"
              value={formData.education}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization*
            </label>
            <input
              type="text"
              name="specialization"
              placeholder="Finance Management"
              value={formData.specialization}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience*
            </label>
            <textarea
              name="experience"
              placeholder="10+ years in administrative management with..."
              value={formData.experience}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          {/* Position Details */}
          <div className="md:col-span-2 pt-2">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">
              Position Details
            </h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation*
            </label>
            <input
              type="text"
              name="designation"
              placeholder="Administrative Officer"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department*
            </label>
            <input
              type="text"
              name="department"
              placeholder="Human Resources"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Responsibilities*
            </label>
            <textarea
              name="responsibilities"
              placeholder="Managing administrative operations, coordinating staff activities..."
              value={formData.responsibilities}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Describe key responsibilities and duties
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Office Location*
            </label>
            <input
              type="text"
              name="office_location"
              placeholder="Admin Building, Room 105"
              value={formData.office_location}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reports To*
            </label>
            <input
              type="text"
              name="reports_to"
              placeholder="Department Head"
              value={formData.reports_to}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200 shadow-md ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Add Administrative Person"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdministrativePeopleForm;