import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  left: number;
  fontSize: number;
  duration: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        fontSize: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 3,
        delay: Math.random() * 2,
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    };

    // Create hearts periodically
    const interval = setInterval(createHeart, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          className="heart absolute"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.fontSize}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            width: `${heart.fontSize}px`,
            height: `${heart.fontSize}px`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
}
