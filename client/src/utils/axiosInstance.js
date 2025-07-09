import axios from "axios";

const api = axios.create({
  baseURL: "https://iiitn-web-dev.onrender.com/api/v1",
  withCredentials: true // for cookies/auth
});

export default api;
