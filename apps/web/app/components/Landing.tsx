"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@repo/ui/Button"
import { Badge } from "@repo/ui/Badge"
import {  Brush, Sparkles,Zap } from "@repo/ui/Icons"
import { Header } from "./Header"
import { Auth } from "./Auth"
import { Footer } from "./Footer"
import { Gallery } from "./Gallery"
import { Features } from "./Features"


export default function DrawingAppLanding() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(()=>{
    //hydration fix
    if(typeof window !== "undefined"){
      setIsMobileMenuOpen(false)
    }

  },[])


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <Header setIsAuthOpen={setIsAuthOpen} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Sparkles className="w-4 h-4 mr-1" />
            New AI-Powered Tools Available
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Unleash Your Creativity
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The most intuitive digital drawing platform that brings your imagination to life. Create stunning artwork
            with professional tools, collaborate with artists worldwide, and share your masterpieces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => setIsAuthOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8"
            >
              Start Drawing Free
              <Brush className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="DrawMaster Interface"
                width={800}
                height={400}
                className="rounded-xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <Features />

      {/* Gallery Section */}

      <Gallery />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of artists who are already creating stunning artwork with DrawMaster
          </p>
          <Button
            size="lg"
            onClick={() => setIsAuthOpen(true)}
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8"
          >
            Start Your Free Trial
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}

      <Footer />

      
      {/* Authentication Modal */}

      <Auth isAuthOpen={isAuthOpen} setIsAuthOpen={setIsAuthOpen} />

      
    </div>
  )
}
