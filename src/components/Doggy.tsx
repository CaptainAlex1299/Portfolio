import "./doggy.css"
import { useEffect, useRef, useState } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dogState, setdogState] = useState("idle");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CANVAS_WIDTH = (canvas.width = 300);
    const CANVAS_HEIGHT = (canvas.height = 300);

    const dogImage = new Image();
    dogImage.src = "img/shadow_dog.png";

    const spriteWidth = 575;
    const spriteHeight = 523;
    let gameFrame = 0;
    const staggerFrames = 5;
    const spriteAnimations: Record<string, { loc: { x: number; y: number }[] }> = {};

    const animationStates = [
      { name: "idle", frames: 7 },
      { name: "jump", frames: 7 },
      { name: "fall", frames: 7 },
      { name: "run", frames: 9 },
      { name: "dizzy", frames: 11 },
      { name: "sit", frames: 5 },
      { name: "roll", frames: 7 },
      { name: "bite", frames: 7 },
    ];

    animationStates.forEach((state, index) => {
      let frames = { loc: [] as { x: number; y: number }[] };
      for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
      }
      spriteAnimations[state.name] = frames;
    });

    const animate = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[dogState].loc.length;
      let frameX = spriteWidth * position;
      let frameY = spriteAnimations[dogState].loc[position].y;

      ctx.drawImage(dogImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth / 2, spriteHeight / 2);

      gameFrame++;
      requestAnimationFrame(animate);
    };

    dogImage.onload = () => animate();
  }, [dogState]); // Re-run animation when `dogState` changes

  return (
    <div className="Doggy-Container">
      <div>
      <canvas id="Doggy" ref={canvasRef} width={600} height={600} />
      </div>
      <div className="Doggy-Dropdown">
      <select onChange={(e) => setdogState(e.target.value)}>
        <option value="idle">Idle</option>
        <option value="jump">Jump</option>
        <option value="fall">Fall</option>
        <option value="run">Run</option>
        <option value="dizzy">Dizzy</option>
        <option value="sit">Sit</option>
        <option value="roll">Roll</option>
        <option value="bite">Bite</option>
      </select>
      </div>
    </div>
  );
};

export default CanvasComponent;
