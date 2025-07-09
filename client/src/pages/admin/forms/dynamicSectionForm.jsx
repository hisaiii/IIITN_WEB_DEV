import React, { useState, useEffect } from "react";
import api from "../../../utils/axiosInstance";
import { ContentSetList } from "../../../components/index.js";



const DynamicSectionForm = ({ sectionName, alias }) => {
  const [sectionConfig,setSectionConfig] =useState({});
  const [formData, setFormData] = useState([]);
  const [files, setFiles] = useState({});
  const [contentSets, setContentSets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const fields = sectionConfig[sectionName] || [];

  useEffect(() => {
    fetchContent();
  }, [sectionName]); // Fetch content only when section changes
  useEffect(() => {
    fetchSectionConfigs();
  }, []); // Fetch content only when section changes
  
  const fetchSectionConfigs=async()=>{
      try {
          const response=await api.get(`/pageSectionConfig/getAllSectionConfig/${alias}`)

          setSectionConfig(response.data.data||{});
      } catch (error) {
         console.log("Error in fetching sectionConfigs",error);
      }
  }
  const fetchContent = async () => {
    try {
      const res = await api.get(`/page/getSection/${alias}/${sectionName}`);
      setContentSets(res.data.data.contentSets || []);
    } catch (error) {
      console.error("Failed to load content", error);
    }
  };

  const handleChange = (e, fieldName,fieldType) => {
     const newEntry={
       type:fieldType,
       field:fieldName,
       value:e.target.value
     }
     setFormData((prev)=>{
      let updatedData=[...prev];
      let index=updatedData.findIndex((item)=>item.field==fieldName);
      if(index===-1){
         updatedData.push(newEntry);
     }else{
       updatedData[index]=newEntry;

     }
      return updatedData;

     });
  };

  const handleFileChange = (e, field) => {
    setFiles({ ...files, [field]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("formData",JSON.stringify(formData));
    Object.keys(files).forEach((key) => {
      data.append("images", files[key]);
    });

    try {
      await api.post(`/page/addContentSet/${alias}/${sectionName}`, data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage("Uploaded Successfully!");
      fetchContent();
    } catch (error) {
      setMessage("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/page/deleteContentSet/${alias}/${sectionName}/${id}`);
      fetchContent();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleSetActive = async (id, isActive) => {
    try {
      await api.patch(`/page/setActiveStatus/${alias}/${sectionName}/${id}`, { isActive: !isActive });
      fetchContent();
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  return (
    <div className="p-4 mt-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">Manage {sectionName}</h2>

      <form onSubmit={handleSubmit} className="mb-5">
        {fields.map((field,index) => (
          <div key={index} className="mb-2">
            {field.type === "text" || field.type === "number" ? (
              <input
                type={field.type}
                placeholder={field.field}
                onChange={(e) => handleChange(e,field.field,field.type)}
                className="border p-2 w-full"
              />
            ) : (
              <input type="file" onChange={(e) => handleFileChange(e, field.field)} />
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded cursor-pointer" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {message && <p className="text-sm text-green-500">{message}</p>}
      
      {/* Show Content for the Active Section */}
      <ContentSetList contentSets={contentSets} handleSetActive={handleSetActive} handleDelete={handleDelete} />
    </div>
  );
};

export default DynamicSectionForm;

// const sectionConfig = {
  // hero: [{ type: "image", field: "image" }],
  // mission: [
  //   { type: "text", field: "heading" },
  //   { type: "text", field: "description" },
  //   { type: "image", field: "image" }
  // ],
  // counter: [
  //   { type: "number", field: "number1" },
  //   { type: "text", field: "relatedText1" },
  //   { type: "number", field: "number2" },
  //   { type: "text", field: "relatedText2" }
  // ],
  // research: [
  //   { type: "text", field: "heading" },
  //   { type: "text", field: "description" },
  //   { type: "number", field: "number1" },
  //   { type: "text", field: "relatedText1" }
  // ]
// };
