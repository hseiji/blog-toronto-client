import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://blog-toronto-api.onrender.com/api/',
})

export const PF_path = 'https://blog-toronto-api.onrender.com/images/'
