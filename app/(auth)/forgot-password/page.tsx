import { ForgotPassword } from "@/src/components/forgot-password/ForgotPassword";
import { Message } from "@/src/components/form-message/FormMessage";

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
