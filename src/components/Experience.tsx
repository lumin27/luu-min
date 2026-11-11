"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, RocketIcon, CodeIcon } from "@radix-ui/react-icons";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SchoolynExperience from "@/components/SchoolynExperience";

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Draw the timeline line down to a point just below mid-screen, lighting each node it passes.
  useEffect(() => {
    const timelineEl = timelineRef.current;
    const fill = fillRef.current;
    if (!timelineEl || !fill) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(timelineEl.querySelectorAll<HTMLElement>("[data-node]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = timelineEl.getBoundingClientRect();
      const reach = window.innerHeight * 0.6 - rect.top;
      fill.style.setProperty("--tw-scale-y", String(Math.min(1, Math.max(0, reach / rect.height))));
      nodes.forEach((node) => {
        const top = node.getBoundingClientRect().top - rect.top;
        node.toggleAttribute("data-dim", top > reach);
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const timeline = [
    {
      id: 2,
      title: "BlogSphere Platform",
      company: "Personal Project",
      period: "2025",
      type: "project",
      description:
        "Developed a modern blog platform with dynamic post creation, user interactions, and optimized performance using Next.js and PostgreSQL.",
      technologies: [
        "Next.js",
        "Material UI",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "TypeScript",
        "NextAuth",
      ],
      icon: <CodeIcon className='h-5 w-5' />,
    },
    {
      id: 3,
      title: "Foodie-POS System",
      company: "SaaS Project",
      period: "2024 – Present",
      type: "project",
      description:
        "Restaurant ordering, order tracking, and payment recording.",
      technologies: [
        "Next.js",
        "Material UI",
        "Prisma",
        "PostgreSQL",
        "Zod",
        "Vercel Blob Storage",
        "NextAuth",
        "TypeScript",
      ],
      icon: <RocketIcon className='h-5 w-5' />,
    },
    {
      id: 4,
      title: "Marketplace App",
      company: "Personal Project",
      period: "2025 – 2026",
      type: "project",
      description:
        "Built a modern buy-and-sell marketplace with Next.js, Prisma, and PostgreSQL. Features real-time listings, categories, search, user interactions, and seamless transaction management.",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "Supabase Auth",
        "Server Actions",
      ],
      icon: <CodeIcon className='h-5 w-5' />,
    },
    {
      id: 5,
      title: "Full Stack Development Journey",
      company: "Self-taught Developer",
      period: "2022 – Present",
      type: "learning",
      description:
        "Intensive self-study and hands-on practice with modern web technologies, focusing on React ecosystem and full-stack development.",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "APIs",
        "Git",
        "TailwindCSS",
        "Material-UI",
        "Cloudinary",
        "Server Actions",
        "Prisma",
        "PostgreSQL",
      ],
      icon: <CalendarIcon className='h-5 w-5' />,
    },
  ];

  return (
    <section id='experience' className='py-20 md:py-28 bg-muted/30 section-divider section-glow'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <SectionHeader
            eyebrow='How I got here'
            title='Experience & Journey'
            description={
              <>
                I learn by building real products and improving them over time.
                Most of that work has gone into Schoolyn.
              </>
            }
          />

          <SchoolynExperience />

          <Reveal>
            <h3 className='text-2xl font-semibold text-center mt-16 md:mt-20 mb-10'>
              Earlier projects
            </h3>
          </Reveal>

          {/* Timeline */}
          <div ref={timelineRef} className='relative max-w-4xl mx-auto'>
            {/* Timeline Line */}
            <div className='absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-border/60'></div>
            <div
              ref={fillRef}
              className='absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full origin-top bg-gradient-to-b from-primary via-violet to-primary/40 shadow-[0_0_12px_hsl(var(--electric-blue)/0.6)]'></div>

            <div className='space-y-12'>
              {timeline.map((item, index) => (
                <Reveal
                  key={item.id}
                  variant={index % 2 === 0 ? "left" : "right"}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                  {/* Timeline Node */}
                  <div
                    data-node
                    className='absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-violet rounded-full border-4 border-background ring-4 ring-primary/25 z-10 transition-[transform,opacity,box-shadow] duration-500 ease-out-expo shadow-[0_0_14px_hsl(var(--electric-blue)/0.7)] data-[dim]:scale-75 data-[dim]:opacity-40 data-[dim]:shadow-none'></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}>
                    <Card className='glass-card glow-hover card-motion' data-tilt='3'>
                      <CardContent className='p-6'>
                        {/* Header */}
                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex items-center gap-3'>
                            <div className='p-2 bg-primary/10 rounded-lg text-brand-text'>
                              {item.icon}
                            </div>
                            <div>
                              <h3 className='font-semibold text-lg'>
                                {item.title}
                              </h3>
                              <p className='text-brand-text font-medium'>
                                {item.company}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              item.type === "project" ? "default" : "secondary"
                            }
                            className='ml-2'>
                            {item.period}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className='text-muted-foreground mb-4 leading-relaxed'>
                          {item.description}
                        </p>

                        {/* Technologies */}
                        <div className='flex flex-wrap gap-2'>
                          {item.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant='outline'
                              className='text-xs'>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for desktop */}
                  <div className='hidden md:block w-5/12'></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
