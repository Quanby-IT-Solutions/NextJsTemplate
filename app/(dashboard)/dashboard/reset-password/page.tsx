import { Message } from "@/src/components/form-message/form-message";
import { ResetPassword } from "@/src/components/reset-password/ResetPassword";
import AuthLayout from "@/src/components/auth-layout/auth-layout";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLayout>
      <ResetPassword searchParams={searchParams} />
    </AuthLayout>
  );
}
