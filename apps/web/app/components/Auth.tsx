"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@repo/ui/Button'
import { Input } from "@repo/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/Tabs"
import { X } from '@repo/ui/Icons'
import { signUp } from '../actions/auth';
import { signIn } from 'next-auth/react';


export interface AuthProps {
  isAuthOpen: boolean;
  setIsAuthOpen: (isOpen: boolean) => void;
}

interface FormData {
  name?: string;
  email: string; 
  password: string;
}

export const Auth = ({isAuthOpen,setIsAuthOpen}:AuthProps) => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  })

  const [tabsValue, setTabsValue] = useState<string>('signin');
  const handleTabsChange = (value:string) => {
    setTabsValue(value);
    setFormData({ name: '', email: '', password: '' }); // Reset form data when switching tabs
  }
  
  const [isPending, setIsPending] = useState(false);


  const signInAction = async ()=>{

    setIsPending(true);
    
    const res = await signIn('credentials',{email: formData.email, password: formData.password,redirect: false})

    if(res && res.ok){
      console.log("Sign-in successful:", res);
      setIsAuthOpen(false); // Close the auth modal on successful sign-in
    } else {
      if(res?.error){
        console.error("Sign-in failed:", res.error);
      }
    }

  }

  const signUpAction = async () => {
    setIsPending(true);
   
    const {message} = await signUp({name:formData.name,email: formData.email, password: formData.password})

    if(message){
     
      setTabsValue('signin');
      setFormData({ name: '', email: '', password: '' }); 
      
    } else {
      console.error("Sign-up failed");
    }

    setIsPending(false);

  }


  return (
    <>
        {isAuthOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md bg-white shadow-2xl rounded-lg">
            <CardHeader className="text-center">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl">Welcome to DrawMaster</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsAuthOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription>Sign in to your account or create a new one to start drawing</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" value={tabsValue} onValueChange={handleTabsChange}  className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin"  className='cursor-pointer'>Sign In</TabsTrigger>
                  <TabsTrigger value="signup" className='cursor-pointer'>Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="signin" className="space-y-4">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="signin-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="signin-email" type="email" placeholder="Enter your email" className="mt-1" />
                    </div>
                    <div>
                      <label htmlFor="signin-password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="signin-password" type="password" placeholder="Enter your password" className="mt-1" />
                    </div>
                    <Button onClick={signInAction} disabled={isPending} className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Sign In</Button>
                  </form>
                  <div className="text-center">
                    <Link href="#" className="text-sm text-purple-600 hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value={"signup"} className="space-y-4">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="signup-name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input onChange={(e) => setFormData({ ...formData, name: e.target.value })} id="signup-name" type="text" placeholder="Enter your full name" className="mt-1" />
                    </div>
                    <div>
                      <label htmlFor="signup-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="signup-email" type="email" placeholder="Enter your email" className="mt-1" />
                    </div>
                    <div>
                      <label htmlFor="signup-password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="signup-password" type="password" placeholder="Create a password" className="mt-1" />
                    </div>
                    
                    <Button disabled={isPending} onClick={signUpAction} className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Create Account</Button>
                  </form>
                  <p className="text-xs text-gray-500 text-center">
                    By signing up, you agree to our{" "}
                    <Link href="#" className="text-purple-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-purple-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

