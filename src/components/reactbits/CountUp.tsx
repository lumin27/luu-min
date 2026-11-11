'use client';

import { useEffect, useRef } from 'react';

/**
 * Dependency-free take on React Bits CountUp. Renders the final value on the
 * server, then counts up from `from` the first time it scrolls into view.
 */
export interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

const CountUp = ({ to, from = 0, duration = 1600, suffix = '', className = '' }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const show = (value: number) => {
      element.textContent = `${Math.round(value)}${suffix}`;
    };
    let raf = 0;
    if (element.getBoundingClientRect().top > window.innerHeight) show(from);
    else return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const begin = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - begin) / duration);
          show(from + (to - from) * easeOutExpo(p));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(element);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      show(to);
    };
  }, [to, from, duration, suffix]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`.trim()}>
      {`${to}${suffix}`}
    </span>
  );
};

export default CountUp;
