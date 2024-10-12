"use client";

import { useUser } from "@/src/utils/user/user-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/tabs/Tabs";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import Analytics from "./Analytics";
import Notifications from "./Notifications";
import OverviewCardSection from "./OverviewCardSection";
import Reports from "./Reports";
export const DashboardContent: React.FC = () => {
  const { user, profile } = useUser();
  const userName = profile?.first_name || user?.email || "User";

  return (
    <>
      <DashboardHeader
        title="Dashboard"
        showGreeting={true}
        userName={userName}
      />

      <Tabs defaultValue="overview" className="mt-4 space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <OverviewCardSection />
        </TabsContent>

        <TabsContent value="analytics">
          <Analytics />
        </TabsContent>

        <TabsContent value="reports">
          <Reports />
        </TabsContent>

        <TabsContent value="notifications">
          <Notifications />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DashboardContent;
