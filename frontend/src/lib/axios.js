import axios from "axios";

// Dynamic backend URL
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // Local backend
    : "https://thinkboard-backend-gapx.onrender.com/api"; // Production backend (Render)

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
