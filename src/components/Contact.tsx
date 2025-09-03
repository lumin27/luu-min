"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/lumin27",
      icon: <GitHubLogoIcon className='h-6 w-6' />,
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/luu-min-a779b9334/",
      icon: <LinkedInLogoIcon className='h-6 w-6' />,
      description: "Let's connect professionally",
    },
    {
      name: "Email",
      href: "mailto:linnmu2030@gmail.com",
      icon: <EnvelopeClosedIcon className='h-6 w-6' />,
      description: "Send me an email",
    },
  ];

  return (
    <section id='contact' className='py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>
              Get In Touch
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary to-electric-blue mx-auto mb-8'></div>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <Card className='glass-card glow-hover animate-slide-up'>
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
                      className='glow-hover'
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
                      className='glow-hover'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Tell me about your project or just say hello...'
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className='glow-hover resize-none'
                    />
                  </div>

                  <Button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full glow-hover bg-primary hover:bg-primary/90'>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div
              className='space-y-8 animate-slide-up'
              style={{ animationDelay: "0.2s" }}>
              <Card className='glass-card glow-hover'>
                <CardContent className='p-8'>
                  <h3 className='text-2xl font-semibold mb-6'>Let's Connect</h3>
                  <p className='text-muted-foreground leading-relaxed mb-8'>
                    I'm currently open to new opportunities and interesting
                    projects. Whether you have a project in mind, want to
                    collaborate, or just want to say hello, I'd love to hear
                    from you!
                  </p>

                  <div className='space-y-4'>
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.name !== "Email" ? "_blank" : undefined}
                        rel={
                          link.name !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className='flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 glow-hover animate-scale-in'
                        style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className='text-primary'>{link.icon}</div>
                        <div>
                          <h4 className='font-medium'>{link.name}</h4>
                          <p className='text-sm text-muted-foreground'>
                            {link.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className='glass-card glow-hover'>
                <CardContent className='p-8'>
                  <h3 className='text-xl font-semibold mb-4'>Quick Info</h3>
                  <div className='space-y-3 text-muted-foreground'>
                    <p>📍 Available for remote work</p>
                    <p>⚡ Quick to respond</p>
                    <p>🚀 Ready for new challenges</p>
                    <p>💼 Open to full-time & freelance</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
