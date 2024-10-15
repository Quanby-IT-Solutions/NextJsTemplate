"use client"

import AuthLayout from "@/src/components/auth-layout/auth-layout";
import { Payment } from "@/src/full-page/auth/payment/Payment";

export default function DummyPaymentPage() {
  return (
    <AuthLayout>
      <Payment />
    </AuthLayout>
  );
}