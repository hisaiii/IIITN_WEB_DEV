import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../utils/axiosInstance";
import DynamicSectionForm from "./forms/dynamicSectionForm";

const ManagePage = () => {
  const { alias } = useParams(); // Get alias from the route
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const navigate =useNavigate();

  useEffect(() => {
    fetchSections();
  }, [alias]);

  const fetchSections = async () => {
    try {
      const response = await api.get(`/pageSectionConfig/getAllSections/${alias}`);
      setSections(response.data.data || []);
      if (response.data.length > 0) {
        setActiveSection(response.data.sections[0]); // Set first section as active initially
      }
    } catch (error) {
      console.error("Failed to fetch sections", error);
    }
  };

  return (
    <div className="flex w-full mt-[8rem] bg-gray-100 min-h-screen">
      {/* Sidebar for Sections */}
      <div className="w-1/4 p-6 bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4">Manage {alias}</h2>
        <ul className="space-y-3">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer rounded-lg ${
                activeSection === section ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-lg mt-2 mx-auto cursor-pointer"
                onClick={()=>navigate(`/admin/manage/${alias}/createSection`)}
        >Add New Section</button>
      </div>

      {/* Right Side: Dynamic Content Form */}
      <div className="w-3/4 p-6">
        {activeSection ? (
          <DynamicSectionForm sectionName={activeSection} alias={alias} />
        ) : (
          <p>Select a section to manage</p>
        )}
      </div>
    </div>
  );
};

export default ManagePage;
