import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "../contexts/adminContext.jsx";

const ProtectedRoute = () => {
    const { admin, loading } = useAdmin();

    if (loading) return <p>Loading...</p>;

    return admin ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
