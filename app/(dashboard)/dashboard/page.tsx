import { AuthLayout } from "@/src/components/auth-layout/AuthLayout";
import { DashboardContent } from "@/src/full-page/auth/home/DashboardContent";

export default function DashboardPage() {
  return (
    <AuthLayout>
      <DashboardContent />
    </AuthLayout>
  );
}
