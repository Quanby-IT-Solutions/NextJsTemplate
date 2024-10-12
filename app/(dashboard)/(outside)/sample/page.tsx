import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/components/auth-layout/AuthLayout";
import SampleDataManagement from "@/src/full-page/auth/sample-data-management";

export default function SamplePage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLayout>
      <SampleDataManagement />
    </AuthLayout>
  );
}
