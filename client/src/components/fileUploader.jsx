import React, { useState } from "react";
import api from "../utils/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

const FileUploader = ({  alias,
    sectionName,
    type = "image", // ✅ Default to "image" if type is not provided
    allowedContentTypes = ["image", "text"],
    allowMultiple = false,
    additionalFields = {},
    onUploadSuccess,
    uploadTogether = false }) => {
    const [formData, setFormData] = useState({ heading: "", description: "", file: null });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    };

    const handleSubmit = async () => {
        if (!formData.file && !formData.heading && !formData.description) {
            toast.error("At least one field is required");
            return;
        }
    
        setLoading(true);
        const uploadData = new FormData();
        if (formData.file) uploadData.append("file", formData.file);
        uploadData.append("heading", formData.heading);
        uploadData.append("description", formData.description);
    
        // ✅ Debug: Log FormData entries
        for (let [key, value] of uploadData.entries()) {
        }
    
        try {
            const response = await api.post(`/admin/page/${alias}/${sectionName}/upload/image-text`, uploadData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Content uploaded successfully");
            onUploadSuccess(response.data.data);
        } catch (error) {
            toast.error(error.response?.data?.message || "Upload failed");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="border border-gray-300 rounded-lg p-6 mb-6 bg-gray-100 shadow-lg">
            <Toaster />
            <input
                type="text"
                name="heading"
                placeholder="Enter Heading"
                className="w-full border p-3 rounded-lg mb-4"
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Enter Description"
                className="w-full border p-3 rounded-lg h-40 mb-4"
                onChange={handleChange}
            ></textarea>
            <input
                type="file"
                name="file"  // ✅ Added name attribute
                accept={type === "pdf" ? "application/pdf" : type === "image" ? "image/*" : "*"}
                className="cursor-pointer w-full mb-4"
                onChange={handleChange}
            />


            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                {loading ? "Uploading..." : "Upload Content"}
            </button>
        </div>
    );
};

export default FileUploader;



