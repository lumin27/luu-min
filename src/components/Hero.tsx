"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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

const renderTypedText = (text: string) => {
  const token = phoneBreaks.find((candidate) => text.includes(candidate));
  if (!token) return text;
  const breakAt = text.indexOf(token) + token.length;
  return (
    <>
      {text.slice(0, breakAt)}
      <br className='sm:hidden' />
      {text.slice(breakAt)}
    </>
  );
};

const Caret = () => (
  <span
    aria-hidden='true'
    className='inline-block w-[3px] h-[1.05em] ml-1 rounded-full bg-primary align-[-0.15em] motion-safe:animate-caret-blink'
  />
);

const entrance = (delay: number) => ({ animationDelay: `${delay}ms` });

const Hero = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedText(lines[currentLineIndex]);
      return;
    }

    let index = 0;
    let nextLineTimeout: ReturnType<typeof setTimeout> | undefined;
    const currentText = lines[currentLineIndex];

    const typer = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typer);
        nextLineTimeout = setTimeout(() => {
          setCurrentLineIndex((prev) => (prev + 1) % lines.length);
          setDisplayedText("");
        }, 1500);
      }
    }, 80);

    return () => {
      clearInterval(typer);
      clearTimeout(nextLineTimeout);
    };
  }, [currentLineIndex]);

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 lg:pt-16'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 ambient-hero' />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background'
      />
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16'>
            {/* Photo */}
            <div
              style={entrance(0)}
              className='relative flex-shrink-0 w-48 h-60 sm:w-56 sm:h-72 lg:w-[300px] lg:h-[400px] rounded-[50%/40%] overflow-hidden border-4 border-primary shadow-[0_30px_80px_-30px_hsl(var(--electric-blue)/0.65)] transition-transform duration-500 ease-out motion-safe:hover:scale-[1.03] motion-safe:animate-fade-up'>
              <Image
                src='/luu-min.png'
                alt='Portrait of Luu Min'
                fill
                priority
                sizes='(min-width: 1024px) 300px, (min-width: 640px) 224px, 192px'
                className='object-cover'
              />
            </div>

            {/* Text */}
            <div className='flex-1 text-center lg:text-left'>
              <p
                style={entrance(80)}
                className='text-base sm:text-lg font-medium text-muted-foreground mb-3 motion-safe:animate-fade-up'>
                Hello, I&apos;m
              </p>
              <h1
                style={entrance(140)}
                className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 pb-1 bg-gradient-to-r from-foreground via-primary to-electric-blue bg-clip-text text-transparent motion-safe:animate-fade-up'>
                Luu Min
              </h1>

              <p className='sr-only'>{lines.join(". ")}</p>
              {/* An invisible copy of the full line fixes the box size, so typing never shifts the layout. */}
              <div
                aria-hidden='true'
                style={entrance(200)}
                className='text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 h-16 sm:h-10 md:h-12 flex items-center justify-center lg:justify-start motion-safe:animate-fade-up'>
                <span className='grid text-left'>
                  <span className='invisible col-start-1 row-start-1'>
                    {renderTypedText(lines[currentLineIndex])}
                    <Caret />
                  </span>
                  <span className='col-start-1 row-start-1'>
                    {renderTypedText(displayedText)}
                    <Caret />
                  </span>
                </span>
              </div>

              <p
                style={entrance(260)}
                className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed motion-safe:animate-fade-up'>
                I build practical software products, from SaaS platforms like{" "}
                <a
                  href='#schoolyn'
                  className='text-primary font-medium underline-offset-4 hover:underline'>
                  Schoolyn
                </a>{" "}
                to mobile applications and custom business tools.
              </p>
              <p
                style={entrance(300)}
                className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed motion-safe:animate-fade-up'>
                I&apos;m exploring how AI coding tools can help me ship and
                iterate faster, and I&apos;d love to help early-stage teams turn
                ideas into useful software.
              </p>

              <div
                style={entrance(360)}
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 motion-safe:animate-fade-up'>
                <Button
                  size='lg'
                  asChild
                  className='h-12 px-8 text-base sm:text-lg font-semibold'>
                  <a href='#projects'>
                    View Projects{" "}
                    <ArrowDownIcon className='ml-1 !h-5 !w-5 group-hover:translate-y-0.5' />
                  </a>
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  asChild
                  className='h-12 px-8 border-primary/70 bg-transparent text-primary hover:bg-primary hover:border-primary hover:text-primary-foreground text-base sm:text-lg font-semibold'>
                  <a href='#contact'>Let&apos;s Work Together</a>
                </Button>
              </div>

              <ul
                style={entrance(420)}
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
                      className='block rounded-md p-1.5 text-muted-foreground transition-colors duration-200 hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
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
        className='hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 rounded-full p-1 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-safe:animate-bounce'>
        <ArrowDownIcon className='h-6 w-6' />
      </a>
    </section>
  );
};

export default Hero;
