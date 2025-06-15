"use client";
import React, { useEffect } from "react";
export default function Canvas(){
  const canvasRef = React.useRef<HTMLCanvasElement>(null);



  useEffect(() => {

    if(canvasRef.current){
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if(!ctx) return;

      // Set canvas background color
      ctx.fillStyle = "#f0f0f0";
      let clicked = false;
      let startX = 0;
      let startY = 0;
      canvas.addEventListener("mousedown",(e)=>{
         
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
      })

      canvas.addEventListener("mouseup",(e)=>{
        clicked = false

      })

      canvas.addEventListener("mousemove",(e)=>{
        if(!clicked) return;
        const currentX = e.clientX;
        const currentY = e.clientY;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = "#f0f0f0"; // Reset background color
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Redraw background

        // Draw rectangle
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.strokeRect(startX, startY, currentX - startX, currentY - startY);
      });

    }


  }, [canvasRef]);

  return (<>
  <div>
    <canvas ref={canvasRef}  width={"800"} height={"600"} />
  </div>
  </>)
}
