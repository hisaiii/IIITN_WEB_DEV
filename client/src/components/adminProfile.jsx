import React from "react";
import { useAdmin } from "../contexts/adminContext.jsx";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
    const { admin, loading, logout } = useAdmin();
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (!admin) return <p>Admin not logged in.</p>;

    // ✅ Handle Logout
    const handleLogout = async () => {
        await logout();
        navigate("/admin/login"); 
    };

    return (
        <div className="max-w-md mx-auto mt-[12rem] p-6 bg-gray-200 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Profile</h2>
            <p><strong>Name:</strong> {admin.name}</p>
            <p><strong>Email:</strong> {admin.email}</p>
            <p><strong>Role:</strong> {admin.role}</p>

            {admin && (
                <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    Logout
                </button>
            )}
        </div>
    );
};

export default AdminProfile;
