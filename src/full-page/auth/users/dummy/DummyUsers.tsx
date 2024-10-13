"use client";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
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
