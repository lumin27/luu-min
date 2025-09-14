"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Foodie-POS",
      subtitle: "Point of Sale System for Restaurants",
      description:
        "Foodie-POS is a user-friendly, efficient, and secure POS system for restaurants. Customers can scan QR codes, place orders, and track them in real-time.",
      subdescription:
        "Built as a SaaS app with Next.js 14, Material UI, Vercel, Stripe, TypeScript, Prisma, NextAuth, PostgreSQL, Zod, and Vercel Blob Storage.",
      liveUrl: "https://foodie-pos-theta.vercel.app/",
      githubUrl: "https://github.com/lumin27/foodie-pos",
      tags: [
        "Next.js",
        "React.js",
        "Material UI",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "BlogSphere",
      subtitle: "Modern Blog Platform",
      description:
        " Built with Next.js, Prisma, and PostgreSQL; a modern, minimalist blog platform with real - time reactions and Cloudinary image support.",
      subdescription:
        "Dynamic post creation, reactions, comments, optimized for performance and scalability, integrated with Cloudinary.",
      liveUrl: "https://blog-app-beta-six.vercel.app/",
      githubUrl: "https://github.com/lumin27/blog-app",
      tags: [
        "Next.js",
        "React.js",
        "Material UI",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "EduTrack",
      subtitle: "School Dashboard System",
      description:
        "A modern platform for schools to manage attendance, schedules, assignments, announcements, messaging, and financial records. Features an intuitive dashboard with real-time events, updates, and transaction tracking for seamless administration.",
      subdescription:
        "Built with Next.js, Appwrite, Twilio, Sentry; efficient, scalable, user-centered. Admin login: username admin12345, password admin",
      liveUrl: "https://edutrack.lumin27.com/",
      githubUrl: "https://github.com/lumin27/school_dashboard",
      tags: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
      featured: true,
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='projects' className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`transition-all duration-1500 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>
              Featured Projects
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary to-electric-blue mx-auto mb-8'></div>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className='grid lg:grid-cols-1 gap-8'>
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`glass-card glow-hover group cursor-pointer transition-all duration-500 animate-slide-up ${
                  project.featured ? "lg:col-span-1" : ""
                } ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className='flex justify-between items-start mb-4'>
                    <div className='flex-1'>
                      <CardTitle className='text-2xl mb-2 group-hover:text-primary transition-colors duration-300'>
                        {project.title}
                      </CardTitle>
                      <p className='text-lg text-primary font-medium mb-3'>
                        {project.subtitle}
                      </p>
                    </div>
                    {project.featured && (
                      <Badge className='bg-gradient-to-r from-primary to-electric-blue text-primary-foreground'>
                        Featured
                      </Badge>
                    )}
                  </div>

                  <div className='space-y-3'>
                    <p className='text-muted-foreground leading-relaxed'>
                      {project.description}
                    </p>
                    <p className='text-sm text-muted-foreground/80 leading-relaxed'>
                      {project.subdescription}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='secondary' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-4'>
                    <Button
                      asChild
                      className='glow-hover bg-primary hover:bg-primary/90'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'>
                        <ExternalLinkIcon className='h-4 w-4' />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant='outline'
                      asChild
                      className='glow-hover border-primary hover:bg-primary hover:text-primary-foreground'>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'>
                        <GitHubLogoIcon className='h-4 w-4' />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className='text-center mt-12'>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='glow-hover border-primary hover:bg-primary hover:text-primary-foreground'>
              <a
                href='https://github.com/lumin27'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'>
                <GitHubLogoIcon className='h-5 w-5' />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
