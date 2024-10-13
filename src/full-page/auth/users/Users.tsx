"use client";

import DashboardHeader from "@/src/components/auth-layout/dashboard-header";
import UsersTable from "./UserTable";

export const Users: React.FC = () => {
    return (
        <>
            <DashboardHeader
                title="Users"
            />
            <UsersTable />
        </>
    );
};
