"use client";

import { useEffect } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  isLarge: boolean;
  dx: number; // Horizontal speed component
  dy: number; // Vertical speed component
}

const StarCanvas = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const container = document.getElementById("star-canvas-container");
    if (container) container.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Failed to get canvas context");
      return;
    }

    const stars: Star[] = [];
    const numStars = 1000;
    const numLargeStars = 4; // Now 8 large stars

    for (let i = 0; i < numStars; i++) {
      const isLarge = i < numLargeStars;
      const dx = Math.random() * 0.5 - 0.25;
      const dy = Math.random() * 0.5 - 0.25;

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isLarge ? Math.random() * 2 + 1 : Math.random() * 0.2 + 0.02,
        speed: isLarge ? Math.random() * 4.5 + 4.5 : Math.random() * 0.5 + 0.1,
        isLarge,
        dx,
        dy,
      });
      
    }

    const animate = () => {
      ctx.fillStyle = "#030014";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ffffff";

      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (star.isLarge) {
          star.x += star.dx * star.speed;
          star.y += star.dy * star.speed;

          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
        } else {
          star.x += star.speed;
          star.y += star.speed;

          if (star.x > canvas.width) star.x = 0;
          if (star.y > canvas.height) star.y = 0;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (container) container.removeChild(canvas);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div id="star-canvas-container"></div>;
};

export default StarCanvas;
