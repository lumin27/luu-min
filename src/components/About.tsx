"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  SiGithub,
  SiSupabase,
} from "react-icons/si";

const About = () => {
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className='h-10 w-10 text-orange-500' />,
    },
    {
      name: "CSS",
      icon: <SiCss3 className='h-10 w-10 text-blue-500' />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className='h-10 w-10 text-yellow-500' />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className='h-10 w-10 text-purple-600' />,
    },
    { name: "React.js", icon: <SiReact className='h-10 w-10 text-sky-500' /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className='h-10 w-10 text-black dark:text-white' />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className='h-10 w-10 text-green-600' />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className='h-10 w-10 text-blue-600' />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className='h-10 w-10 text-indigo-500' />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className='h-10 w-10 text-blue-500' />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className='h-10 w-10 text-cyan-500' />,
    },
    {
      name: "Material-UI",
      icon: <SiMui className='h-10 w-10 text-blue-600' />,
    },
    {
      name: "Cloudinary",
      icon: <SiCloudinary className='h-10 w-10 text-orange-500' />,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className='h-10 w-10 text-green-500' />,
    },
    {
      name: "Git",
      icon: <SiGithub className='h-10 w-10 text-gray-800 dark:text-white' />,
    },
  ];

  const technologies = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "TailwindCSS",
    "Material-UI",
    "Cloudinary",
    "Server Actions",
    "Supabase",
    "Git",
  ];

  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>
            About Me
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-electric-blue mx-auto mb-8'></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Bio Section */}
          <div className='space-y-6 md:mt-14 sm:mt-0'>
            <Card className='glass-card glow-hover'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-semibold mb-4 text-primary'>
                  Junior Full Stack Developer
                </h3>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  I'm junior full-stack developer with expertise in modern web
                  technologies. I love creating efficient, scalable, and
                  user-friendly applications that solve real-world problems.
                </p>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  With a strong foundation in React, Next.js, and TypeScript, I
                  build robust applications from concept to deployment. My
                  experience spans both frontend and backend development, with a
                  particular focus on creating seamless user experiences.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  I'm always eager to learn new technologies and take on
                  challenging projects that push the boundaries of what's
                  possible on the web.
                </p>
              </CardContent>
            </Card>

            {/* Technologies */}
            <div>
              <h4 className='text-xl font-semibold mb-4'>
                Technologies I Work With
              </h4>
              <div className='flex flex-wrap gap-2'>
                {technologies.map((tech) => (
                  <Badge key={tech} variant='secondary' className='glow-hover'>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold mb-4 text-primary'>
              My Skills
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex flex-col items-center justify-center p-4 glass-card glow-hover'>
                  <div className='mb-2'>{skill.icon}</div>
                  <span className='font-medium text-center'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
