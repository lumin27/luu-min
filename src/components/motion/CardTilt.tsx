"use client";

import { useEffect } from "react";

/** Degrees at the card edge; a card can override it with `data-tilt="2"` (or `"0"` to opt out). */
const DEFAULT_TILT = 4;

/**
 * One page-wide pointer listener that tilts the `.card-motion` card under a mouse
 * cursor toward it by writing `--rx`/`--ry`; the CSS transition smooths it.
 */
const CardTilt = () => {
  useEffect(() => {
    const canTilt = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    let active: HTMLElement | null = null;
    let raf = 0;
    let x = 0;
    let y = 0;

    const release = () => {
      if (!active) return;
      active.style.removeProperty("--rx");
      active.style.removeProperty("--ry");
      active = null;
    };

    const apply = () => {
      raf = 0;
      if (!active) return;
      const rect = active.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const max = Number(active.dataset.tilt ?? DEFAULT_TILT);
      const px = Math.min(1, Math.max(0, (x - rect.left) / rect.width)) - 0.5;
      const py = Math.min(1, Math.max(0, (y - rect.top) / rect.height)) - 0.5;
      active.style.setProperty("--rx", `${(-py * 2 * max).toFixed(2)}deg`);
      active.style.setProperty("--ry", `${(px * 2 * max).toFixed(2)}deg`);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !canTilt.matches) return;
      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>(".card-motion") ?? null;
      if (card !== active) release();
      if (!card || card.dataset.tilt === "0") return;
      active = card;
      x = event.clientX;
      y = event.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onOut = (event: PointerEvent) => {
      if (active && !active.contains(event.relatedTarget as Node | null)) release();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      release();
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return null;
};

export default CardTilt;
