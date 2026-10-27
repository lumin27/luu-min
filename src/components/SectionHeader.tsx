import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <Reveal className='text-center mb-12 md:mb-16'>
      <p className='text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3'>
        {eyebrow}
      </p>
      <h2 className='text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>
        {title}
      </h2>
      <div
        aria-hidden='true'
        className='w-16 h-1 rounded-full bg-gradient-to-r from-primary to-electric-blue mx-auto mb-6'
      />
      {description && (
        <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeader;
