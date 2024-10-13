"use client";

import DashboardHeader from "@/src/components/auth-layout/dashboard-header";
import ProfileForm from "@/src/components/profile/ProfileForm";

export const Profile: React.FC = () => {
  return (
    <>
      <DashboardHeader
        title="Profile"
      />
      <ProfileForm />
    </>
  );
};
