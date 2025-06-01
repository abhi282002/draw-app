"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/Card"
import { Brush, Download, Layers, Palette, Undo2, Users } from "@repo/ui/Icons"
export const Features = ()=>{
  return (
  <>
    {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tools for Every Artist</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From beginners to professionals, our comprehensive toolkit adapts to your creative needs
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Brush className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Advanced Brushes</CardTitle>
                  <CardDescription>
                    Over 100 customizable brushes including watercolor, oil paint, pencil, and digital effects
                  </CardDescription>
                </CardHeader>
              </Card>
  
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle>Layer Management</CardTitle>
                  <CardDescription>
                    Unlimited layers with blend modes, opacity controls, and advanced masking capabilities
                  </CardDescription>
                </CardHeader>
              </Card>
  
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Color Harmony</CardTitle>
                  <CardDescription>
                    AI-powered color suggestions, custom palettes, and professional color theory tools
                  </CardDescription>
                </CardHeader>
              </Card>
  
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Real-time Collaboration</CardTitle>
                  <CardDescription>
                    Work together with other artists in real-time, share feedback, and learn from the community
                  </CardDescription>
                </CardHeader>
              </Card>
  
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Export Anywhere</CardTitle>
                  <CardDescription>
                    Export in multiple formats including PNG, JPG, SVG, PSD, and print-ready files
                  </CardDescription>
                </CardHeader>
              </Card>
  
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Undo2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle>Unlimited Undo</CardTitle>
                  <CardDescription>
                    Never lose your progress with unlimited undo/redo and automatic cloud saving
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        </>
  )
}
