"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/use-in-view";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, LockClosedIcon } from "@radix-ui/react-icons";

const featuresByRole = [
  {
    role: "Parents",
    items: [
      "Switch between children; see today's timetable, attendance, and balance",
      "Invoices, payment plans, receipts, statements, and payment-proof upload",
      "Requests to the school, messages, and notifications",
    ],
  },
  {
    role: "Students",
    items: [
      "Timetable, attendance, exams, assignments, and results",
      "Report cards, announcements, events, and messages",
    ],
  },
  {
    role: "Teachers",
    items: [
      "Take attendance and manage classes, students, and lessons",
      "Create and edit exams, assignments, results, and report cards",
    ],
  },
];

const testedOn = [
  "Android phone (physical device)",
  "Android emulator",
  "iOS Simulator",
];

const stack = [
  "Expo",
  "React Native",
  "TypeScript",
  "Expo Router",
  "Clerk",
  "TanStack Query",
  "OneSignal",
  "Vitest",
  "Maestro",
];

const screenshots = [
  {
    src: "/projects/schoolyn-mobile/parent-home.png",
    alt: "Schoolyn Mobile parent home screen showing a child's attendance, balance, and today's timetable",
    caption: "Parent home",
  },
  {
    src: "/projects/schoolyn-mobile/teacher-academics.png",
    alt: "Schoolyn Mobile teacher academics menu with exams, assignments, results, and report cards",
    caption: "Teacher academics",
  },
  {
    src: "/projects/schoolyn-mobile/teacher-students.png",
    alt: "Schoolyn Mobile teacher student list with search and class filters",
    caption: "Teacher student list",
  },
];

const SchoolynMobile = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Card
      ref={ref}
      data-reveal=''
      className='glass-card glow-hover mb-12 lg:mb-16'>
      <CardContent className='p-6 sm:p-8 lg:p-10'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-10 items-start'>
          <div>
            <div className='flex flex-wrap gap-2 mb-4'>
              <Badge
                variant='outline'
                className='gap-1.5 border-amber-500/60 bg-amber-500/10 text-amber-700 dark:text-amber-300'>
                <span
                  aria-hidden='true'
                  className='h-1.5 w-1.5 rounded-full bg-amber-500'
                />
                In Development &mdash; Not Yet Released
              </Badge>
              <Badge variant='outline' className='border-primary/40 text-primary'>
                Companion to Schoolyn
              </Badge>
            </div>

            <h3 className='text-2xl sm:text-3xl font-bold mb-2'>
              Schoolyn Mobile
            </h3>
            <p className='text-lg text-primary font-medium mb-4'>
              iOS & Android app for parents, students, and teachers
            </p>
            <p className='text-muted-foreground leading-relaxed mb-6'>
              A React Native app I started in July 2026 alongside the Schoolyn
              web platform. It signs in with the same school accounts and reads
              and writes data through Schoolyn&apos;s versioned mobile API, so
              the web platform stays the single source of truth. It isn&apos;t
              on the App Store or Google Play yet.
            </p>

            <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3'>
              Tested on
            </h4>
            <ul className='flex flex-wrap gap-2 mb-6'>
              {testedOn.map((target) => (
                <li key={target}>
                  <Badge variant='outline' className='text-xs font-medium'>
                    {target}
                  </Badge>
                </li>
              ))}
            </ul>

            <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3'>
              Working in development builds
            </h4>
            <div className='space-y-4 mb-6'>
              {featuresByRole.map((group) => (
                <div key={group.role}>
                  <p className='text-sm font-semibold mb-1.5'>{group.role}</p>
                  <ul className='space-y-1.5'>
                    {group.items.map((item) => (
                      <li key={item} className='flex gap-2 text-sm leading-relaxed'>
                        <CheckIcon
                          aria-hidden='true'
                          className='h-4 w-4 mt-0.5 flex-shrink-0 text-primary'
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className='text-sm text-muted-foreground mb-5'>
              <span className='font-semibold text-foreground'>Also: </span>
              push notifications with OneSignal, PDF export, unit tests with
              Vitest, and end-to-end flows with Maestro.
            </p>

            <ul
              aria-label='Schoolyn Mobile tech stack'
              className='flex flex-wrap gap-2 mb-5'>
              {stack.map((tech) => (
                <li key={tech}>
                  <Badge variant='secondary' className='text-xs'>
                    {tech}
                  </Badge>
                </li>
              ))}
            </ul>

            <span className='flex items-center gap-2 text-sm text-muted-foreground'>
              <LockClosedIcon aria-hidden='true' className='h-4 w-4' />
              Source code private
            </span>
          </div>

          <figure>
            <ul className='grid grid-cols-3 gap-3 sm:gap-4'>
              {screenshots.map((shot) => (
                <li key={shot.src} className='text-center'>
                  <div className='relative aspect-[1206/2622] overflow-hidden rounded-[1.25rem] border-[5px] border-navy-light dark:border-border bg-muted shadow-[0_20px_40px_-20px_hsl(0_0%_0%/0.6)]'>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes='(min-width: 1024px) 180px, 30vw'
                      className='object-cover'
                    />
                  </div>
                  <p className='mt-2 text-xs text-muted-foreground'>
                    {shot.caption}
                  </p>
                </li>
              ))}
            </ul>
            <figcaption className='mt-4 text-xs text-muted-foreground text-center'>
              Screenshots from a development build in the iOS Simulator, using
              the Schoolyn demo school&apos;s sample data.
            </figcaption>
          </figure>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolynMobile;
