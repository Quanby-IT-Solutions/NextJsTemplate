import { Message } from "@/src/_codux/boards/form-message/FormMessage";
import { ResetPassword } from "@/src/_codux/components/ResetPassword";

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
