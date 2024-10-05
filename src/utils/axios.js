import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL

const axiosInstance = axios.create({
    baseURL: backendUrl,
    timeout: 10000,
});

export default axiosInstance