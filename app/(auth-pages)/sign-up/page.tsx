import { Signup } from "@/src/components/signup/Signup";
import { Message } from "@/src/components/form-message/FormMessage";

export default function SignUpPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="">
      <Signup searchParams={searchParams} />
    </div>
  );
}
