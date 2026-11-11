"use client";

import { useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  CheckCircledIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";
import Reveal, { STAGGER_STEP_MS } from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SpotlightSurface from "@/components/motion/SpotlightSurface";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_wy33a1i",
        "template_u3u5rzl",
        {
          from_name: formData.name,
          to_name: "Luumin",
          from_email: formData.email,
          to_email: "linnmu2030@gmail.com",
          message: formData.message,
        },
        "4T4YvwSuFzD5YAKyP"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "Your message couldn't be sent. Please try again, or email me directly at linnmu2030@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:linnmu2030@gmail.com",
      icon: <EnvelopeClosedIcon className='h-6 w-6' />,
      description: "linnmu2030@gmail.com",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/luu-min-a779b9334/",
      icon: <LinkedInLogoIcon className='h-6 w-6' />,
      description: "Let's connect professionally",
    },
    {
      name: "GitHub",
      href: "https://github.com/lumin27",
      icon: <GitHubLogoIcon className='h-6 w-6' />,
      description: "Check out my code",
    },
    {
      name: "CV",
      href: "/Luu_Min_CV.pdf",
      icon: <DownloadIcon className='h-6 w-6' />,
      description: "Download my CV (PDF)",
    },
  ];

  const quickInfo = [
    "Open to full-time roles",
    "Available for remote work",
    "Comfortable owning features end to end",
  ];

  return (
    <section id='contact' className='py-20 md:py-28 bg-muted/30 section-divider section-glow'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <SectionHeader
            eyebrow='Get in touch'
            title="Let's Work Together"
            description={
              <>
                I&apos;m looking for a full-time role on a team that builds
                practical software. If you&apos;re hiring, I&apos;d like to
                hear from you.
              </>
            }
          />

          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Contact Form */}
            <Reveal>
              <Card className='glass-card border-flow h-full flex flex-col transition-shadow duration-slow ease-standard'>
                <CardHeader>
                  <CardTitle className='text-2xl'>Send me a message</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-1 flex-col'>
                  <form onSubmit={handleSubmit} className='flex flex-1 flex-col space-y-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>Name</Label>
                      <Input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Your name'
                        autoComplete='name'
                        maxLength={100}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='bg-background/60'
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='email'>Email</Label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='your.email@example.com'
                        autoComplete='email'
                        maxLength={200}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='bg-background/60'
                      />
                    </div>

                    {/* The message box grows so the form fills a card stretched to the info column. */}
                    <div className='flex flex-1 flex-col space-y-2'>
                      <Label htmlFor='message'>Message</Label>
                      <Textarea
                        id='message'
                        name='message'
                        placeholder='Tell me about your project, team, or idea...'
                        rows={5}
                        maxLength={5000}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className='flex-1 resize-none bg-background/60'
                      />
                    </div>

                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full h-11 text-base'>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            {/* Contact Info & Social Links */}
            <Reveal delay={STAGGER_STEP_MS} className='space-y-8'>
              <Card className='glass-card glow-hover card-motion' data-tilt='0'>
                <CardContent className='p-6 sm:p-8'>
                  <h3 className='text-2xl font-semibold mb-4'>Let&apos;s Connect</h3>
                  <p className='text-muted-foreground leading-relaxed mb-6'>
                    Have a role I might fit, or want to talk about my work?
                    Email is the quickest way to reach me.
                  </p>

                  <div className='space-y-3'>
                    {socialLinks.map((link) => (
                      <SpotlightSurface
                        key={link.name}
                        className='rounded-lg'
                        data-tilt='2'
                        style={
                          {
                            "--spotlight-card-surface": "hsl(var(--muted) / 0.5)",
                            "--spotlight-card-shadow": "none",
                          } as CSSProperties
                        }>
                        <a
                          href={link.href}
                          download={link.name === "CV" || undefined}
                          target={link.href.startsWith("https://") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("https://")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className='group flex items-center gap-4 p-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring'>
                          <div className='text-brand-text transition-transform duration-base ease-out-expo group-hover:scale-110 group-hover:-rotate-6 group-focus-visible:scale-110'>
                            {link.icon}
                          </div>
                          <div className='min-w-0'>
                            <p className='font-medium'>{link.name}</p>
                            <p className='text-sm text-muted-foreground break-all'>
                              {link.description}
                            </p>
                          </div>
                        </a>
                      </SpotlightSurface>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className='glass-card glow-hover card-motion' data-tilt='2'>
                <CardContent className='p-6 sm:p-8'>
                  <h3 className='text-xl font-semibold mb-4'>Quick Info</h3>
                  <ul className='list-stagger space-y-3 text-muted-foreground'>
                    {quickInfo.map((item) => (
                      <li key={item} className='flex items-center gap-3'>
                        <CheckCircledIcon
                          aria-hidden='true'
                          className='h-4 w-4 flex-shrink-0 text-brand-text'
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
