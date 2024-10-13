"use client";

import DashboardHeader from "@/src/components/auth-layout/dashboard-header";
import PaymentTable from "./PaymentTable";

export const Payment: React.FC = () => {
    return (
        <>
            <DashboardHeader
                title="Dummy Payment"
            />
            <PaymentTable />
        </>
    );
};
