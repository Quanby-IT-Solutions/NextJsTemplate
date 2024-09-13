import { Signup } from "@/src/_codux/boards/signup/Signup";
import { Message } from "@/src/_codux/boards/form-message/FormMessage";

export default function SignUpPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <Signup searchParams={searchParams} />
    </div>
  );
}
