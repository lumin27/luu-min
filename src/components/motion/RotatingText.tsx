"use client";

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { cn } from "@/lib/utils";

type RotatingTextProps = {
  lines: string[];
  /** "fade" swaps whole lines; "type" types each line out, then deletes it. */
  variant?: "fade" | "type";
  /** Fade: time each line stays on screen. Type: pause once a line is fully typed. */
  interval?: number;
  /** Phones only: break a line right after the first of these tokens it contains. */
  mobileBreaks?: string[];
  className?: string;
};

const splitAtBreak = (line: string, breaks: string[]) => {
  const token = breaks.find((candidate) => line.includes(candidate));
  if (!token) return [line];
  const at = line.indexOf(token) + token.length;
  return [line.slice(0, at), line.slice(at)];
};

const withBreaks = (parts: ReactNode[]) =>
  parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <br className='sm:hidden' />}
      {part}
    </Fragment>
  ));

const TYPE_STEP_MS = 55;
const DELETE_STEP_MS = 28;
const EMPTY_PAUSE_MS = 350;

/** Animation only runs while on screen, with the tab visible and reduced motion off. */
const useCanAnimate = (ref: RefObject<HTMLElement>) => {
  const [state, setState] = useState({ canAnimate: false, reduced: false });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let onScreen = true;
    const sync = () =>
      setState({
        canAnimate: onScreen && !document.hidden && !reducedMotion.matches,
        reduced: reducedMotion.matches,
      });

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);
    sync();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, [ref]);

  return state;
};

/**
 * Shows the first line immediately (it is in the server HTML), then cycles
 * through the rest. Every line occupies the same grid cell, so the box is sized
 * by the longest line and neither swapping nor typing shifts the layout.
 */
const RotatingText = ({
  lines,
  variant = "fade",
  interval = variant === "type" ? 2200 : 3200,
  mobileBreaks = [],
  className,
}: RotatingTextProps) => {
  const renderLine = (line: string) =>
    withBreaks(splitAtBreak(line, mobileBreaks));
  const ref = useRef<HTMLSpanElement>(null);
  const { canAnimate, reduced } = useCanAnimate(ref);
  const [{ index, previous }, setRotation] = useState<{
    index: number;
    previous: number | null;
  }>({ index: 0, previous: null });
  const [typing, setTyping] = useState({
    index: 0,
    length: lines[0]?.length ?? 0,
    deleting: false,
  });

  useEffect(() => {
    if (variant !== "fade" || !canAnimate || lines.length < 2) return;
    const timer = setInterval(() => {
      setRotation((current) => ({
        index: (current.index + 1) % lines.length,
        previous: current.index,
      }));
    }, interval);
    return () => clearInterval(timer);
  }, [variant, canAnimate, interval, lines.length]);

  useEffect(() => {
    if (variant !== "type" || !canAnimate || lines.length < 2) return;
    const full = lines[typing.index].length;
    let delay = TYPE_STEP_MS;
    let next = typing;
    if (!typing.deleting && typing.length < full) {
      next = { ...typing, length: typing.length + 1 };
    } else if (!typing.deleting) {
      delay = interval;
      next = { ...typing, deleting: true };
    } else if (typing.length > 0) {
      delay = DELETE_STEP_MS;
      next = { ...typing, length: typing.length - 1 };
    } else {
      delay = EMPTY_PAUSE_MS;
      next = {
        index: (typing.index + 1) % lines.length,
        length: 0,
        deleting: false,
      };
    }
    const timer = setTimeout(() => setTyping(next), delay);
    return () => clearTimeout(timer);
  }, [variant, canAnimate, typing, interval, lines]);

  if (variant === "type") {
    const line = lines[typing.index];
    const typed = reduced ? line.length : typing.length;
    const holding = !typing.deleting && typing.length === line.length;
    // The whole line is always laid out and only the untyped rest is hidden, so
    // letters appear in their final place. The caret is an empty inline (not
    // inline-block) so it adds no width and no line-break opportunity mid-word.
    const caret = (
      <span aria-hidden='true' className='relative'>
        <span
          className={cn(
            "absolute left-0.5 top-[0.2em] h-[0.85em] w-[3px] rounded-full bg-brand-text motion-reduce:hidden",
            holding && canAnimate && "animate-caret-blink"
          )}
        />
      </span>
    );
    let start = 0;
    let caretPlaced = false;
    const parts = splitAtBreak(line, mobileBreaks).map((part) => {
      const visible = part.slice(0, Math.max(0, typed - start));
      const showCaret = !caretPlaced && typed <= start + part.length;
      if (showCaret) caretPlaced = true;
      start += part.length;
      return (
        <>
          {visible}
          {showCaret && caret}
          <span className='invisible'>{part.slice(visible.length)}</span>
        </>
      );
    });
    return (
      <span ref={ref} className={cn("grid", className)}>
        {lines.map((sizer) => (
          <span key={sizer} className='invisible col-start-1 row-start-1'>
            {renderLine(sizer)}
          </span>
        ))}
        <span className='col-start-1 row-start-1'>{withBreaks(parts)}</span>
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("grid", className)}>
      {lines.map((line, lineIndex) => {
        const state =
          lineIndex === index
            ? "active"
            : lineIndex === previous
              ? "leaving"
              : "waiting";
        return (
          <span
            key={line}
            data-state={state}
            className='col-start-1 row-start-1 transition-[opacity,transform] duration-swap ease-out-expo data-[state=active]:opacity-100 data-[state=active]:translate-y-0 data-[state=leaving]:opacity-0 data-[state=leaving]:-translate-y-2 data-[state=waiting]:opacity-0 data-[state=waiting]:translate-y-2'>
            {renderLine(line)}
          </span>
        );
      })}
    </span>
  );
};

export default RotatingText;
