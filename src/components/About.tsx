"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{
    [key: string]: number;
  }>({});

  const skills = [
    { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
    { name: "Prisma", level: 85, color: "from-indigo-500 to-purple-600" },
    { name: "PostgreSQL", level: 82, color: "from-blue-400 to-blue-600" },
    { name: "TailwindCSS", level: 75, color: "from-teal-400 to-blue-500" },
    { name: "Material-UI", level: 88, color: "from-blue-500 to-indigo-600" },
    { name: "Cloudinary", level: 80, color: "from-orange-400 to-pink-500" },
    { name: "Server Actions", level: 85, color: "from-green-400 to-blue-500" },
    { name: "Git", level: 90, color: "from-red-500 to-orange-500" },
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
    "Git",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setProgressValues((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>
              About Me
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary to-electric-blue mx-auto mb-8'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Bio Section */}
            <div className='space-y-6'>
              <Card className='glass-card glow-hover'>
                <CardContent className='p-8'>
                  <h3 className='text-2xl font-semibold mb-4 text-primary'>
                    Full Stack Developer
                  </h3>
                  <p className='text-muted-foreground leading-relaxed mb-4'>
                    I'm a passionate full-stack developer with expertise in
                    modern web technologies. I love creating efficient,
                    scalable, and user-friendly applications that solve
                    real-world problems.
                  </p>
                  <p className='text-muted-foreground leading-relaxed mb-4'>
                    With a strong foundation in React, Next.js, and TypeScript,
                    I build robust applications from concept to deployment. My
                    experience spans both frontend and backend development, with
                    a particular focus on creating seamless user experiences.
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
                  {technologies.map((tech, index) => (
                    <Badge
                      key={tech}
                      variant='secondary'
                      className='glow-hover animate-scale-in'
                      style={{ animationDelay: `${index * 0.1}s` }}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className='space-y-6'>
              <h3 className='text-2xl font-semibold mb-6'>Technical Skills</h3>
              <div className='space-y-4'>
                {skills.map((skill) => (
                  <div key={skill.name} className='space-y-2'>
                    <div className='flex justify-between items-center'>
                      <span className='font-medium'>{skill.name}</span>
                      <span className='text-sm text-muted-foreground'>
                        {progressValues[skill.name] || 0}%
                      </span>
                    </div>
                    <Progress
                      value={progressValues[skill.name] || 0}
                      className='h-3 bg-muted'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
