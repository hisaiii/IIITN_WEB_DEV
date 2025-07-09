// src/utils/axiosInstance.js

import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // For Vite projects
    withCredentials: true // For cookies (admin authentication)
});

export default api;
