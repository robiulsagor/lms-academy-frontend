import axios from "axios";

const backendUrl = import.meta.env.BACKEND_URL

const axiosInstance = axios.create({
    baseURL: backendUrl,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem("accessToken")

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
},
    error => {
        return Promise.reject(error);
    })

export default axiosInstance