import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://luu-min.vercel.app";
const title = "Luu Min - Full-Stack Developer & Product Builder";
const description =
  "Luu Min is a Full-Stack Developer & Product Builder who builds practical software products, from SaaS platforms like Schoolyn to mobile applications and custom business tools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Luu Min", url: siteUrl }],
  creator: "Luu Min",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Luu Min",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  // Dark is the default; ThemeProvider rewrites this when the visitor switches theme.
  themeColor: "#0a0f1e",
  colorScheme: "dark light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luu Min",
  url: siteUrl,
  image: `${siteUrl}/luu-min-halfbody.webp`,
  jobTitle: "Full-Stack Developer & Product Builder",
  sameAs: [
    "https://github.com/lumin27",
    "https://www.linkedin.com/in/luu-min-a779b9334/",
  ],
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "React Native"],
};

// Runs before first paint so the stored (or default dark) theme never flashes light.
// `motion-ready` lets CSS hide scroll-reveal content; without JavaScript it stays visible.
const themeScript = `(function(){var r=document.documentElement;r.classList.add('motion-ready');try{var t=localStorage.getItem('portfolio-theme');if(t!=='light'){r.classList.add('dark');}}catch(e){r.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background'>
          Skip to content
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
