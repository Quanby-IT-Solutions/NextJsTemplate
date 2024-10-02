import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/page-view/auth-pages/auth-layout";
import SampleDataManagement from "@/src/page-view/auth-pages/sample-data-management";

export default function SampleDataPage({
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
