"use client";

import { useEffect } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

const StarCanvas = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const container = document.getElementById("star-canvas-container");
    if (container) {
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      container.appendChild(canvas);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Failed to get canvas context");
      return;
    }

    const stars: Star[] = [];
    const numStars = 1100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5 + 0.3,
      });
    }

    const animate = () => {
      ctx.fillStyle = "#030014";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.speed;
        star.y += star.speed;

        if (star.x > canvas.width) star.x = 0;
        if (star.y > canvas.height) star.y = 0;
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

  return (
    <div
      id="star-canvas-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    />
  );
};

export default StarCanvas;
