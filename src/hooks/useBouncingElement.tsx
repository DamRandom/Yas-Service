// hooks/useBouncingElement.ts
import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

export function useBouncingElement(
  width: number,
  height: number,
  speed = 0.5
) {
  const [pos, setPos] = useState<Position>({ x: 100, y: 100 });
  const [vel, setVel] = useState<Position>({ x: speed, y: speed });

  useEffect(() => {
    let animationFrame: number;

    const update = () => {
      setPos((prev) => {
        const newX = prev.x + vel.x;
        const newY = prev.y + vel.y;

        let newVelX = vel.x;
        let newVelY = vel.y;

        // Detectar colisión horizontal
        if (newX <= 0 || newX + width >= window.innerWidth) {
          newVelX = -newVelX;
        }

        // Detectar colisión vertical
        if (newY <= 0 || newY + height >= window.innerHeight) {
          newVelY = -newVelY;
        }

        setVel({ x: newVelX, y: newVelY });

        return { x: newX, y: newY };
      });

      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [vel, width, height]);

  return pos;
}
