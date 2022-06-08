import axios, {AxiosRequestConfig} from "axios";
import {errorNotification} from "../utils";

const $api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    return config;
  }
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
})

$api.interceptors.response.use(
  response => response,
  error => {
    errorNotification(error.response.data?.message)
    return Promise.reject(error)
  }
)
export default $api;