import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/components/auth-layout/AuthLayout";
import { DummyUsers } from "@/src/full-page/auth/users/dummy/DummyUsers";

export default function DummyCoursePage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLayout>
      <DummyUsers />
    </AuthLayout>
  );
}
