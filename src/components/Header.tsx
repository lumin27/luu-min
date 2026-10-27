"use client";

import { useState, useEffect } from "react";
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
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/70 shadow-[0_8px_30px_-12px_hsl(0_0%_0%/0.35)]"
          : "bg-transparent border-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <a
            href='#hero'
            className='flex-shrink-0 flex items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
            <Image src='/favicon.ico' alt='' width={25} height={25} />
            <span className='text-xl font-bold bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent'>
              Luu Min
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label='Main' className='hidden md:flex md:gap-6 lg:gap-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background'>
                {item.name}
                <span
                  aria-hidden='true'
                  className='absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100'
                />
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className='flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className='hover:bg-primary/10 hover:text-primary'>
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
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <a
                        href={item.href}
                        className='text-left text-lg text-muted-foreground hover:text-primary transition-colors duration-200'>
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
