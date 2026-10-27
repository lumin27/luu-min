"use client";

import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  CheckCircledIcon,
  ClockIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiNodedotjs,
  SiReact,
  SiVercel,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiMui,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiSupabase,
  SiStripe,
  SiClerk,
  SiZod,
  SiExpo,
  SiDigitalocean,
  SiNginx,
  SiPm2,
  SiCloudflare,
} from "react-icons/si";

type Skill = { name: string; icon: ReactNode };

type SkillGroup = {
  title: string;
  note?: string;
  skills: Skill[];
  familiar?: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 className='text-orange-500' /> },
      { name: "CSS", icon: <SiCss3 className='text-blue-500' /> },
      { name: "JavaScript", icon: <SiJavascript className='text-yellow-500' /> },
      { name: "TypeScript", icon: <SiTypescript className='text-blue-600' /> },
      { name: "React.js", icon: <SiReact className='text-sky-500' /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className='text-black dark:text-white' />,
      },
      { name: "TailwindCSS", icon: <SiTailwindcss className='text-cyan-500' /> },
      { name: "Material UI", icon: <SiMui className='text-blue-600' /> },
      { name: "Bootstrap", icon: <SiBootstrap className='text-purple-600' /> },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className='text-green-600' /> },
      { name: "Prisma", icon: <SiPrisma className='text-indigo-500' /> },
      { name: "PostgreSQL", icon: <SiPostgresql className='text-blue-500' /> },
      { name: "Supabase", icon: <SiSupabase className='text-green-500' /> },
      { name: "Zod", icon: <SiZod className='text-blue-700 dark:text-blue-400' /> },
    ],
  },
  {
    title: "Auth, Payments & Services",
    skills: [
      { name: "NextAuth", icon: <LockClosedIcon className='text-primary' /> },
      { name: "Clerk", icon: <SiClerk className='text-violet-500' /> },
      { name: "Stripe", icon: <SiStripe className='text-indigo-500' /> },
      { name: "Cloudinary", icon: <SiCloudinary className='text-blue-500' /> },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: <SiReact className='text-sky-500' /> },
      { name: "Expo", icon: <SiExpo className='text-black dark:text-white' /> },
    ],
  },
  {
    title: "Cloud & Deployment",
    note: "Used to deploy and run my own projects",
    skills: [
      {
        name: "DigitalOcean",
        icon: <SiDigitalocean className='text-blue-500' />,
      },
      { name: "Nginx", icon: <SiNginx className='text-green-600' /> },
      { name: "PM2", icon: <SiPm2 className='text-blue-700 dark:text-blue-400' /> },
      { name: "Cloudflare", icon: <SiCloudflare className='text-orange-500' /> },
      { name: "Vercel", icon: <SiVercel className='text-black dark:text-white' /> },
      { name: "Cron jobs", icon: <ClockIcon className='text-primary' /> },
    ],
    familiar: ["Docker", "Neon (serverless Postgres)"],
  },
  {
    title: "Workflow",
    skills: [
      { name: "Git", icon: <SiGit className='text-orange-600' /> },
      {
        name: "GitHub",
        icon: <SiGithub className='text-gray-800 dark:text-white' />,
      },
    ],
  },
];

const workingPrinciples = [
  {
    title: "Start from the problem",
    text: "Understand who will use the software and what they actually need before writing code.",
  },
  {
    title: "Build end to end",
    text: "Database design, server logic, UI, and deployment, so a feature is usable, not just started.",
  },
  {
    title: "Use AI as a tool, not a shortcut",
    text: "AI coding tools help me prototype and iterate faster, but I still review, test, and understand what I ship.",
  },
  {
    title: "Keep learning",
    text: "Pick up new tools when a project needs them, and ask questions early.",
  },
];

const About = () => {
  return (
    <section id='about' className='py-20 md:py-28 bg-muted/30 section-divider'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          eyebrow='Who I am'
          title='About Me'
          description='A developer who likes building things that solve real problems.'
        />

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Bio */}
          <div className='space-y-6'>
            <Reveal>
              <Card className='glass-card'>
                <CardContent className='p-6 sm:p-8'>
                  <h3 className='text-2xl font-semibold mb-4 text-primary'>
                    Full-Stack Developer & Product Builder
                  </h3>
                  <div className='space-y-4 text-muted-foreground leading-relaxed'>
                    <p>
                      I&apos;m a self-taught developer who learns best by
                      building. Since 2023 I&apos;ve been turning what I learn
                      into complete, deployed applications rather than stopping
                      at tutorials.
                    </p>
                    <p>
                      Most of my projects start from a real-world problem:
                      restaurants taking orders through QR codes, schools
                      managing attendance and fees, people buying and selling
                      items. I enjoy working across the whole stack &mdash;
                      modelling data with Prisma and PostgreSQL, writing server
                      logic, and shaping the interface in React and Next.js.
                    </p>
                    <p>
                      My biggest project is Schoolyn, which began as a school
                      dashboard called EduTrack. I&apos;ve kept building it into
                      a multi-school SaaS product, adding features, tightening
                      permissions, fixing bugs, and preparing it for production.
                      It&apos;s where I&apos;ve learned the most about working on
                      a real, growing codebase.
                    </p>
                    <p>
                      Lately I&apos;ve been exploring AI-assisted development.
                      I&apos;m looking to collaborate with an early-stage team
                      where I can contribute, learn quickly, and help build
                      software that people actually use.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={100}>
              <Card className='glass-card'>
                <CardContent className='p-6 sm:p-8'>
                  <h3 className='text-xl font-semibold mb-5'>How I work</h3>
                  <ul className='space-y-4'>
                    {workingPrinciples.map((item) => (
                      <li key={item.title} className='flex gap-3'>
                        <CheckCircledIcon
                          aria-hidden='true'
                          className='h-5 w-5 mt-0.5 flex-shrink-0 text-primary'
                        />
                        <div>
                          <p className='font-medium'>{item.title}</p>
                          <p className='text-sm text-muted-foreground leading-relaxed'>
                            {item.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* Skills */}
          <div className='space-y-8'>
            <Reveal>
              <h3 className='text-2xl font-semibold text-primary mb-2'>
                Skills & Tools
              </h3>
              <p className='text-muted-foreground'>
                Technologies I&apos;ve used to build the projects below.
              </p>
            </Reveal>
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={Math.min(index, 3) * 60}>
                <h4
                  className={`text-sm font-semibold uppercase tracking-wider text-muted-foreground ${
                    group.note ? "mb-1" : "mb-3"
                  }`}>
                  {group.title}
                </h4>
                {group.note && (
                  <p className='text-sm text-muted-foreground mb-3'>
                    {group.note}
                  </p>
                )}
                <ul className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className='flex items-center gap-3 px-4 py-3 rounded-lg border border-border/80 bg-card/70 transition-colors duration-200 hover:border-primary/40 hover:bg-card'>
                      <span
                        aria-hidden='true'
                        className='text-2xl flex-shrink-0 [&>svg]:h-6 [&>svg]:w-6'>
                        {skill.icon}
                      </span>
                      <span className='font-medium text-sm sm:text-base truncate'>
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
                {group.familiar && (
                  <p className='mt-3 text-sm text-muted-foreground'>
                    <span className='font-medium text-foreground'>
                      Familiar with, limited hands-on use:
                    </span>{" "}
                    {group.familiar.join(", ")}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
