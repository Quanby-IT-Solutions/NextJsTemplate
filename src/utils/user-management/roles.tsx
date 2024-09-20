// app/utils/user-management/roles.tsx
"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/src/utils/supabase/client";

export default function Roles() {
  const [roles, setRoles] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    async function fetchRoles() {
      const { data, error } = await supabase.from("roles").select();
      if (error) {
        console.error("Error fetching roles:", error);
      } else {
        setRoles(data);
      }
    }

    fetchRoles();
  }, []);

  if (!roles) return <div>Loading roles...</div>;

  return <pre>{JSON.stringify(roles, null, 2)}</pre>;
}
