"use client";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
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
