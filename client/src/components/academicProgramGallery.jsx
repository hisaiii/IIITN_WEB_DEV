import React from "react";
import api from "../utils/axiosInstance";
import toast from "react-hot-toast";

const AcademicProgramsGallery = ({ programs = [], onDeleteSuccess }) => {

    // ✅ Handle Delete Program
    const handleDelete = async (programId) => {
        try {
            await api.delete(`/academic-program/delete/${programId}`);
            toast.success("Program deleted successfully");
            onDeleteSuccess(programId);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete program");
        }
    };

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Existing Programs</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.length > 0 ? (
                    programs.map((program) => (
                        <div key={program._id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
                            
                            {/* ✅ Display Image (or fallback placeholder) */}
                            {program.image ? (
                                <img
                                    src={program.image}
                                    alt={program.name}
                                    className="w-full h-40 object-cover bg-contain bg-center"
                                />
                            ) : (
                                <div className="p-4 text-center text-gray-500">No Image Available</div>
                            )}

                            {/* ✅ Program Details */}
                            <div className="p-4">
                                <h3 className="font-bold">{program.name} ({program.degreeType})</h3>
                                <p className="text-gray-600">{program.description || "No Description"}</p>
                                <p className="text-sm text-gray-500">Total Seats: {program.studentsSeat}</p>
                            </div>

                            {/* ✅ Actions (Delete Button) */}
                            <div className="p-4 flex justify-between items-center">
                                <button
                                    className="text-white bg-red-500 px-3 py-1 rounded cursor-pointer"
                                    onClick={() => handleDelete(program._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">No programs added yet.</div>
                )}
            </div>
        </div>
    );
};

export default AcademicProgramsGallery;
