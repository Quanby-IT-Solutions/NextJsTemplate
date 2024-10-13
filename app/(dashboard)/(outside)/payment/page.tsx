"use client"

import { AuthLayout } from "@/src/components/auth-layout/AuthLayout";
import { Payment } from "@/src/full-page/auth/payment/Payment";

export default async function PaymentPage() {

  return (
    <AuthLayout>
      <Payment />
    </AuthLayout>
  );
}
