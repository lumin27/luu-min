"use client";

import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BellIcon,
  CheckCircledIcon,
  ExternalLinkIcon,
  LayersIcon,
  LockClosedIcon,
  ReaderIcon,
  RocketIcon,
  TableIcon,
} from "@radix-ui/react-icons";
import { SCHOOLYN_URL } from "@/components/SchoolynSpotlight";
import Reveal from "@/components/Reveal";
import { useReveal } from "@/hooks/use-in-view";

const codebaseStats = [
  { value: "270+", label: "commits" },
  { value: "97", label: "database models" },
  { value: "120+", label: "Prisma migrations" },
  { value: "370+", label: "automated test files" },
];

const contributionAreas: { title: string; icon: ReactNode; points: string[] }[] =
  [
    {
      title: "School workflows",
      icon: <ReaderIcon className='h-5 w-5' />,
      points: [
        "Student records, class enrollment, timetables, and attendance",
        "Exams, results, report cards, and certificates",
        "Parent requests, messaging, and announcements",
      ],
    },
    {
      title: "Multi-school SaaS",
      icon: <LayersIcon className='h-5 w-5' />,
      points: [
        "Each school runs on its own subdomain",
        "A school-scoped data layer keeps every school's records separate",
        "School groups, subscription plans, and plan-based feature access",
      ],
    },
    {
      title: "Authentication & permissions",
      icon: <LockClosedIcon className='h-5 w-5' />,
      points: [
        "Clerk sign-in with role-based dashboards and route guards",
        "Roles for admins, teachers, students, parents, accountants, and owners",
        "Per-module permissions for school staff",
      ],
    },
    {
      title: "Database & APIs",
      icon: <TableIcon className='h-5 w-5' />,
      points: [
        "PostgreSQL schema designed and evolved with Prisma migrations",
        "Server actions plus a versioned REST API for mobile clients",
        "CSV bulk import with a preview step before records are created",
      ],
    },
    {
      title: "Payments & notifications",
      icon: <BellIcon className='h-5 w-5' />,
      points: [
        "Invoices, payment schedules, receipts, refunds, and payroll with an audit log",
        "Payment-proof review for local payment methods and due-date reminders",
        "Notification outbox delivering web push, mobile push, and real-time updates",
      ],
    },
    {
      title: "Quality & production",
      icon: <CheckCircledIcon className='h-5 w-5' />,
      points: [
        "Security reviews, with regression tests for tenant isolation and access rules",
        "Unit and integration tests, debugging, and mobile layout fixes",
        "Deployment on a DigitalOcean server with PM2, Nginx, and Cloudflare, plus health checks and runbooks",
      ],
    },
  ];

const productTimeline = [
  {
    period: "2024 – 2025",
    title: "EduTrack",
    text: "Began as a learning project built on an open-source school dashboard starter. I extended it with features like multi-class announcements, worked through deployment issues, and shipped it online.",
  },
  {
    period: "June 2026",
    title: "Becomes Schoolyn",
    text: "Renamed the product and reworked it into a multi-school SaaS: school subdomains, a tenant-scoped data layer, subscription plans, finance and billing, and push notifications.",
  },
  {
    period: "July – Sept 2026",
    title: "Security & depth",
    text: "Ran security reviews and fixed the findings with regression tests. Added integration tests, school groups for owners with several schools, and a mobile API, then started building the Schoolyn Mobile app on top of it.",
  },
  {
    period: "Oct 2026 – now",
    title: "Production polish",
    text: "Shipping fixes through pull requests: phone layouts, sign-in on restricted school networks, exam and timetable details, and faster photo uploads.",
  },
];

const SchoolynExperience = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Card
      ref={ref}
      data-reveal=''
      className='glass-card relative overflow-hidden'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 ambient-spot'
      />
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-electric-blue'
      />
      <CardContent className='relative p-6 sm:p-8 lg:p-10'>
        {/* Role header */}
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6'>
          <div className='flex items-start gap-3'>
            <div className='p-2 bg-primary/10 rounded-lg text-primary'>
              <RocketIcon className='h-5 w-5' />
            </div>
            <div>
              <h3 className='font-semibold text-xl sm:text-2xl'>
                Creator & Full-Stack Developer
              </h3>
              <p className='text-primary font-medium'>
                Schoolyn{" "}
                <span className='text-muted-foreground font-normal'>
                  (formerly EduTrack)
                </span>
              </p>
            </div>
          </div>
          <div className='flex items-center gap-3 sm:flex-col sm:items-end'>
            <Badge>2024 – Present</Badge>
            <a
              href={SCHOOLYN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors'>
              schoolyn.academy
              <ExternalLinkIcon aria-hidden='true' className='h-3.5 w-3.5' />
            </a>
          </div>
        </div>

        <p className='text-muted-foreground leading-relaxed max-w-3xl mb-8'>
          I design, build, and maintain Schoolyn on my own, from the database
          schema and backend logic to the UI and the production server. Working
          on one product for a long time has taught me to think carefully about
          permissions, keeping each school&apos;s data separate, and shipping
          changes safely to a live app.
        </p>

        {/* Codebase stats */}
        <dl className='grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10'>
          {codebaseStats.map((stat) => (
            <div
              key={stat.label}
              className='rounded-lg border border-border/70 bg-background/40 px-4 py-4 text-center'>
              <dt className='sr-only'>{stat.label}</dt>
              <dd>
                <span className='block text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent'>
                  {stat.value}
                </span>
                <span className='text-sm text-muted-foreground'>
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Contribution areas */}
        <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4'>
          What I&apos;ve built and maintain
        </h4>
        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
          {contributionAreas.map((area, index) => (
            <Reveal
              as='li'
              key={area.title}
              delay={(index % 3) * 70}
              className='rounded-lg border border-border/80 bg-background/30 p-5 glow-hover'>
              <div className='flex items-center gap-2 mb-3'>
                <span aria-hidden='true' className='text-primary'>
                  {area.icon}
                </span>
                <p className='font-semibold'>{area.title}</p>
              </div>
              <ul className='space-y-1.5'>
                {area.points.map((point) => (
                  <li
                    key={point}
                    className='text-sm text-muted-foreground leading-relaxed pl-3 relative before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-primary'>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        {/* Product timeline */}
        <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4'>
          How the product grew
        </h4>
        <ol className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {productTimeline.map((step, index) => (
            <Reveal
              as='li'
              key={step.title}
              delay={index * 80}
              className='relative rounded-lg bg-muted/40 p-5 border-t-2 border-primary'>
              <p className='text-xs font-semibold text-primary mb-1'>
                <span className='sr-only'>Step {index + 1}: </span>
                {step.period}
              </p>
              <p className='font-semibold mb-2'>{step.title}</p>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default SchoolynExperience;
