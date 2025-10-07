import axios from "axios"

const API_URL = "https://mea-api-production.up.railway.app/"

const api = axios.create({
  baseURL: API_URL,
})

// Add JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
