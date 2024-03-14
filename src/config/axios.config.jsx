import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: "3000",
    timeoutErrorMessage: "Server timed out",
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: "json"
})

export default axiosInstance;