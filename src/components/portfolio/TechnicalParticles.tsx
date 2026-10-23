import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  type: "dot" | "ring" | "cross";
  color: string;
}

interface TechGlyph {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  oscillationOffset: number;
}

export const TechnicalParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const parent = canvas.parentElement;
    let width = (canvas.width = parent ? parent.offsetWidth : window.innerWidth);
    let height = (canvas.height = parent ? parent.offsetHeight : window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const p = canvas.parentElement;
      width = canvas.width = p ? p.offsetWidth : window.innerWidth;
      height = canvas.height = p ? p.offsetHeight : window.innerHeight;
      initElements();
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking relative to the Hero section
    let mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Multi-color palette: slate, deep charcoal, muted teal, indigo, amber, emerald (no monotonous electric blue)
    const particleColors = [
      "rgba(30, 41, 59, 0.75)",   // slate-800
      "rgba(51, 65, 85, 0.75)",   // slate-700
      "rgba(15, 118, 110, 0.75)", // teal-700
      "rgba(67, 56, 202, 0.75)",  // indigo-700
      "rgba(180, 83, 9, 0.75)",   // amber-700
      "rgba(4, 120, 87, 0.75)",   // emerald-700
      "rgba(71, 85, 105, 0.75)",  // slate-600
    ];

    const glyphColors = [
      "#1e293b", // Slate
      "#0f766e", // Teal
      "#4338ca", // Indigo
      "#b45309", // Amber
      "#047857", // Emerald
      "#334155", // Charcoal
      "#be123c", // Crimson
    ];

    // Math & Engineering symbols celebrating Harikrishnan's SWE + Mathematics background
    const techSymbols = [
      "dy/dx",
      "</>",
      "f(x)",
      "{...}",
      "∫dx",
      "=>",
      "O(n)",
      "O(log n)",
      "O(1)",
      "lim x→0",
      "sin(θ)",
      "cos(θ)",
      "AI",
      "λ",
      "git",
      "0101",
      "[ ]",
      "async",
      "return",
      "∑",
      "tan(θ)",
      "π",
      "eⁱπ+1=0",
      "√x",
      "Δx",
      "∞",
    ];

    let particles: Particle[] = [];
    let glyphs: TechGlyph[] = [];

    const initElements = () => {
      particles = [];
      glyphs = [];
      const particleCount = Math.floor(Math.min(width, 1600) / 24);

      for (let i = 0; i < particleCount; i++) {
        const types: ("dot" | "ring" | "cross")[] = ["dot", "dot", "ring", "cross"];
        const chosenType = types[Math.floor(Math.random() * types.length)];
        const color = particleColors[Math.floor(Math.random() * particleColors.length)];

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: chosenType === "ring" ? 3.5 : chosenType === "cross" ? 4.5 : Math.random() * 2 + 1.8,
          alpha: Math.random() * 0.3 + 0.55,
          type: chosenType,
          color,
        });
      }

      // Floating code & calculus glyphs
      const glyphCount = Math.min(22, Math.max(12, Math.floor(width / 85)));
      for (let i = 0; i < glyphCount; i++) {
        glyphs.push({
          text: techSymbols[i % techSymbols.length],
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(Math.random() * 0.32 + 0.18),
          alpha: Math.random() * 0.25 + 0.65,
          color: glyphColors[i % glyphColors.length],
          size: Math.floor(Math.random() * 3) + 13,
          oscillationOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initElements();

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle neural constellation lines between nearby particles
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(71, 85, 105, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // 2. Connect particles to mouse cursor when close
      if (mouse.x > 0 && mouse.y > 0 && mouse.x < width && mouse.y < height) {
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // 3. Update & render particles with geometric variety (dots, rings, technical crosshairs)
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse gentle repulsion
        if (mouse.x > 0 && mouse.y > 0 && mouse.x < width && mouse.y < height) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 1.2;
            p.y += (dy / dist) * force * 1.2;
          }
        }

        ctx.save();
        if (p.type === "ring") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else if (p.type === "cross") {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(p.x - p.size, p.y);
          ctx.lineTo(p.x + p.size, p.y);
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x, p.y + p.size);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
        ctx.restore();
      }

      // 4. Update & render floating code & math glyphs
      for (const g of glyphs) {
        g.x += g.vx + Math.sin(time + g.oscillationOffset) * 0.25;
        g.y += g.vy;

        // Reset if float off top
        if (g.y < -25) {
          g.y = height + 15;
          g.x = Math.random() * width;
        }
        if (g.x < -40) g.x = width + 30;
        else if (g.x > width + 40) g.x = -30;

        // Proximity brightening with mouse
        let currentAlpha = g.alpha;
        if (mouse.x > 0 && mouse.y > 0 && mouse.x < width && mouse.y < height) {
          const distToMouse = Math.hypot(g.x - mouse.x, g.y - mouse.y);
          if (distToMouse < mouse.radius) {
            currentAlpha = Math.min(1.0, g.alpha + 0.3);
          }
        }

        ctx.save();
        ctx.font = `700 ${g.size}px 'Fira Code', 'JetBrains Mono', 'SF Mono', Consolas, monospace`;
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = g.color;
        ctx.fillText(g.text, g.x, g.y);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default TechnicalParticles;
