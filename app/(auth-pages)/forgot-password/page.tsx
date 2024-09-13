import { ForgotPassword } from "@/src/components/ForgotPassword";
import { Message } from "@/src/components/form-message/FormMessage";

export default function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <ForgotPassword searchParams={searchParams} />
    </div>
  );
}
