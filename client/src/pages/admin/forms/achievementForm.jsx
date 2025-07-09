import React, { useState, useEffect } from "react";
import api from "../../../utils/axiosInstance";

const AchievementForm = () => {
  const [faculties, setFaculties] = useState([]);
  const [researchDomains, setResearchDomains] = useState([]);
  const [formData, setFormData] = useState({
    year: "",
    category: "Faculty",
    name: "",
    title: "Paper Published",
    description: "",
    relatedLinks: [""],
    associatedPeople: [],
    department: "CSE",
    researchDomain: "",
    image: "",
    amount: "",
  });

  useEffect(() => {
    api.get("/faculties").then((res) => setFaculties(res.data));
    api.get("/research-domains").then((res) => setResearchDomains(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "relatedLinks" && key !== "associatedPeople") {
        formDataToSend.append(key, formData[key]);
      }
    });
    formDataToSend.append("relatedLinks", JSON.stringify(formData.relatedLinks));
    formDataToSend.append("associatedPeople", JSON.stringify(formData.associatedPeople));

    await api.post("/achievements/create", formDataToSend);
    console.log("Achievement added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 mt-[8rem] bg-gray-100 shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Achievement</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Year</label>
        <input type="number" name="year" value={formData.year} onChange={handleChange} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <select name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="Paper Published">Paper Published</option>
          <option value="Conference Paper">Conference Paper</option>
          <option value="Journal Paper">Journal Paper</option>
          <option value="Grant Received">Grant Received</option>
          <option value="Patent Received">Patent Received</option>
          <option value="Competition Won">Competition Won</option>
        </select>
      </div>
      {formData.title === "Grant Received" && (
        <div className="mb-4">
          <label className="block text-gray-700">Grant Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700">Department</label>
        <select name="department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="BASIC SCIENCE">Basic Science</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Research Domain</label>
        <select name="researchDomain" value={formData.researchDomain} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          {researchDomains.map((domain) => (
            <option key={domain._id} value={domain._id}>{domain.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Faculty</label>
        <select name="associatedPeople" multiple onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions, option => option.value);
          setFormData({ ...formData, associatedPeople: selected });
        }} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          {faculties.map((faculty) => (
            <option key={faculty._id} value={faculty._id}>{faculty.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image</label>
        <input type="file" accept="image/*" onChange={handleFileChange} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
    </form>
  );
};

export default AchievementForm;
