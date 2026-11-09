import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  kind: "browser" | "phone";
  /** Address-bar text for the browser frame. */
  label?: string;
  /** Subtle scroll-linked drift; only where CSS scroll-driven animations exist. */
  parallax?: boolean;
  className?: string;
  /** Usually a `next/image` with `fill`. */
  children: ReactNode;
};

/**
 * Device frame for screenshots. The image zooms slightly (clipped by the frame)
 * when its `.media-group` ancestor is hovered or focused.
 */
const MediaFrame = ({
  kind,
  label,
  parallax = false,
  className,
  children,
}: MediaFrameProps) => {
  if (kind === "phone") {
    return (
      <div
        className={cn(
          "relative aspect-[1206/2622] overflow-hidden rounded-[1.25rem] border-[5px] border-navy-light dark:border-border bg-muted shadow-[0_20px_40px_-20px_hsl(0_0%_0%/0.6)]",
          parallax && "media-parallax",
          className
        )}>
        <div className='absolute inset-0 media-zoom'>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-background shadow-[0_24px_60px_-24px_hsl(0_0%_0%/0.6)]",
        parallax && "media-parallax",
        className
      )}>
      <div
        aria-hidden='true'
        className='flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2'>
        <span className='h-2.5 w-2.5 rounded-full bg-red-400/80' />
        <span className='h-2.5 w-2.5 rounded-full bg-amber-400/80' />
        <span className='h-2.5 w-2.5 rounded-full bg-green-400/80' />
        {label && (
          <span className='ml-3 truncate rounded-md bg-background/70 px-3 py-0.5 text-xs text-muted-foreground'>
            {label}
          </span>
        )}
      </div>
      <div className='relative aspect-[16/10] overflow-hidden'>
        <div className='absolute inset-0 media-zoom'>{children}</div>
      </div>
    </div>
  );
};

export default MediaFrame;
