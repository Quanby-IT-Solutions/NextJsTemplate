import { ForgotPassword } from "@/src/components/forgot-password/forgot-password";
import { Message } from "@/src/components/form-message/form-message";

export default function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="">
      <ForgotPassword searchParams={searchParams} />
    </div>
  );
}
