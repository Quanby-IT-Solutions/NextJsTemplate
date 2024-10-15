import AuthLayout from "@/src/components/auth-layout/auth-layout";
import { DummyUsers } from "@/src/full-page/auth/users/dummy/DummyUsers";

export default function DummyCoursePage() {
  return (
    <AuthLayout>
      <DummyUsers />
    </AuthLayout>
  );
}
