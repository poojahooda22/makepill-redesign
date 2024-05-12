'use client'

import { useEffect, useRef } from 'react';
import styles from './style.module.css';


const Cursor = () => {
  const canvasRef = useRef(null);
  const particles = [];
  const mouseTrail = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const particleCount = Math.random() * 2 + 1;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          radius: Math.random() * 2 + 3,
          color: getRandomColor(), // Use getRandomColor function here
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3,
        });
      }

      mouseTrail.push({
        x: mouseX,
        y: mouseY,
        radius: Math.random() * 6 + 4,
        color: getRandomColor(), // Use getRandomColor function here
        opacity: Math.random() * 0.5,
      });

      if (mouseTrail.length > 10) {
        mouseTrail.shift();
      }
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = particle.radius * 5;
        ctx.shadowColor = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.radius -= 0.001;

        if (particle.radius <= 0) {
          particles.splice(index, 1);
        }
      });

      mouseTrail.forEach((pos) => {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pos.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pos.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    };

    const handleMouseOut = () => {
      particles.length = 0;
      mouseTrail.length = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const getRandomColor = () => { // Define getRandomColor function
      const randomR = Math.floor(Math.random() * 255);
      const randomG = Math.floor(Math.random() * 255);
      const randomB = Math.floor(Math.random() * 255);
      return `rgba(${randomR}, ${randomG}, ${randomB}, 1)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseout', handleMouseOut);

    animateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        border: '1px solid #000',
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        zIndex: 9,
      }}
    ></canvas>
  );
};

export default Cursor;