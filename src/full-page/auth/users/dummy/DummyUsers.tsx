"use client";

import DashboardHeader from "@/src/components/auth-layout/dashboard-header";
import DummyUserTable from "./DummyUserTable";

export const DummyUsers: React.FC = () => {
    return (
        <>
            <DashboardHeader
                title="Dummy Users"
            />
            <DummyUserTable />
        </>
    );
};
