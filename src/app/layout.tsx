import "./globals.css";
import { Inter } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Luu Min - Full-Stack Developer & Product Builder",
  description:
    "Luu Min is a Full-Stack Developer & Product Builder who builds practical software products, from SaaS platforms like Schoolyn to mobile applications and custom business tools.",
};

// Runs before first paint so the stored (or default dark) theme never flashes light.
const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='light'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

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
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
