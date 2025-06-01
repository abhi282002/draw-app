
"use client"

import Link from "next/link"
import { Palette } from "@repo/ui/Icons"

export const Footer = () => {
  return <>
        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">DrawMaster</span>
                </div>
                <p className="text-gray-400">Empowering artists worldwide with professional digital drawing tools.</p>
              </div>
  
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Tutorials
                    </Link>
                  </li>
                </ul>
              </div>
  
              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Forums
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Challenges
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
  
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} DrawMaster. All rights reserved.</p>
            </div>
          </div>
        </footer>
  
  </>
}
