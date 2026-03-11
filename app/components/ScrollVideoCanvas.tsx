"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;

export default function ScrollVideoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Load images
    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };
    // Add basePath for GitHub Pages deployed to /portfolio (Applies to dev and prod)
    const basePath = "/portfolio";

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Pad to 4 digits: e.g. 0001
      const paddedIndex = i.toString().padStart(4, "0");
      img.src = `${basePath}/frames/frame_${paddedIndex}.jpg`;
      images.push(img);
    }

    // Function to render the current frame onto the canvas
    const render = () => {
      // Ensure the frame index is within bounds (0 to 119)
      const currentFrame = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(airpods.frame))
      );
      const img = images[currentFrame];

      if (img && img.complete) {
        // Calculate crop/scale to fill the screen while maintaining aspect ratio
        // How much of the bottom to crop off (e.g. 0.08 = crop bottom 8%)
        const cropPercentage = 0.08;
        const sourceWidth = img.width;
        const sourceHeight = img.height * (1 - cropPercentage);

        const canvasRatio = canvas.width / canvas.height;
        const sourceRatio = sourceWidth / sourceHeight;

        let renderWidth = canvas.width;
        let renderHeight = canvas.height;
        let x = 0;
        let y = 0;

        if (canvasRatio > sourceRatio) {
          // Canvas is wider than cropped image
          renderHeight = canvas.width / sourceRatio;
          y = (canvas.height - renderHeight) / 2;
        } else {
          // Canvas is taller than cropped image
          renderWidth = canvas.height * sourceRatio;
          x = (canvas.width - renderWidth) / 2;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the cropped portion:
        // context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        context.drawImage(
          img,
          0,
          0,
          sourceWidth,
          sourceHeight,
          x,
          y,
          renderWidth,
          renderHeight
        );
      }
    };

    // Render the first frame as soon as it loads
    images[0].onload = render;

    // Handle canvas resizing
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    window.addEventListener("resize", onResize);
    onResize(); // Initial sizing

    // Create the GSAP tween linked to ScrollTrigger
    gsap.to(airpods, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          render();
          // Fade to black in the last 10% of scroll
          if (canvas) {
            if (self.progress > 0.9) {
              canvas.style.opacity = (1 - (self.progress - 0.9) * 10).toString();
            } else {
              canvas.style.opacity = "1";
            }
          }
        },
      },
      onUpdate: render,
    });

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 bg-black">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
      {/* Dark overlay to make content more readable */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
    </div>
  );
}
