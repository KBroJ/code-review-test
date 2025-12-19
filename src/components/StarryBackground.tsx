"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 50; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 1,
      });
    }
    setStars(newStars);

    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 3; i++) {
      newShootingStars.push({
        id: i,
        x: Math.random() * 50,
        y: Math.random() * 30,
        delay: i * 5 + Math.random() * 3,
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animation: `shooting-star 3s ease-in-out ${star.delay}s infinite`,
          }}
        >
          <div className="w-1 h-1 bg-white rounded-full shadow-lg shadow-white">
            <div
              className="absolute w-20 h-0.5 bg-gradient-to-r from-white to-transparent"
              style={{
                transform: "rotate(-45deg)",
                transformOrigin: "left center",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
