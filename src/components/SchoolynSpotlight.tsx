import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDownIcon,
  CheckIcon,
  ExternalLinkIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import Reveal from "@/components/Reveal";

export const SCHOOLYN_URL = "https://schoolyn.academy/";

const features = [
  "Students, classes, timetables, and attendance",
  "Exams, results, report cards, and certificates",
  "Fees, invoices, payment schedules, receipts, refunds, and payroll",
  "Parents submit payment proof (KBZPay, WavePay, AYA Pay, bank transfer) for staff approval",
  "Messaging, announcements, and push notifications for parents and staff",
  "Public school websites, admission inquiries, and bulk CSV onboarding",
];

const technicalHighlights = [
  "Multi-school SaaS: each school gets its own subdomain",
  "Tenant isolation enforced in a school-scoped Prisma client",
  "Role-based access for admins, teachers, students, parents, accountants, and school-group owners",
  "Self-hosted on a DigitalOcean server with PM2, Nginx, and Cloudflare",
];

const stack = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Clerk",
  "TailwindCSS",
  "Zod",
  "Pusher",
  "OneSignal",
  "DigitalOcean Spaces",
];

const CheckList = ({ items, columns }: { items: string[]; columns?: boolean }) => (
  <ul className={columns ? "grid sm:grid-cols-2 gap-x-6 gap-y-2.5" : "space-y-2.5"}>
    {items.map((item) => (
      <li key={item} className='flex gap-2.5 text-sm leading-relaxed'>
        <CheckIcon
          aria-hidden='true'
          className='h-4 w-4 mt-0.5 flex-shrink-0 text-primary'
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SchoolynSpotlight = () => {
  return (
    <Reveal id='schoolyn' className='mb-10 lg:mb-14 scroll-mt-24'>
      <div className='rounded-2xl p-px bg-gradient-to-br from-primary/70 via-border to-electric-blue/50 shadow-[0_40px_100px_-48px_hsl(var(--electric-blue)/0.6)]'>
        <div className='relative overflow-hidden rounded-[calc(1rem-1px)] bg-card'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 ambient-spot'
          />

          <div className='relative p-6 sm:p-8 lg:p-12'>
            {/* Product story + visual */}
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-12 items-center'>
              <div>
                <div className='flex flex-wrap gap-2 mb-5'>
                  <Badge className='bg-gradient-to-r from-primary to-electric-blue text-primary-foreground'>
                    My product
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-primary/40 text-primary'>
                    Formerly EduTrack
                  </Badge>
                </div>

                <h3 className='text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>
                  Schoolyn
                </h3>
                <p className='text-lg sm:text-xl text-primary font-medium mb-5'>
                  School Management SaaS Platform
                </p>
                <p className='text-muted-foreground leading-relaxed mb-8'>
                  Schools often juggle attendance, exam results, fee
                  collection, and parent communication across separate tools.
                  Schoolyn puts that work in one place for school staff,
                  teachers, students, and parents. It started as EduTrack, my
                  school dashboard project, and I&apos;ve grown it into a
                  multi-school SaaS product.
                </p>

                <div className='flex flex-wrap items-center gap-3'>
                  <Button asChild>
                    <a
                      href={SCHOOLYN_URL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2'>
                      <ExternalLinkIcon className='h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                      Visit schoolyn.academy
                    </a>
                  </Button>
                  <Button
                    variant='outline'
                    asChild
                    className='border-primary/70 bg-transparent hover:bg-primary hover:border-primary hover:text-primary-foreground'>
                    <a href='#experience' className='flex items-center gap-2'>
                      <ArrowDownIcon className='h-4 w-4 group-hover:translate-y-0.5' />
                      How I built it
                    </a>
                  </Button>
                  <span className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <LockClosedIcon aria-hidden='true' className='h-4 w-4' />
                    Source code private
                  </span>
                </div>
              </div>

              <figure>
                <div className='overflow-hidden rounded-xl border border-border bg-background shadow-[0_24px_60px_-24px_hsl(0_0%_0%/0.6)]'>
                  <div
                    aria-hidden='true'
                    className='flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2'>
                    <span className='h-2.5 w-2.5 rounded-full bg-red-400/80' />
                    <span className='h-2.5 w-2.5 rounded-full bg-amber-400/80' />
                    <span className='h-2.5 w-2.5 rounded-full bg-green-400/80' />
                    <span className='ml-3 truncate rounded-md bg-background/70 px-3 py-0.5 text-xs text-muted-foreground'>
                      schoolyn.academy
                    </span>
                  </div>
                  <div className='relative aspect-[16/10]'>
                    <Image
                      src='/projects/schoolyn/schoolyn-home.jpg'
                      alt='The Schoolyn homepage at schoolyn.academy, introducing the school administration and billing platform'
                      fill
                      sizes='(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 90vw'
                      className='object-cover object-top'
                    />
                  </div>
                </div>
                <figcaption className='mt-3 text-center text-xs text-muted-foreground'>
                  The public schoolyn.academy homepage.
                </figcaption>
              </figure>
            </div>

            {/* Details */}
            <div className='mt-10 lg:mt-12 pt-10 border-t border-border/70 grid lg:grid-cols-3 gap-10'>
              <div className='lg:col-span-2'>
                <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4'>
                  Key features
                </h4>
                <CheckList items={features} columns />
              </div>
              <div>
                <h4 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4'>
                  Technical highlights
                </h4>
                <CheckList items={technicalHighlights} />
              </div>
            </div>

            <div className='mt-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10'>
              <p className='text-sm text-muted-foreground lg:max-w-sm'>
                <span className='font-semibold text-foreground'>My role: </span>
                Creator and sole developer, covering product decisions,
                database design, backend and UI, testing, and deployment.
              </p>
              <ul
                aria-label='Schoolyn tech stack'
                className='flex flex-wrap gap-2 lg:flex-1 lg:justify-end'>
                {stack.map((tech) => (
                  <li key={tech}>
                    <Badge variant='secondary' className='text-xs'>
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default SchoolynSpotlight;
