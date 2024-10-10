import React, { ReactNode } from "react";
import { AuthSidebar, SidebarLink } from "../auth-sidebar/auth-sidebar";
import { AuthHeader } from "../auth-header/AuthHeader";

export interface DashboardLayoutProps {
  className?: string;
  isAuthenticated: boolean;
  sidebarLinks: SidebarLink[];
  websiteName: string;
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  className = "",
  isAuthenticated,
  sidebarLinks,
  websiteName,
  children,
}) => (
  <div className={`flex ${className}`}>
    <AuthSidebar links={sidebarLinks} isAuthenticated={isAuthenticated} />
    <div className="flex-1 flex flex-col">
      <AuthHeader
        websiteName={websiteName}
        isAuthenticated={isAuthenticated}
        showLinks={false}
      />
      <main className="flex-1 p-4 bg-background container mx-auto">
        {children}
      </main>
    </div>
  </div>
);
