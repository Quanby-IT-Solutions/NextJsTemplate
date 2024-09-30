import { ForgotPassword } from "@/src/components/ForgotPassword";
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
