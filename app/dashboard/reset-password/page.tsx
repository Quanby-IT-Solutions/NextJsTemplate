import { Message } from "@/src/components/form-message/FormMessage";
import { ResetPassword } from "@/src/components/ResetPassword";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <ResetPassword className="my-custom-class" searchParams={searchParams} />
    </div>
  );
}
