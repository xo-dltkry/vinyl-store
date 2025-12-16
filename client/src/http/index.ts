import axios, {type InternalAxiosRequestConfig} from "axios";

const baseURL = import.meta.env.VITE_API_URL as string

export const $host = axios.create({
  baseURL,
})

export const $authHost = axios.create({
  baseURL,
})

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  if(token) {
    config.headers.set("Authorization", `Bearer ${token}`)
  }
  return config
}

$authHost.interceptors.request.use(authInterceptor)
