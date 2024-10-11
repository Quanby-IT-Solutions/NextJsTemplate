import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/full-page/auth/auth-layout";
import { Profile } from "@/src/full-page/auth/profile/profile";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLayout>
      <Profile />
    </AuthLayout>
  );
}
