"use client";

import { useEffect, useRef } from "react";

const rows = [
  {
    items: ["Full-Stack Developer", "Product Builder", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    className: "bg-gradient-to-r from-foreground via-brand-text to-violet-text bg-clip-text text-transparent",
    direction: -1,
  },
  {
    items: ["Open to work", "Remote friendly", "Full-time & freelance", "Let's build something useful"],
    className: "text-muted-foreground",
    direction: 1,
  },
];

/** Two oversized rows that slide in opposite directions as the page scrolls. */
const ScrollMarquee = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        const shift = (progress - 0.5) * 30 * rows[index].direction;
        row.style.transform = `translate3d(${shift - 25}%, 0, 0)`;
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    let listening = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === listening) return;
      listening = entry.isIntersecting;
      if (listening) window.addEventListener("scroll", schedule, { passive: true });
      else window.removeEventListener("scroll", schedule);
      schedule();
    });
    observer.observe(root);
    update();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden='true'
      className='relative overflow-hidden py-14 md:py-20 select-none'>
      <div className='space-y-2 md:space-y-4 -rotate-2'>
        {rows.map((row, index) => (
          <div
            key={index}
            ref={(element) => {
              rowRefs.current[index] = element;
            }}
            style={{ transform: "translate3d(-25%, 0, 0)" }}
            className='flex w-max gap-8 md:gap-12 whitespace-nowrap will-change-transform'>
            {[0, 1, 2].flatMap((copy) =>
              row.items.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className='flex items-center gap-8 md:gap-12 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight'>
                  <span className={row.className}>{item}</span>
                  <span className='text-2xl md:text-4xl text-brand-text/70'>✦</span>
                </span>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollMarquee;
