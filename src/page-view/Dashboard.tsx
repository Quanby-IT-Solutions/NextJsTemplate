"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InfoIcon } from "lucide-react";
import { UserGreeting } from "../components/user-greeting/UserGreeting";
import { Button } from "../components/button/Button";
import { signOutAction } from "@/src/utils/actions";
import { createClient } from "@/src/utils/supabase/client";
import {
  LayoutDashboard,
  User,
  Settings,
  ShieldAlert,
  Eye,
  Edit,
  Users,
  Settings as AdminSettings,
} from "lucide-react";

import { DashboardLayout } from "../components/dashboard-layout/dashboard-layout";

export const Dashboard: React.FC = () => {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
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
  }, [router, supabase]);

  return (
    <DashboardLayout
      isAuthenticated={true}
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
          subLinks: [
            {
              label: "View Profile",
              href: "/profile/view",
              enabled: true,
              icon: <Eye size={20} />,
            },
            {
              label: "Edit Profile",
              href: "/profile/edit",
              enabled: true,
              icon: <Edit size={20} />,
            },
          ],
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
      <div className="flex-1 w-full flex flex-col gap-12">
        <div className="w-full">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
            <InfoIcon size="16" strokeWidth={2} />
            This is a protected page that you can only see as an authenticated user
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h2 className="font-bold text-2xl mb-4">
            Your user <UserGreeting email={user?.email || "No email"} /> details
          </h2>
          <form action={signOutAction}>
            <Button type="submit" variant={"outline"}>
              Sign out
            </Button>
          </form>
          {user && (
            <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
              {JSON.stringify(user, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};
