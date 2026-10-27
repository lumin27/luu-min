"use client";

import {
  createElement,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useReveal } from "@/hooks/use-in-view";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "li" | "article" | "figure";
  delay?: number;
  children: ReactNode;
};

const Reveal = ({ as = "div", delay = 0, style, ...rest }: RevealProps) => {
  const ref = useReveal<HTMLElement>();

  return createElement(as, {
    ...rest,
    ref,
    "data-reveal": "",
    style: { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties,
  });
};

export default Reveal;
