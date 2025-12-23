"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Hero = () => {
  const lines = ["Junior Full Stack Developer", "Building Modern Web Apps"];

  const [isVisible, setIsVisible] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setIsVisible(true);

    let index = 0;
    const currentText = lines[currentLineIndex];

    const typer = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typer);
        setTimeout(() => {
          setCurrentLineIndex((prev) => (prev + 1) % lines.length);
          setDisplayedText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typer);
  }, [currentLineIndex]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden '>
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}>
          <div className='flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 gap-8 lg:gap-10'>
            {/* Photo Left */}
            <div className='flex-shrink-0 w-48 lg:w-[300px] h-50 lg:h-[400px] rounded-[50%/40%] lg:mb-10 overflow-hidden border-4 border-primary shadow-xl transform transition-transform duration-300 hover:scale-105'>
              <img
                src='/luu-min.png'
                alt='Luu Min'
                className='w-full h-full object-cover'
              />
            </div>

            {/* Text Right */}
            <div className='flex-1 text-center lg:text-left'>
              <p className='text-lg text-muted-foreground mb-4 animate-slide-up'>
                Hello,
              </p>
              <div className='flex flex-row md:items-center justify-center sm:justify-center md:justify-center lg:justify-start gap-2 md:gap-4'>
                <h1 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-electric-blue bg-clip-text text-transparent animate-scale-in'>
                  I'm
                </h1>
                <h1 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-electric-blue bg-clip-text text-transparent animate-scale-in'>
                  Luu Min
                </h1>
              </div>

              <div className='text-2xl md:text-4xl font-semibold text-muted-foreground mb-4 h-16 flex items-center justify-center lg:justify-start'>
                <span className='border-r-2 border-primary animate-blink pr-1'>
                  {displayedText}
                </span>
              </div>

              <p className='text-lg md:text-xl text-muted-foreground max-w-2xl md:mb-12 mb-8 leading-relaxed animate-fade-in'>
                Passionate about creating beautiful, functional web applications
                with modern technologies. Specializing in React, Next.js, and
                full-stack development.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start md:mb-16 mb-10  animate-slide-up'>
                <Button
                  size='lg'
                  onClick={scrollToProjects}
                  className='glow-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold'>
                  View Projects <ArrowDownIcon className='ml-2 h-5 w-5' />
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={scrollToContact}
                  className='glow-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold'>
                  Contact Me
                </Button>
              </div>

              <div className='flex justify-center lg:justify-start space-x-6 animate-fade-in'>
                <a
                  href='https://github.com/lumin27'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-primary transition-colors duration-200 glow-hover'>
                  <GitHubLogoIcon className='h-6 w-6' />
                </a>
                <a
                  href='https://www.linkedin.com/in/luu-min-a779b9334/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-primary transition-colors duration-200 glow-hover'>
                  <LinkedInLogoIcon className='h-6 w-6' />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
            <ArrowDownIcon className='h-6 w-6 text-muted-foreground' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
