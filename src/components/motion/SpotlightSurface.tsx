"use client";

import type { CSSProperties } from "react";
import SpotlightCard, {
  type SpotlightCardProps,
} from "@/components/reactbits/SpotlightCard";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

/**
 * Portfolio card surface: React Bits SpotlightCard drawn with the theme's card
 * tokens, a brand-blue pointer light, and the shared `card-motion` hover tilt.
 * The light sits behind the children, so content inside must stay transparent.
 */
const SpotlightSurface = ({ className, style, ...props }: SpotlightCardProps) => {
  const { theme } = useTheme();

  return (
    <SpotlightCard
      theme={theme}
      spotlightColor='hsl(var(--electric-blue))'
      intensity={theme === "dark" ? 0.2 : 0.5}
      spotlightSize={280}
      borderGlow={0.7}
      proximity={0}
      className={cn(
        "card-motion rounded-xl p-0 text-card-foreground",
        className
      )}
      style={
        {
          "--spotlight-card-surface": "hsl(var(--card))",
          "--spotlight-card-border": "hsl(var(--border) / 0.8)",
          "--spotlight-card-shadow":
            "var(--card-hover-shadow, var(--shadow-card))",
          ...style,
        } as CSSProperties
      }
      {...props}
    />
  );
};

export default SpotlightSurface;
