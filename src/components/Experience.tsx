"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, RocketIcon, CodeIcon } from "@radix-ui/react-icons";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const timeline = [
    {
      id: 1,
      title: "EduTrack Development",
      company: "Personal Project",
      period: "2024",
      type: "project",
      description:
        "Built a comprehensive school dashboard system with Next.js, featuring attendance tracking, communication tools, and performance monitoring for educational institutions.",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Zod",
        "Clerk",
        "Event Calendar",
      ],
      icon: <RocketIcon className='h-5 w-5' />,
    },
    {
      id: 2,
      title: "BlogSphere Platform",
      company: "Personal Project",
      period: "2024",
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
      period: "2024",
      type: "project",
      description:
        "Created a complete restaurant POS system with QR code ordering, real-time tracking, and payment integration using Stripe.",
      technologies: [
        "Next.js",
        "Material UI",
        "Stripe",
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
      title: "Full Stack Development Journey",
      company: "Self-taught Developer",
      period: "2023 - Present",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='experience' className='py-20 bg-muted/30'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>
              Experience & Journey
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary to-electric-blue mx-auto mb-8'></div>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              My development journey and the projects that shaped my skills.
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-electric-blue to-primary'></div>

            <div className='space-y-12'>
              {timeline.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex items-center animate-slide-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Node */}
                  <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-electric-blue rounded-full border-4 border-background z-10 glow-hover'></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}>
                    <Card className='glass-card glow-hover'>
                      <CardContent className='p-6'>
                        {/* Header */}
                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex items-center gap-3'>
                            <div className='p-2 bg-primary/10 rounded-lg text-primary'>
                              {item.icon}
                            </div>
                            <div>
                              <h3 className='font-semibold text-lg'>
                                {item.title}
                              </h3>
                              <p className='text-primary font-medium'>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
