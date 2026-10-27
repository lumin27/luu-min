"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, RocketIcon, CodeIcon } from "@radix-ui/react-icons";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SchoolynExperience from "@/components/SchoolynExperience";

const Experience = () => {
  const timeline = [
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
      title: "Marketplace App",
      company: "Personal Project",
      period: "2025",
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

  return (
    <section id='experience' className='py-20 md:py-28 bg-muted/30 section-divider'>
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
          <div className='relative max-w-4xl mx-auto'>
            {/* Timeline Line */}
            <div className='absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary/70 via-electric-blue/50 to-transparent'></div>

            <div className='space-y-12'>
              {timeline.map((item, index) => (
                <Reveal
                  key={item.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                  {/* Timeline Node */}
                  <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-electric-blue rounded-full border-4 border-background ring-4 ring-primary/15 z-10'></div>

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
