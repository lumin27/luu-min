"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "./theme-provider";
import { useActiveSection } from "@/hooks/use-in-view";
import Image from "next/image";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];
const sectionIds = navItems.map((item) => item.id);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const progressRef = useRef<HTMLSpanElement>(null);

  // The new theme grows out of the toggle as a circle, where View Transitions are supported.
  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const next = theme === "light" ? "dark" : "light";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) {
      setTheme(next);
      return;
    }
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = document.startViewTransition(() => {
      document.documentElement.classList.toggle("dark", next === "dark");
      flushSync(() => setTheme(next));
    });
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  useEffect(() => {
    let raf = 0;
    const updateProgress = () => {
      raf = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (!raf) raf = requestAnimationFrame(updateProgress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_-12px_hsl(0_0%_0%/0.35)]"
          : "bg-transparent"
      }`}>
      <span
        aria-hidden='true'
        className={`header-line pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-base ease-standard ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        ref={progressRef}
        aria-hidden='true'
        style={{ transform: "scaleX(0)" }}
        className={`pointer-events-none absolute left-0 bottom-0 h-0.5 w-full origin-left bg-gradient-to-r from-primary via-violet to-primary transition-opacity duration-base ease-standard ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <a
            href='#hero'
            className='flex-shrink-0 flex items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
            <Image src='/favicon.ico' alt='' width={25} height={25} />
            <span className='text-xl font-bold bg-gradient-to-r from-primary to-violet-text bg-clip-text text-transparent'>
              Luu Min
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label='Main' className='hidden md:flex md:gap-6 lg:gap-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
                className='text-sm font-medium text-muted-foreground hover:text-foreground aria-[current=true]:text-foreground transition-colors duration-fast ease-standard relative group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background'>
                {item.name}
                <span
                  aria-hidden='true'
                  className='absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-violet transition-transform duration-base ease-out-expo group-hover:scale-x-100 group-aria-[current=true]:scale-x-100'
                />
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className='flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleTheme}
              className='hover:bg-primary/10 hover:text-brand-text'>
              <SunIcon className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <MoonIcon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild className='md:hidden'>
                <Button variant='ghost' size='icon' aria-label='Open menu'>
                  <HamburgerMenuIcon className='h-4 w-4' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-80'>
                <SheetTitle className='sr-only'>Navigation</SheetTitle>
                <nav
                  aria-label='Mobile'
                  className='flex flex-col space-y-6 mt-8'>
                  {navItems.map((item, index) => (
                    <SheetClose asChild key={item.name}>
                      <a
                        href={`#${item.id}`}
                        aria-current={
                          activeSection === item.id ? "true" : undefined
                        }
                        style={{ animationDelay: `${80 + index * 40}ms` }}
                        className='text-left text-lg text-muted-foreground hover:text-brand-text aria-[current=true]:text-brand-text aria-[current=true]:font-medium transition-colors animate-in fade-in-0 slide-in-from-right-4 fill-mode-both duration-base ease-out-expo'>
                        {item.name}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
