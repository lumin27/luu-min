'use client';

import { useEffect, useRef } from 'react';

/**
 * Page-wide take on React Bits ClickSpark: every mouse click anywhere bursts a few
 * sparks and a ring on one fixed, non-interactive canvas above the page.
 */
export interface ClickSparkProps {
  colors?: string[];
  sparkCount?: number;
  sparkSize?: number;
  sparkRadius?: number;
  duration?: number;
}

interface Burst {
  x: number;
  y: number;
  start: number;
  angles: number[];
  reach: number[];
  color: string;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const ClickSpark = ({
  colors = ['#60a5fa', '#a78bfa', '#ffffff'],
  sparkCount = 8,
  sparkSize = 12,
  sparkRadius = 26,
  duration = 480
}: ClickSparkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const settingsRef = useRef({ colors, sparkCount, sparkSize, sparkRadius, duration });

  useEffect(() => {
    settingsRef.current = { colors, sparkCount, sparkSize, sparkRadius, duration };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const bursts: Burst[] = [];
    let raf = 0;
    let ratio = 1;

    const resize = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
    };

    const frame = (now: number) => {
      raf = 0;
      const { sparkSize: size, sparkRadius: radius, duration: life } = settingsRef.current;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.lineCap = 'round';
      for (let i = bursts.length - 1; i >= 0; i--) {
        const burst = bursts[i];
        const p = (now - burst.start) / life;
        if (p >= 1) {
          bursts.splice(i, 1);
          continue;
        }
        const e = easeOut(p);
        ctx.strokeStyle = burst.color;
        ctx.globalAlpha = Math.pow(1 - p, 2) * 0.55;
        ctx.lineWidth = 1.5 * (1 - p);
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, 4 + radius * 0.75 * e, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1 - p * p;
        ctx.lineWidth = 2;
        const length = size * Math.pow(1 - p, 1.6);
        burst.angles.forEach((angle, index) => {
          const distance = radius * burst.reach[index] * e;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);
          ctx.beginPath();
          ctx.moveTo(burst.x + cos * distance, burst.y + sin * distance);
          ctx.lineTo(burst.x + cos * (distance + length), burst.y + sin * (distance + length));
          ctx.stroke();
        });
      }
      ctx.globalAlpha = 1;
      if (bursts.length) raf = requestAnimationFrame(frame);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      const { colors: palette, sparkCount: count } = settingsRef.current;
      const turn = Math.random() * Math.PI;
      bursts.push({
        x: event.clientX,
        y: event.clientY,
        start: performance.now(),
        angles: Array.from({ length: count }, (_, i) => turn + (i * Math.PI * 2) / count),
        reach: Array.from({ length: count }, () => 0.85 + Math.random() * 0.3),
        color: palette[Math.floor(Math.random() * palette.length)]
      });
      if (bursts.length > 16) bursts.shift();
      if (!raf) raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-[60] h-full w-full'
    />
  );
};

export default ClickSpark;
