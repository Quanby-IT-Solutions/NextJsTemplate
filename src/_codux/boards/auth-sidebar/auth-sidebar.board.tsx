import React from "react";
import { createBoard } from "@wixc3/react-board";
import { AuthSidebar } from "../../../components/auth-sidebar/AuthSidebar";
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

export default createBoard({
  name: "ResponsiveAuthSidebar",
  Board: () => (
    <AuthSidebar
      links={[
        {
          label: "Dashboard",
          href: "/dashboard",
          enabled: true,
          icon: <LayoutDashboard size={20} />,
        },
        {
          label: "Profile",
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
      isAuthenticated={true}
    />
  ),
  isSnippet: true,
});
