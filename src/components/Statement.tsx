"use client";

import Reveal, { STAGGER_STEP_MS } from "@/components/Reveal";
import CountUp from "@/components/reactbits/CountUp";
import ScrollReveal from "@/components/reactbits/ScrollReveal";

const stats = [
  {
    to: 4,
    label: "Live products",
    detail: "Schoolyn, Foodie-POS, Marketplace and BlogSphere",
  },
  {
    to: 2022,
    from: 2012,
    label: "Building since",
    detail: "Self-taught, learning by shipping real apps",
  },
  {
    to: 25,
    suffix: "+",
    label: "Technologies in real projects",
    detail: "From Prisma schemas to Nginx and Cloudflare",
  },
];

const Statement = () => {
  return (
    <section
      aria-label='At a glance'
      className='relative py-20 md:py-28 overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ScrollReveal
          className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-foreground text-balance'
          highlight={["real", "problems", "live", "software"]}
          highlightClassName='bg-gradient-to-r from-brand-text to-violet-text bg-clip-text text-transparent'>
          I don&apos;t stop at tutorials. I take real problems — school fees,
          restaurant orders, second-hand listings — and ship them as live
          software people can use.
        </ScrollReveal>

        <dl className='mt-14 md:mt-20 grid gap-4 sm:grid-cols-3'>
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * STAGGER_STEP_MS}
              className='glass-card glow-hover card-motion rounded-xl border p-6 flex flex-col-reverse'>
              <dt>
                <span className='block font-medium'>{stat.label}</span>
                <span className='block mt-1 text-sm text-muted-foreground leading-relaxed'>
                  {stat.detail}
                </span>
              </dt>
              <dd className='mb-3 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-brand-text to-violet-text bg-clip-text text-transparent'>
                <CountUp to={stat.to} from={stat.from} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Statement;
