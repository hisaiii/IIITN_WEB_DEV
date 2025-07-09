import axios from "axios";

const api = axios.create({
  baseURL: "https://iiitn-web-dev.onrender.com",
  withCredentials: true // for cookies/auth
});

export default api;
