import React, { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";
import toast from "react-hot-toast";
import { AcademicProgramsGallery } from "../../components/index";
const ManageAcademicPrograms = () => {
    const [programs, setPrograms] = useState([]);
    const [formData, setFormData] = useState({ 
        name: "", 
        degreeType: "", 
        studentsSeat: "", 
        description: "", 
        image: null  // File object
    });

    // ✅ Fetch all academic programs
    const fetchPrograms = async () => {
        try {
            const response = await api.get("academic-program/academic");
            setPrograms(response.data.data || []);
        } catch (error) {
            toast.error("Failed to load programs");
        }
    };

    useEffect(() => {
        fetchPrograms();
    }, []);

    // ✅ Handle form submission (Create new program)
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.degreeType || !formData.studentsSeat) {
            toast.error("All fields are required!");
            return;
        }
    
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("degreeType", formData.degreeType);
        formDataToSend.append("studentsSeat", Number(formData.studentsSeat));
        formDataToSend.append("description", formData.description);
        if (formData.image) formDataToSend.append("image", formData.image); // Ensure file is added only if selected
    
    
        try {
            await api.post("academic-program/create", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" }
            });
    
            toast.success("Program added successfully");
            fetchPrograms();
            setFormData({ name: "", degreeType: "", studentsSeat: "", description: "", image: null });
        } catch (error) {
            console.error("Error:", error.response?.data || error);
            toast.error("Failed to add program");
        }
    };
    
    // ✅ Handle Delete Program
    const handleDelete = async (id) => {
        try {
            await api.delete(`academic-program/delete/${id}`);
            toast.success("Program deleted successfully");
            fetchPrograms();
        } catch (error) {
            toast.error("Failed to delete program");
        }
    };

    return (
        <div className="w-full pt-[9rem] bg-gray-100 min-h-screen md:px-12">
            <div className="w-[90%] mx-auto">
                <h1 className="text-3xl font-bold mb-6">Manage Academic Programs</h1>

                {/* ✅ Form for Adding Programs */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
                    <label className="block font-semibold mb-2">Degree Type</label>
                    <select 
                        className="w-full p-2 border rounded mb-4"
                        value={formData.degreeType}
                        onChange={(e) => setFormData({...formData, degreeType: e.target.value})}
                        required
                    >
                        <option value="">Select Degree Type</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="PhD">PhD</option>
                        <option value="Student Exchange">Student Exchange</option>
                    </select>

                    <label className="block font-semibold mb-2">Program Name</label>
                    <input 
                        type="text" 
                        placeholder="B.Tech in CSE, PhD in AI, etc." 
                        className="w-full p-2 border rounded mb-4"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                    />

                    <label className="block font-semibold mb-2">Total Seats</label>
                    <input 
                        type="number" 
                        placeholder="Number of seats available" 
                        className="w-full p-2 border rounded mb-4"
                        value={formData.studentsSeat}
                        onChange={(e) => setFormData({...formData, studentsSeat: e.target.value})}
                        required 
                    />

                    <label className="block font-semibold mb-2">Description</label>
                    <textarea
                        placeholder="Enter Description"
                        className="w-full border p-3 rounded-lg h-40 mb-4"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>

                    <label className="block font-semibold mb-2">Select Image</label>
                    <input 
                        type="file" 
                        className="w-full p-2 border rounded mb-4"
                        onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                    />

                    <button type="submit" className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded w-36 mt-4 mx-auto">
                        Add Program
                    </button>
                </form>

                <AcademicProgramsGallery 
                    programs={programs}
                    onDeleteSuccess={fetchPrograms}
                />

                
            </div>
        </div>
    );
};

export default ManageAcademicPrograms;
