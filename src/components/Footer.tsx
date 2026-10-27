"use client";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/lumin27",
    icon: <GitHubLogoIcon className='h-5 w-5' />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luu-min-a779b9334/",
    icon: <LinkedInLogoIcon className='h-5 w-5' />,
  },
  {
    name: "Email",
    href: "mailto:linnmu2030@gmail.com",
    icon: <EnvelopeClosedIcon className='h-5 w-5' />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-card border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <p className='text-xl font-bold bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent'>
                Luu Min
              </p>
              <Image src='/favicon.ico' alt='' width={32} height={32} />
            </div>

            <p className='text-muted-foreground'>
              Full-Stack Developer & Product Builder. I build practical
              software products and I&apos;m exploring AI-assisted development.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label='Footer' className='space-y-4'>
            <h2 className='font-semibold'>Quick Links</h2>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-muted-foreground hover:text-primary transition-colors duration-200'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className='space-y-4'>
            <h2 className='font-semibold'>Connect</h2>
            <ul className='flex space-x-4'>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={
                      link.name !== "Email" ? "noopener noreferrer" : undefined
                    }
                    aria-label={link.name}
                    className='block p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className='text-sm text-muted-foreground'>
              Open to collaborating on useful software &mdash; let&apos;s talk.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className='pt-8 border-t border-border'>
          <p className='text-center text-muted-foreground text-sm'>
            © {currentYear} Luu Min. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
