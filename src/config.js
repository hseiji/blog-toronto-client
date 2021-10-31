import axios from "axios";

export const axiosInstance = axios.create ({
    // baseURL:  "http://localhost:8000/api/"
    baseURL:  "https://blog-toronto.herokuapp.com/api/"
})