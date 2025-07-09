import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/axiosInstance"; // ✅ Centralized API instance

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ **Check Admin Authentication**
    const checkAuth = async () => {
        try {
            const response = await api.get("/admin/profile", { withCredentials: true });
            setAdmin(response.data.data); // ✅ Extract admin details correctly
        } catch (error) {
            console.error("Auth check failed:", error.response?.data?.message);
            setAdmin(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    // ✅ **Admin Login**
    const login = async ({ email, password }) => {
        try {
            await api.post("/admin/login", { email, password }, { withCredentials: true });
            await checkAuth(); // ✅ Refresh admin state
        } catch (error) {
            console.error("Login failed:", error.response?.data?.message);
            throw new Error(error.response?.data?.message || "Login error");
        }
    };

    // ✅ **Admin Logout**
    const logout = async () => {
        try {
            await api.post("/admin/logout", {}, { withCredentials: true });
            setAdmin(null);
        } catch (error) {
            console.error("Logout failed:", error.response?.data?.message);
        }
    };

    return (
        <AdminContext.Provider value={{ admin, loading, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};
