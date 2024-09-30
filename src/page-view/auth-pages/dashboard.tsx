"use client";

import React from "react";
import { UserGreeting } from "@/src/components/user-greeting/UserGreeting";
import { useUser } from "@/src/utils/user/user-context";

export const DashboardContent: React.FC = () => {
    const { user } = useUser();

    return (
        <>
            {user && <UserGreeting email={user.email || "No email"} />}
        </>
    );
};