import { Message } from "@/src/components/form-message/form-message";
import AuthLayout from "@/src/components/auth-layout/auth-layout";
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
