import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/axiosInstance";

const SectionConfigForm = () => {
  const [type, setType] = useState("");
  const [field, setField] = useState("");
  const [sectionName, setSectionName] = useState("");
  const [sectionData, setSectionData] = useState([]);
  const { alias } = useParams();

  const handleTypeChange = (e) => setType(e.target.value);
  const handleFieldChange = (e) => setField(e.target.value);
  const handleSectionNameChange = (e) => setSectionName(e.target.value);

  const handleAddField = () => {
    const newObj = { type, field };
    setSectionData((prev) => [...prev, newObj]);
    setType("");
    setField("");
  };

  const handleDeleteField = (index) => {
    setSectionData((prevData) => prevData.filter((_, ind) => ind !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const requestData = { sectionData };

    await api.post(`/pageSectionConfig/createSection/${alias}/${sectionName}`,{sectionData}, {
      headers: { "Content-Type": "application/json" }
    })
    .then(() => console.log("Successfully created section"))
    .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="bg-white w-full mt-[8rem] px-28">
        <div className="py-4">
          <label htmlFor="sectionName" className="text-lg mr-4">Enter Section Name :</label>
          <input
            id="sectionName"
            type="text"
            name="sectionName"
            value={sectionName}
            onChange={handleSectionNameChange}
            className="bg-gray-100 hover:outline focus:ring-2 rounded-sm px-2 py-1"
            placeholder="i.e. text"
          />
        </div>
        
        <div>
          <ul>
            {sectionData.length > 0 &&
              sectionData.map((data, index) => (
                <li key={index} className="bg-gray-100 py-2 px-2">
                  <span className="font-semibold">{data.type}</span> : {data.field}
                  <button
                    className="bg-red-500 hover:bg-red-600 cursor-pointer px-2 py-1 rounded-lg ml-10"
                    onClick={() => handleDeleteField(index)} // Fixes the bug
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
          
          <div className="gap-8 flex flex-col">
            <div>
              <label htmlFor="type" className="text-lg mr-4">Enter Type of Field</label>
              <input
                id="type"
                type="text"
                name="type"
                value={type}
                onChange={handleTypeChange}
                className="bg-gray-100 hover:outline focus:ring-2 px-2 py-1"
                placeholder="i.e. text"
              />
            </div>

            <div>
              <label htmlFor="field" className="text-lg mr-4">Enter Field Name</label>
              <input
                id="field"
                type="text"
                name="field"
                value={field}
                onChange={handleFieldChange}
                className="bg-gray-100 hover:outline focus:ring-2 px-2 py-1"
                placeholder="i.e. heading, description, number"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 w-24 px-2 py-1 rounded-sm"
              onClick={handleAddField}>
              Add Field
            </button>
          </div>
        </div>

        <button onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-sm mt-4">
          Submit
        </button>
      </div>
    </>
  );
};

export default SectionConfigForm;
