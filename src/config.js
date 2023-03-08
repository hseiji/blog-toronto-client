import axios from 'axios'

export const axiosInstance = axios.create({
  // baseURL: 'https://blog-toronto-api.onrender.com/api/',
  baseURL: 'https://toronto-gems.henriqu3.com/api/',
})

// export const PF_path = 'https://blog-toronto-api.onrender.com/images/'
export const PF_path = 'https://toronto-gems.henriqu3.com/images/'
