"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RotatingText from "@/components/motion/RotatingText";
import GlareHover from "@/components/reactbits/GlareHover";
import Magnet from "@/components/reactbits/Magnet";
import {
  ArrowDownIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const lines = [
  "Full-Stack Developer & Product Builder",
  "Building Practical Web Apps",
  "Exploring AI-Assisted Development",
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/lumin27",
    icon: <GitHubLogoIcon className='h-6 w-6' />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luu-min-a779b9334/",
    icon: <LinkedInLogoIcon className='h-6 w-6' />,
  },
  {
    name: "Email",
    href: "mailto:linnmu2030@gmail.com",
    icon: <EnvelopeClosedIcon className='h-6 w-6' />,
  },
];

// Long lines can't fit on one line on phones; break at a chosen point so no word is orphaned.
const phoneBreaks = ["& ", "AI-Assisted "];

const entrance = (delay: number) => ({ animationDelay: `${delay}ms` });

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);

  // The ambient drift only animates while the hero is on screen.
  useEffect(() => {
    const section = sectionRef.current;
    const drift = driftRef.current;
    if (!section || !drift) return;
    const observer = new IntersectionObserver(([entry]) => {
      drift.toggleAttribute("data-paused", !entry.isIntersecting);
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 pb-16 lg:pt-16'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 ambient-hero' />
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 hero-grid' />
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 hidden lg:block'>
        <div className='hero-spotlight' />
      </div>
      <div
        ref={driftRef}
        aria-hidden='true'
        className='pointer-events-none absolute -inset-[10%] hidden lg:block ambient-drift'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background'
      />
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-16'>
            {/* Photo: oval frame with a blue-violet ring and a one-time glare sweep. */}
            <div
              style={entrance(0)}
              className='relative flex-shrink-0 rounded-[50%/40%] p-[3px] bg-gradient-to-br from-primary via-violet to-primary/40 shadow-[0_30px_80px_-30px_hsl(var(--electric-blue)/0.65)] motion-safe:animate-portrait-in'>
              <GlareHover
                intro
                borderRadius='50% / 40%'
                glareColor='#ffffff'
                glareOpacity={0.35}
                glareAngle={-35}
                glareSize={40}
                transitionDuration={900}
                background='hsl(var(--background))'
                className='grid w-40 h-[200px] sm:w-56 sm:h-72 lg:w-[300px] lg:h-[400px]'>
                <Image
                  src='/luu-min.png'
                  alt='Portrait of Luu Min'
                  fill
                  priority
                  sizes='(min-width: 1024px) 300px, (min-width: 640px) 224px, 160px'
                  className='object-cover'
                />
              </GlareHover>
            </div>

            {/* Text */}
            <div className='flex-1 text-center lg:text-left'>
              <p
                style={entrance(60)}
                className='flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base font-medium tracking-wide text-muted-foreground mb-3 motion-safe:animate-fade-up'>
                <span
                  aria-hidden='true'
                  className='h-px w-8 bg-gradient-to-r from-primary to-violet'
                />
                Hello, I&apos;m
              </p>
              <h1
                style={entrance(120)}
                className='w-fit mx-auto lg:mx-0 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-5 pb-1 bg-gradient-to-r from-foreground via-brand-text to-violet-text bg-clip-text text-transparent motion-safe:animate-fade-up'>
                Luu Min
              </h1>

              <p className='sr-only'>{lines.join(". ")}</p>
              <div
                aria-hidden='true'
                style={entrance(160)}
                className='text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-6 h-16 sm:h-10 md:h-12 flex items-center justify-center lg:justify-start motion-safe:animate-fade-up'>
                <RotatingText
                  variant='type'
                  lines={lines}
                  mobileBreaks={phoneBreaks}
                  className='text-center lg:text-left'
                />
              </div>

              <p
                style={entrance(220)}
                className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed text-pretty motion-safe:animate-fade-up'>
                I build practical software products, from SaaS platforms like{" "}
                <a
                  href='#schoolyn'
                  className='text-brand-text font-medium underline-offset-4 hover:underline'>
                  Schoolyn
                </a>{" "}
                to mobile applications and custom business tools.
              </p>
              <p
                style={entrance(250)}
                className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty motion-safe:animate-fade-up'>
                I&apos;m exploring how AI coding tools can help me ship and
                iterate faster, and I&apos;d love to help early-stage teams turn
                ideas into useful software.
              </p>

              <div
                style={entrance(280)}
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 motion-safe:animate-fade-up'>
                <Magnet padding={60} magnetStrength={6} maxOffset={8} wrapperClassName='w-full sm:w-auto'>
                  <Button
                    size='lg'
                    asChild
                    className='w-full sm:w-auto h-12 px-8 text-base sm:text-lg font-semibold shadow-[0_12px_32px_-12px_hsl(var(--electric-blue)/0.6)]'>
                    <a href='#projects'>
                      View Projects{" "}
                      <ArrowDownIcon className='ml-1 !h-5 !w-5 group-hover:translate-y-0.5' />
                    </a>
                  </Button>
                </Magnet>
                <Magnet padding={60} magnetStrength={6} maxOffset={8} wrapperClassName='w-full sm:w-auto'>
                  <Button
                    variant='outline'
                    size='lg'
                    asChild
                    className='w-full sm:w-auto h-12 px-8 border-primary/70 bg-transparent text-brand-text hover:bg-primary hover:border-primary hover:text-primary-foreground text-base sm:text-lg font-semibold'>
                    <a href='#contact'>Let&apos;s Work Together</a>
                  </Button>
                </Magnet>
              </div>

              <ul
                style={entrance(340)}
                className='flex justify-center lg:justify-start gap-4 motion-safe:animate-fade-up'>
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={
                        link.name !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={link.name}
                      className='block rounded-md p-1.5 text-muted-foreground transition-colors duration-200 hover:text-brand-text hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href='#about'
        aria-label='Scroll to About section'
        className='hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 rounded-full p-1 text-muted-foreground transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-safe:animate-scroll-cue'>
        <ArrowDownIcon className='h-6 w-6' />
      </a>
    </section>
  );
};

export default Hero;
