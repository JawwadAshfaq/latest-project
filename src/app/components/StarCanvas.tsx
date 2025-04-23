"use client";

import { useEffect } from "react";

const StarCanvas = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    script.async = true;
    script.onload = () => {
      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new window.THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor("#030014"); // Background color
      document.body.appendChild(renderer.domElement);

      const geometry = new window.THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < 2500; i++) { // Slightly reduced number of stars
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;
        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new window.THREE.Float32BufferAttribute(vertices, 3)
      );

      const material = new window.THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.01, // Smallest practical size
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.5, // Light star feel
      });

      const stars = new window.THREE.Points(geometry, material);
      scene.add(stars);

      camera.position.z = 2;

      const animate = () => {
        requestAnimationFrame(animate);
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.001;
        renderer.render(scene, camera);
      };

      animate();
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default StarCanvas;
