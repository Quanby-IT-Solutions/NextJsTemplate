import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/components/auth-layout/AuthLayout";
import { Users } from "@/src/full-page/auth/dummy/users/Users";

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
