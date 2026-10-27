"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SchoolynSpotlight from "@/components/SchoolynSpotlight";
import SchoolynMobile from "@/components/SchoolynMobile";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  features: string[];
  role: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  demoNote?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Foodie-POS",
    subtitle: "Point of Sale System for Restaurants",
    category: "Business software · SaaS",
    summary:
      "A POS system that lets restaurant customers order by scanning a QR code, while the restaurant manages incoming orders in one place.",
    features: [
      "QR-code ordering for customers",
      "Real-time order tracking",
      "Payment integration with Stripe",
      "Authentication with NextAuth and image storage with Vercel Blob",
    ],
    role: "Personal project, built end to end and deployed on Vercel.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Material UI",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Zod",
      "Vercel Blob",
    ],
    liveUrl: "https://foodie-pos-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Marketplace",
    subtitle: "Buy and Sell Marketplace",
    category: "Web app · Marketplace",
    summary:
      "A buy-and-sell platform where users list items, browse by category, and contact sellers directly.",
    features: [
      "Sign-up and login with Supabase Auth",
      "Create, browse, and search listings by category",
      "Image uploads, favorites, and buyer-seller messaging",
      "Seller analytics dashboard and dark/light mode",
    ],
    role: "Personal project, built end to end and deployed on Vercel.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Supabase Auth",
      "Cloudinary",
      "Server Actions",
    ],
    liveUrl: "https://marketplace-app-one-beta.vercel.app",
    githubUrl: "https://github.com/lumin27/marketplace-app",
  },
  {
    id: 4,
    title: "BlogSphere",
    subtitle: "Modern Blog Platform",
    category: "Web app · Content platform",
    summary:
      "A minimalist blogging platform for publishing posts and engaging with readers.",
    features: [
      "Authentication with role-based access",
      "Post creation with image uploads via Cloudinary",
      "Reactions and comments on posts",
      "Responsive layout for desktop and mobile",
    ],
    role: "Personal project, built end to end and deployed on Vercel.",
    tags: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Cloudinary",
    ],
    liveUrl: "https://blog-app-beta-six.vercel.app/",
    githubUrl: "https://github.com/lumin27/blog-app",
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-20 md:py-28 section-divider'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <SectionHeader
            eyebrow='Selected work'
            title='Featured Projects'
            description={
              <>
                Real products and full-stack applications I&apos;ve built and
                deployed, led by Schoolyn, the school management platform I
                build and maintain.
              </>
            }
          />

          <SchoolynSpotlight />
          <SchoolynMobile />

          <Reveal>
            <h3 className='text-xl font-semibold mb-6'>More projects</h3>
          </Reveal>

          {/* Projects Grid */}
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
            {projects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 80}
                className='flex md:last:col-span-2 xl:last:col-span-1'>
                <Card className='glass-card lift-hover flex flex-col w-full'>
                  <CardHeader className='pb-4'>
                    <Badge
                      variant='outline'
                      className='w-fit mb-3 border-primary/40 text-primary'>
                      {project.category}
                    </Badge>
                    <CardTitle className='text-2xl'>{project.title}</CardTitle>
                    <p className='text-base sm:text-lg text-primary font-medium'>
                      {project.subtitle}
                    </p>
                    <p className='text-muted-foreground leading-relaxed pt-2'>
                      {project.summary}
                    </p>
                  </CardHeader>

                  <CardContent className='flex flex-col flex-1 gap-5'>
                    <div>
                      <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2'>
                        Key features
                      </h4>
                      <ul className='space-y-1.5'>
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className='flex gap-2 text-sm leading-relaxed'>
                            <CheckIcon
                              aria-hidden='true'
                              className='h-4 w-4 mt-0.5 flex-shrink-0 text-primary'
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className='text-sm text-muted-foreground'>
                      <span className='font-semibold text-foreground'>
                        My role:{" "}
                      </span>
                      {project.role}
                    </p>

                    <ul
                      aria-label={`${project.title} tech stack`}
                      className='flex flex-wrap gap-2'>
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant='secondary' className='text-xs'>
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul>

                    {project.demoNote && (
                      <p className='text-xs text-muted-foreground rounded-md bg-muted/60 px-3 py-2'>
                        {project.demoNote}
                      </p>
                    )}

                    {/* Action Buttons */}
                    <div className='flex flex-wrap items-center gap-3 mt-auto pt-2'>
                      <Button asChild>
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2'>
                          <ExternalLinkIcon className='h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                          Live Demo
                          <span className='sr-only'> of {project.title}</span>
                        </a>
                      </Button>

                      {project.githubUrl ? (
                        <Button
                          variant='outline'
                          asChild
                          className='border-primary/70 bg-transparent hover:bg-primary hover:border-primary hover:text-primary-foreground'>
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2'>
                            <GitHubLogoIcon className='h-4 w-4' />
                            GitHub
                            <span className='sr-only'>
                              {" "}
                              repository for {project.title}
                            </span>
                          </a>
                        </Button>
                      ) : (
                        <span className='flex items-center gap-2 text-sm text-muted-foreground'>
                          <LockClosedIcon
                            aria-hidden='true'
                            className='h-4 w-4'
                          />
                          Source code private
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className='text-center mt-12'>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='border-primary/70 bg-transparent hover:bg-primary hover:border-primary hover:text-primary-foreground'>
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
