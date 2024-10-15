import AuthLayout from "@/src/components/auth-layout/auth-layout";
import { Users } from "@/src/full-page/auth/users/Users";

export default function UsersPage() {
  return (
    <AuthLayout>
      <Users />
    </AuthLayout>
  );
}
