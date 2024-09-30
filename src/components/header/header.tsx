import React from "react";
import { cn } from "@/src/utils/cn";
import { AuthButtons } from "../auth-button/AuthButton";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";

export interface HeaderLink {
  label: string;
  href: string;
  enabled: boolean;
}

export interface HeaderProps {
  className?: string;
  websiteName: string;
  links?: HeaderLink[];
  isAuthenticated: boolean;
  showLinks?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  className = "",
  websiteName,
  links = [],
  isAuthenticated,
  showLinks = true,
}) => (
  <header
    className={cn(
      "flex justify-between items-center p-4 bg-background border-b border-border transition-all duration-200",
      className
    )}
  >
    <div className="text-lg font-bold">
      {websiteName && <span>{websiteName}</span>}
    </div>
    {showLinks && (
      <nav className="hidden md:flex space-x-4">
        {links
          .filter((link) => link.enabled)
          .map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
      </nav>
    )}
    <div className="flex items-center space-x-4">
      <ThemeSwitcher />
      {!isAuthenticated && <AuthButtons />}
    </div>
  </header>
);
