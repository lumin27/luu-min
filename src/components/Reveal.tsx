"use client";

import {
  createElement,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { useReveal } from "@/hooks/use-in-view";

/** Matches `--stagger-step` in globals.css; use for `delay` on sibling reveals. */
export const STAGGER_STEP_MS = 70;

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "li" | "ul" | "ol" | "dl" | "article" | "figure";
  /** Reveal the single child element itself (e.g. a Card) instead of a wrapper. */
  asChild?: boolean;
  /** `rise` (default) for content, `scale` for screenshots, `fade` for large blocks, `left`/`right` to slide in from a side. */
  variant?: "rise" | "fade" | "scale" | "left" | "right";
  /** Reveal the direct children one after another instead of the element itself. */
  stagger?: boolean;
  delay?: number;
  children: ReactNode;
};

const Reveal = ({
  as = "div",
  asChild = false,
  variant = "rise",
  stagger = false,
  delay = 0,
  style,
  ...rest
}: RevealProps) => {
  const ref = useReveal<HTMLElement>();

  const props = {
    ...rest,
    ref,
    "data-reveal": variant,
    ...(stagger ? { "data-reveal-stagger": "" } : {}),
    style: delay
      ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties)
      : style,
  };

  return asChild ? <Slot {...props} /> : createElement(as, props);
};

export default Reveal;
