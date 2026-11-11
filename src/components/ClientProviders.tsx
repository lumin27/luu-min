"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ClickSpark from "@/components/reactbits/ClickSpark";
import DevGreeting from "@/components/DevGreeting";
import CardTilt from "@/components/motion/CardTilt";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='portfolio-theme'>
      <Toaster />
      {children}
      <ClickSpark />
      <CardTilt />
      <DevGreeting />
    </ThemeProvider>
  );
}
