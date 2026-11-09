"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='portfolio-theme'>
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
