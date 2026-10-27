import { useEffect, useRef, useState } from "react";

type Reveal = () => void;

const pending = new Map<Element, Reveal>();
let observer: IntersectionObserver | null = null;
let scrollTimer: ReturnType<typeof setTimeout> | undefined;

function settle(element: Element) {
  const reveal = pending.get(element);
  if (!reveal) return;
  pending.delete(element);
  observer?.unobserve(element);
  reveal();
  if (pending.size === 0) window.removeEventListener("scroll", onScroll);
}

// IntersectionObserver never fires for elements skipped over by a fast jump
// (e.g. a nav link), so after scrolling stops, reveal anything now above the viewport.
function onScroll() {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    pending.forEach((_, element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        settle(element);
      }
    });
  }, 120);
}

function watch(element: Element, reveal: Reveal) {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            settle(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
  }
  if (pending.size === 0) {
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  pending.set(element, reveal);
  observer.observe(element);

  return () => {
    pending.delete(element);
    observer?.unobserve(element);
    if (pending.size === 0) window.removeEventListener("scroll", onScroll);
  };
}

export function useInView<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return watch(element, () => setIsInView(true));
  }, []);

  return { ref, isInView };
}

/** Marks the element with `data-revealed` once seen, without re-rendering. */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return watch(element, () => element.setAttribute("data-revealed", ""));
  }, []);

  return ref;
}
