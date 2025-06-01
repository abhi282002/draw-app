"use client"

import Image from "next/image"
import { Heart, Star } from "@repo/ui/Icons"

export const Gallery = () => {

  return (
    <>
       {/* Gallery Section */}
          <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Showcase</h2>
                <p className="text-xl text-gray-600">Amazing artwork created by our talented community</p>
              </div>
    
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="group relative overflow-hidden rounded-xl">
                    <Image
                      src={`/placeholder.svg?height=300&width=400`}
                      alt={`Artwork ${i}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{0}</span>
                          <Star className="w-4 h-4 ml-2" />
                          <span className="text-sm">4.{1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
    </>
  )

}
