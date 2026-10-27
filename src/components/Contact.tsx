"use client";

import { useState } from "react";
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
} from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
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
          to_email: "luumin369@gmail.com",
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
        description: "Something went wrong. Please try again later.",
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
  ];

  const quickInfo = [
    "Open to startup collaboration",
    "Available for remote work",
    "Open to full-time & freelance",
    "Quick to respond",
  ];

  return (
    <section id='contact' className='py-20 md:py-28 bg-muted/30 section-divider'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <SectionHeader
            eyebrow='Get in touch'
            title="Let's Work Together"
            description={
              <>
                I&apos;m open to collaborating with startups and small teams on
                practical software. If you&apos;re building something useful,
                I&apos;d like to hear about it.
              </>
            }
          />

          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Contact Form */}
            <Reveal>
              <Card className='glass-card h-full'>
                <CardHeader>
                  <CardTitle className='text-2xl'>Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>Name</Label>
                      <Input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Your name'
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='bg-background/60'
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='message'>Message</Label>
                      <Textarea
                        id='message'
                        name='message'
                        placeholder='Tell me about your project, team, or idea...'
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className='resize-none bg-background/60'
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
            <Reveal delay={100} className='space-y-8'>
              <Card className='glass-card'>
                <CardContent className='p-6 sm:p-8'>
                  <h3 className='text-2xl font-semibold mb-4'>Let&apos;s Connect</h3>
                  <p className='text-muted-foreground leading-relaxed mb-6'>
                    Have a project in mind, need an extra developer on a small
                    team, or just want to talk about building software with AI
                    tools? Email is the quickest way to reach me.
                  </p>

                  <div className='space-y-3'>
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={
                          link.name !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className='flex items-center gap-4 p-4 rounded-lg border border-transparent bg-muted/50 transition-colors duration-200 hover:bg-muted hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
                        <div className='text-primary'>{link.icon}</div>
                        <div className='min-w-0'>
                          <p className='font-medium'>{link.name}</p>
                          <p className='text-sm text-muted-foreground break-all'>
                            {link.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className='glass-card'>
                <CardContent className='p-6 sm:p-8'>
                  <h3 className='text-xl font-semibold mb-4'>Quick Info</h3>
                  <ul className='space-y-3 text-muted-foreground'>
                    {quickInfo.map((item) => (
                      <li key={item} className='flex items-center gap-3'>
                        <CheckCircledIcon
                          aria-hidden='true'
                          className='h-4 w-4 flex-shrink-0 text-primary'
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
