"use client";

import Link from "next/link";
import { Button } from "@repo/ui/Button";
import { Menu, Palette, X } from "@repo/ui/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/Avatar"
import { useSession } from "next-auth/react";

interface HeaderProps{
  setIsAuthOpen: (isOpen: boolean) => void;
  isAuthOpen?: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function Header({isMobileMenuOpen,setIsAuthOpen,setIsMobileMenuOpen}:HeaderProps) {

  const {data} = useSession();

  return (
    <>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DrawMaster
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-purple-600 transition-colors">
              Gallery
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
           {data?.user.name?<>
           
           <Avatar className="w-10 h-10 shadow-sm">
              <AvatarImage src={data.user.image || "/default-avatar.png"} alt={data.user.name} />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 p-2">{data.user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>

           </>: <Button
              variant="ghost"
              onClick={() => setIsAuthOpen(true)}
              className="text-purple-600 hover:text-purple-700 cursor-pointer"
            >
              Sign In
            </Button>
}
            <Button
              onClick={() => setIsAuthOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t p-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-600 hover:text-purple-600">
                Features
              </Link>
              <Link href="#gallery" className="text-gray-600 hover:text-purple-600">
                Gallery
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-purple-600">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-purple-600">
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
               {data?.user.name?(

  
           <Avatar className="w-8 h-8 shadow-sm">
              <AvatarImage src={data.user.image || "/default-avatar.png"} alt={data.user.name} />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500">{data.user.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>

               ): <Button variant="ghost" onClick={() => setIsAuthOpen(true)}>
                       Sign In
                </Button>}
                <Button onClick={() => setIsAuthOpen(true)} className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )

}

