import { SignInProps } from '@repo/common/schema';
import {  SignUpProps } from '@repo/common/schema';
import axiosInstance from '../axiosConfig';


export const signIn = async ({email,password}:SignInProps):Promise<{message:string}> => {

  try {
    
    const response = await axiosInstance.post('/login',{
      email: email,
      password: password
    })


    if(response.status === 200){
      return response.data;
    }

    throw new Error("Sign-in failed, please try again later."); 

  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
    
  }

}


export const signUp = async ({name,email,password}:SignUpProps):Promise<{message:string}> =>{

  try {
    
    const response = await axiosInstance.post('/signup',{
      name: name,
      email: email,
      password: password
    })


    if(response.status === 200){
      return response.data; 
    }

    throw new Error("Sign-up failed, please try again later.");
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error;
    
  }
}
