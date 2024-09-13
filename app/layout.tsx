import "./globals.css";

import Link from "next/link";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "@/src/_codux/boards/theme-switcher/ThemeSwitcher";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Application Title Here",
  description: "Meow Meow World",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>Home</Link>
                    <div className="flex items-center gap-2"></div>
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
              <ThemeSwitcher />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
