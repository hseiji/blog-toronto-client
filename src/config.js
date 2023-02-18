import axios from 'axios'

export const axiosInstance = axios.create({
  // baseURL: 'https://blog-toronto-api.onrender.com/api/',
  baseURL: 'http://3.23.64.105/api/',
})

// export const PF_path = 'https://blog-toronto-api.onrender.com/images/'
export const PF_path = 'http://3.23.64.105/images/'
