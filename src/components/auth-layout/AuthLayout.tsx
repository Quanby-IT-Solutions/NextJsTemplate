"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/src/utils/supabase/client";
import {
  LayoutDashboard,
  User,
  Settings,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";
import { DashboardLayout } from "../dashboard/DashboardLayout";
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
          label: "Payment",
          href: "/payment",
          enabled: true,
          icon: <ShoppingBag size={20} />,
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
