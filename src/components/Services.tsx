"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  ClipboardIcon,
  CodeIcon,
  DashboardIcon,
  GlobeIcon,
  MagicWandIcon,
  RocketIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  proof: { label: string; href: string };
};

const services: Service[] = [
  {
    title: "Full-stack web applications",
    description:
      "Web apps built end to end with Next.js, TypeScript, Prisma, and PostgreSQL, from the data model and authentication to a responsive interface.",
    icon: <CodeIcon className='h-5 w-5' />,
    proof: { label: "Marketplace, BlogSphere", href: "#projects" },
  },
  {
    title: "Custom business software",
    description:
      "Dashboards and internal tools with role-based access, records, reports, and finance workflows, shaped around how your team actually works.",
    icon: <DashboardIcon className='h-5 w-5' />,
    proof: { label: "Schoolyn", href: "#schoolyn" },
  },
  {
    title: "Ordering & POS systems",
    description:
      "QR-code ordering, order tracking, and payment integration for restaurants and small shops.",
    icon: <ClipboardIcon className='h-5 w-5' />,
    proof: { label: "Foodie-POS", href: "#projects" },
  },
  {
    title: "MVP development",
    description:
      "A focused first version of your idea that's deployed early, so you can put it in front of real users and improve it step by step.",
    icon: <RocketIcon className='h-5 w-5' />,
    proof: { label: "EduTrack growing into Schoolyn", href: "#experience" },
  },
  {
    title: "Cloud deployment",
    description:
      "Deploying Next.js apps to Vercel or a DigitalOcean server with Nginx, PM2, and Cloudflare, including file storage and scheduled jobs. Best suited to small and early-stage products.",
    icon: <GlobeIcon className='h-5 w-5' />,
    proof: { label: "Schoolyn's production setup", href: "#experience" },
  },
  {
    title: "Existing React & Next.js projects",
    description:
      "Adding features, fixing bugs, tightening permissions, and improving mobile layouts in a codebase you already have.",
    icon: <Pencil2Icon className='h-5 w-5' />,
    proof: { label: "Ongoing Schoolyn maintenance", href: "#experience" },
  },
];

const Services = () => {
  return (
    <section id='services' className='py-20 md:py-28 section-divider'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <SectionHeader
            eyebrow='What I offer'
            title='Services'
            description={
              <>
                Work I can take on for startups and small businesses, based on
                what I&apos;ve already built and shipped.
              </>
            }
          />

          <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            {services.map((service, index) => (
              <Reveal
                as='li'
                key={service.title}
                delay={(index % 3) * 80}
                className='glass-card lift-hover rounded-xl p-6 flex flex-col'>
                <div
                  aria-hidden='true'
                  className='w-fit p-2 mb-4 bg-primary/10 rounded-lg text-primary'>
                  {service.icon}
                </div>
                <h3 className='font-semibold text-lg mb-2'>{service.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                  {service.description}
                </p>
                <p className='mt-auto text-xs text-muted-foreground'>
                  Seen in:{" "}
                  <a
                    href={service.proof.href}
                    className='text-primary font-medium hover:underline underline-offset-4'>
                    {service.proof.label}
                  </a>
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal className='mt-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl border border-border bg-muted/40 p-6'>
            <div className='flex items-start gap-3 max-w-2xl'>
              <MagicWandIcon
                aria-hidden='true'
                className='h-5 w-5 mt-0.5 flex-shrink-0 text-primary'
              />
              <p className='text-sm text-muted-foreground leading-relaxed'>
                <span className='font-semibold text-foreground'>
                  AI-assisted, carefully reviewed.{" "}
                </span>
                I use AI coding tools to prototype and iterate faster, and I
                review and test what I ship.
              </p>
            </div>
            <Button
              asChild
              className='flex-shrink-0'>
              <a href='#contact'>Discuss a project</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
