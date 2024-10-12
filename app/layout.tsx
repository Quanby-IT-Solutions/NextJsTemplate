import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Mar Template",
  description: "Meow Meow World",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={` "scroll-smooth focus:scroll-auto" ${GeistSans.className}`} suppressHydrationWarning>
      <body className="bg-background text-foreground select-none">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
