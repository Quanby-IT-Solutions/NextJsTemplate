import { Message } from "@/src/components/form-message/form-message";
import AuthLayout from "@/src/components/auth-layout/auth-layout";
import { Users } from "@/src/full-page/auth/users/Users";

export default function UsersPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLayout>
      <Users />
    </AuthLayout>
  );
}
