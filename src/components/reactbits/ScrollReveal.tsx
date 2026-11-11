'use client';

import { useEffect, useRef, type ElementType } from 'react';

/**
 * Dependency-free take on React Bits ScrollReveal: words brighten one by one as
 * the text scrolls up through the viewport. Server-rendered words are fully
 * visible, so the text still reads without JavaScript or with reduced motion.
 */
export interface ScrollRevealProps {
  children: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  /** Words (matched without punctuation) that get `highlightClassName` instead. */
  highlight?: string[];
  highlightClassName?: string;
  baseOpacity?: number;
  /** Viewport fractions (from the top) where the reveal starts and finishes. */
  start?: number;
  end?: number;
}

const ScrollReveal = ({
  children,
  as: Tag = 'p',
  className = '',
  wordClassName = '',
  highlight = [],
  highlightClassName = '',
  baseOpacity = 0.18,
  start = 0.9,
  end = 0.45
}: ScrollRevealProps) => {
  const rootRef = useRef<HTMLElement>(null);
  const words = children.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const spans = Array.from(root.querySelectorAll<HTMLElement>('[data-word]'));
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const viewport = window.innerHeight;
      const from = viewport * start;
      const to = viewport * end - rect.height;
      const progress = Math.min(1, Math.max(0, (from - rect.top) / Math.max(1, from - to)));
      const lit = progress * (spans.length + 2);
      spans.forEach((span, index) => {
        const amount = Math.min(1, Math.max(0, lit - index));
        span.style.opacity = String(baseOpacity + (1 - baseOpacity) * amount);
      });
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    let listening = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !listening) {
        window.addEventListener('scroll', schedule, { passive: true });
        listening = true;
      } else if (!entry.isIntersecting && listening) {
        window.removeEventListener('scroll', schedule);
        listening = false;
      }
      schedule();
    });
    observer.observe(root);
    update();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
    };
  }, [baseOpacity, start, end, words.length]);

  return (
    <Tag ref={rootRef} className={className}>
      {words.map((word, index) => (
        <span key={index}>
          <span
            data-word
            className={`transition-opacity duration-200 ${
              highlight.includes(word.replace(/[^\p{L}\p{N}-]/gu, '')) ? highlightClassName : wordClassName
            }`.trim()}>
            {word}
          </span>
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  );
};

export default ScrollReveal;
