"use client"

import { AuthLayout } from "@/src/components/auth-layout/AuthLayout";
import DashboardHeader from "@/src/components/dashboard/DashboardHeader";
import PaymentTable from "@/src/full-page/auth/payment/PaymentTable";

export default async function PaymentPage() {

  return (
    <AuthLayout>
      <DashboardHeader title="Payment" />
      <PaymentTable />
    </AuthLayout>
  );
}
