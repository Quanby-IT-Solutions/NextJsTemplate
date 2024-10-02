"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/src/utils/supabase/client";
import {
  LayoutDashboard,
  User,
  Settings,
  ShieldAlert,
  Users,
  Settings as AdminSettings,
  ListOrdered,
} from "lucide-react";
import { DashboardLayout } from "../../components/dashboard-layout/dashboard-layout";
import { UserProvider, useUser } from "@/src/utils/user/user-context";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayoutContent: React.FC<AuthLayoutProps> = ({ children }) => {
  const { user, setUser } = useUser();
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/sign-in");
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [router, supabase, setUser]);

  return (
    <DashboardLayout
      isAuthenticated={!!user}
      websiteName=""
      sidebarLinks={[
        {
          label: "Dashboard",
          href: "/dashboard",
          enabled: true,
          icon: <LayoutDashboard size={20} />,
        },
        {
          label: "Profile",
          href: "/profile",
          enabled: true,
          icon: <User size={20} />,
        },
        {
          label: "Sample Data",
          href: "/sample-data",
          enabled: true,
          icon: <ListOrdered size={20} />,
        },
        {
          label: "Settings",
          href: "/settings",
          enabled: true,
          icon: <Settings size={20} />,
        },
        {
          label: "Admin Panel",
          enabled: true,
          icon: <ShieldAlert size={20} />,
          subLinks: [
            {
              label: "User Management",
              href: "/admin/users",
              enabled: true,
              icon: <Users size={20} />,
            },
            {
              label: "Site Settings",
              href: "/admin/settings",
              enabled: false,
              icon: <AdminSettings size={20} />,
            },
          ],
        },
      ]}
    >
      {children}
    </DashboardLayout>
  );
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <UserProvider>
      <AuthLayoutContent>
        <main className="flex flex-col rounded-none">{children}</main>
      </AuthLayoutContent>
    </UserProvider>
  );
};
