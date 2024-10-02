"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/src/utils/supabase/client";
import {
  LayoutDashboard,
  User,
  Settings,
  ListOrdered,
  Book,
  ShieldCheck,
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
          label: "Books",
          href: "/books",
          enabled: true,
          icon: <Book size={20} />,
        },
        {
          label: "Sample",
          href: "/sample",
          enabled: true,
          icon: <ListOrdered size={20} />,
        },
        {
          label: "Settings",
          enabled: true,
          icon: <Settings size={20} />,
          subLinks: [
            {
              label: "Profile",
              href: "/profile",
              enabled: true,
              icon: <User size={20} />,
            },
            {
              label: "System",
              href: "/cms",
              enabled: true,
              icon: <ShieldCheck size={20} />,
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
