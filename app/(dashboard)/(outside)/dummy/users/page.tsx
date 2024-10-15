import AuthLayout from "@/src/components/auth-layout/auth-layout";
import { DummyUsers } from "@/src/full-page/auth/users/dummy/DummyUsers";

export default function DummyUsersPage() {
  return (
    <AuthLayout>
      <DummyUsers />
    </AuthLayout>
  );
}
