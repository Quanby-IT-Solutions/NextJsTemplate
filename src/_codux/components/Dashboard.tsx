// src/_codux/components/Dashboard.tsx
"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Roles from "@/app/utils/user-management/roles";

export interface DashboardProps {
  className?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ className = "" }) => {
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
  }, []);

  return (
    <div className={`flex-1 w-full flex flex-col gap-12 ${className}`}>
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        {user && (
          <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        )}
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4">Roles</h2>
        <Roles />
      </div>
    </div>
  );
};
