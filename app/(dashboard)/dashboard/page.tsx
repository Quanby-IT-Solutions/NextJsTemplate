import { AuthLayout } from "@/src/full-page/auth/auth-layout";
import { DashboardContent } from "@/src/full-page/auth/home/dashboard-content";

export default function DashboardPage() {
  return (
    <AuthLayout>
      <DashboardContent />
    </AuthLayout>
  );
}
