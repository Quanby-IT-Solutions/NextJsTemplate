"use client";

import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
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
