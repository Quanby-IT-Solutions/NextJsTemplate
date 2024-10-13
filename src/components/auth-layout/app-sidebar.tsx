import {
  Atom,
  Eclipse,
  Frame,
  History,
  Home,
  LifeBuoy,
  Map,
  PieChart,
  Rabbit,
  Send,
  Settings2,
  SquareTerminal,
  Star,
  Package
} from "lucide-react"

import { NavMain } from "@/src/components/auth-layout/nav-main"
import { NavProjects } from "@/src/components/auth-layout/nav-projects"
import { NavSecondary } from "@/src/components/auth-layout/nav-secondary"
import { NavUser } from "@/src/components/auth-layout/nav-user"
import { TeamSwitcher } from "@/src/components/auth-layout/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "../ui/sidebar"
import { useUser } from "@/src/utils/user/user-context"
import { NavUserSkeleton } from "./nav-user-skeleton"
import { useEffect, useState } from "react"
const data = {
  teams: [
    {
      name: "Mar Inc",
      logo: Atom,
      plan: "Enterprise",
    },
    {
      name: "Mar Corp.",
      logo: Eclipse,
      plan: "Startup",
    },
    {
      name: "Evil Mar.",
      logo: Rabbit,
      plan: "Free",
    },
  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/img/company.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Dummy",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Users",
          url: "/dummy/users",
          icon: History,
          description: "View your users",
        },
        {
          title: "Courses",
          url: "/dummy/courses",
          icon: Star,
          description: "Browse your courses",
        },
        {
          title: "Payment",
          url: "/dummy/payment",
          icon: Package,
          description: "Configure your payment",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  searchResults: [
    {
      title: "Routing Fundamentals",
      teaser:
        "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.",
      url: "#",
    },
    {
      title: "Layouts and Templates",
      teaser:
        "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.",
      url: "#",
    },
    {
      title: "Data Fetching, Caching, and Revalidating",
      teaser:
        "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.",
      url: "#",
    },
    {
      title: "Server and Client Composition Patterns",
      teaser:
        "When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ",
      url: "#",
    },
    {
      title: "Server Actions and Mutations",
      teaser:
        "Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.",
      url: "#",
    },
  ],
}

export function AppSidebar() {
  const { user, profile } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!user || !profile) {
        setLoading(false);
        setError(true);
      }
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timeout);
  }, [user, profile]);

  useEffect(() => {
    if (user && profile) {
      setLoading(false);
      setError(false);
    }
  }, [user, profile]);

  // Prepare user data for NavUser component
  const userData = user && profile ? {
    name: profile.first_name || user.email || 'User',
    email: user.email || '',
    avatar: profile.avatar_url || '/img/company.png',
  } : null;

  const renderUserSection = () => {
    if (loading) {
      return <NavUserSkeleton />;
    }
    if (error) {
      return (
        <div className="text-sm text-red-500 p-2">
          Failed to load user data. Please refresh the page.
        </div>
      );
    }
    return userData ? <NavUser user={userData} /> : null;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} searchResults={data.searchResults} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Projects</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        {renderUserSection()}
      </SidebarFooter>
    </Sidebar>
  )
}