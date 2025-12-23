"use client";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-card border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <h3 className='text-xl font-bold bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent'>
                Luu Min
              </h3>
              <Image src='/favicon.ico' alt='Logo' width={32} height={32} />
            </div>

            <p className='text-muted-foreground'>
              Junior Full Stack Developer passionate about creating beautiful,
              functional web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='font-semibold'>Quick Links</h4>
            <div className='space-y-2'>
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className='block text-muted-foreground hover:text-primary transition-colors duration-200'>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h4 className='font-semibold'>Connect</h4>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/lumin27'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200 glow-hover'>
                <GitHubLogoIcon className='h-5 w-5' />
              </a>
              <a
                href='https://www.linkedin.com/in/luu-min-a779b9334/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200 glow-hover'>
                <LinkedInLogoIcon className='h-5 w-5' />
              </a>
            </div>
            <p className='text-sm text-muted-foreground'>
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className='pt-8 border-t border-border'>
          <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0'>
            <p className='text-muted-foreground text-sm'>
              © {currentYear} Luu Min. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
