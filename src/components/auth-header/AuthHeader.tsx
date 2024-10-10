import { cn } from "@/src/utils/cn";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";
import { Button } from "../button/Button";
import { signOutAction } from "@/src/utils/actions";

export interface AuthHeaderLink {
  label: string;
  href: string;
  enabled: boolean;
}

export interface AuthHeaderProps {
  className?: string;
  websiteName?: string;
  links?: AuthHeaderLink[];
  isAuthenticated: boolean;
  showLinks?: boolean;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({
  className = "",
  websiteName = "",
  links = [],
  isAuthenticated,
  showLinks = true,
}) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
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
        <form action={signOutAction}>
          <Button type="submit" variant="outline">
            Sign out
          </Button>
        </form>
      </div>
    </header>
  );
};
