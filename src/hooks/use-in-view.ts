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
    // Turns off the CSS fail-safe: from here on, the observer reveals content.
    document.documentElement.classList.add("reveal-active");
  }

  // Reveal anything already on screen (or scrolled past) in the same task that
  // turns off the fail-safe, so it never flashes hidden in between.
  if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
    reveal();
    return () => {};
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

/**
 * Returns the id of the section crossing a thin band just above the middle of
 * the viewport. `ids` must be a stable array (defined outside the component).
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const crossing = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) crossing.add(entry.target.id);
          else crossing.delete(entry.target.id);
        });
        const current = ids.find((id) => crossing.has(id));
        if (current) setActive(current);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
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
