import { API_BASE_URL } from "@repo/common";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 12000, // Set a timeout of 10 seconds
  withCredentials: true, // Include credentials for cross-origin requests
})


export default axiosInstance;
export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
}
