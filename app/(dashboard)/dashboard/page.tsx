import { AuthLayout } from "@/src/page-view/auth-pages/auth-layout";
import { DashboardContent } from "@/src/page-view/auth-pages/dashboard";

export default function DashboardPage() {
  return (
    <AuthLayout>
      <DashboardContent />
    </AuthLayout>
  );
}
