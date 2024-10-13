import { Message } from "@/src/components/form-message/form-message";
import AuthLayout from "@/src/components/auth-layout/auth-layout";
import { DummyUsers } from "@/src/full-page/auth/users/dummy/DummyUsers";

export default function DummyUsersPage({
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
