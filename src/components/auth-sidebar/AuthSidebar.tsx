import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export interface SidebarLink {
  label: string;
  href?: string;
  enabled: boolean;
  subLinks?: SidebarLink[];
  icon?: JSX.Element;
}

export const AuthSidebar: React.FC<{
  links: SidebarLink[];
  isAuthenticated: boolean;
}> = ({ links, isAuthenticated }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubLinks, setOpenSubLinks] = useState<Record<string, boolean>>({});

  const handleToggle = (label: string) => {
    setOpenSubLinks((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const renderLinks = (links: SidebarLink[], nested = false) => (
    <nav className={`space-y-1 ${nested ? "pl-4 mt-1" : ""}`}>
      {links
        .filter((link) => link.enabled)
        .map((link) => {
          const hasSubLinks = link.subLinks && link.subLinks.length > 0;
          return (
            <div key={link.label}>
              <div
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 ${
                  hasSubLinks ? "pr-4" : ""
                }`}
                onClick={() => hasSubLinks && handleToggle(link.label)}
              >
                <div
                  className={`flex items-center ${isSidebarOpen ? "space-x-3" : "justify-center w-full"}`}
                >
                  <div className="text-primary">{link.icon}</div>
                  {isSidebarOpen &&
                    (link.href ? (
                      <a href={link.href} className="flex-1">
                        <span className="text-sm font-medium">
                          {link.label}
                        </span>
                      </a>
                    ) : (
                      <span className="text-sm font-medium">{link.label}</span>
                    ))}
                </div>
                {hasSubLinks &&
                  isSidebarOpen &&
                  (openSubLinks[link.label] ? (
                    <ChevronDown size={16} className="text-muted-foreground" />
                  ) : (
                    <ChevronRight size={16} className="text-muted-foreground" />
                  ))}
              </div>
              {hasSubLinks &&
                openSubLinks[link.label] &&
                isSidebarOpen &&
                renderLinks(link.subLinks ?? [], true)}
            </div>
          );
        })}
    </nav>
  );

  return (
    <div
      className={`h-screen transition-all duration-300 bg-background border-r border-border ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        {isSidebarOpen && <span className="text-lg font-bold">Logo</span>}
        <button
          className="p-2 text-primary hover:bg-accent rounded-md transition-colors duration-200"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isAuthenticated && (
        <div className="flex flex-col">{renderLinks(links)}</div>
      )}
    </div>
  );
};

export default AuthSidebar;
