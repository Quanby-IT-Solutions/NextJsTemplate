"use client";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
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
