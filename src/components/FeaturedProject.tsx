import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FeaturedProjectProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Shared shell for flagship projects: gradient border, ambient light, and a glow
 * that fades in on hover or keyboard focus. Screenshots inside a `MediaFrame`
 * zoom slightly with it.
 */
const FeaturedProject = ({ id, className, children }: FeaturedProjectProps) => (
  <article
    id={id}
    className={cn(
      "featured-shell media-group rounded-2xl p-px bg-gradient-to-br from-primary/70 via-border to-violet/50 shadow-[0_40px_100px_-48px_hsl(var(--electric-blue)/0.6)]",
      className
    )}>
    {/* `overflow: clip` (not hidden) so scroll-linked screenshots track the page scroller. */}
    <div className='relative overflow-hidden supports-[overflow:clip]:overflow-clip rounded-[calc(1rem-1px)] bg-card'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 ambient-spot'
      />
      <div className='relative p-6 sm:p-8 lg:p-12'>{children}</div>
    </div>
  </article>
);

export default FeaturedProject;
