import { API_BASE_URL } from "@repo/common";
import axios from "axios";
import { getServerSideSession } from "./libs/getServerSideSession";
import { getSession, signOut } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL:API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 12000, // Set a timeout of 10 seconds
  withCredentials: true, // Include credentials for cross-origin requests
})

axiosInstance.interceptors.response.use(
  async request => {
    let session

     try {
      session = await getServerSideSession()
    } catch (error) {
      console.error('Fetching from server session failed', error)
    }

    if(!session){
      session = await getSession()
    }

    if(!session){
      void signOut({
        callbackUrl:process.env.NEXTAUTH_URL! || 'http://localhost:3000',
        redirect: true,
      })

      return Promise.reject(new Error('Session not valid. Please sign in again.'));
    }

    request.headers.Authorization = `Bearer ${session.user.token}`;

    return request;
  },
  error =>{
    return Promise.reject(error)
  }
)


export default axiosInstance;
