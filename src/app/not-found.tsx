import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
export const metadata: Metadata = {
  title: "Page not found - Luu Min",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main
      id='main'
      className='relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-foreground'>
      <div aria-hidden='true' className='hero-grid absolute inset-0 opacity-60' />
      <div className='relative text-center animate-fade-up'>
        <p className='text-gradient-flow text-8xl sm:text-9xl font-bold tracking-tight'>
          404
        </p>
        <h1 className='mt-4 text-2xl sm:text-3xl font-semibold'>
          This page doesn&apos;t exist
        </h1>
        <p className='mt-3 max-w-md mx-auto text-muted-foreground leading-relaxed'>
          The link may be old or mistyped. Everything I&apos;ve built is on the
          home page.
        </p>
        <Link
          href='/'
          className='btn-shine mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-12px_hsl(var(--primary)/0.7)] transition-[background-color,box-shadow] duration-200 hover:bg-primary/90 hover:shadow-[0_12px_32px_-12px_hsl(var(--primary)/0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'>
          <ArrowLeftIcon aria-hidden='true' className='h-4 w-4' />
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
