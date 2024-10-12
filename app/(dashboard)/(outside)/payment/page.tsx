import { AuthLayout } from "@/src/components/auth-layout/AuthLayout";
import PaymentTable from "@/src/full-page/auth/payment/PaymentTable";

export default async function SamplePage() {

  return (
    <AuthLayout>
      <PaymentTable />
    </AuthLayout>
  );
}
