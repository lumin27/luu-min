import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
export const metadata = {
  title: "Luu Min - Full Stack Web Developer",
  description: "Professional Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
