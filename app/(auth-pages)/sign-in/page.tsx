import { Login } from "@/src/components/Login";
import { Message } from "@/src/components/form-message/FormMessage";

export default function SignInPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="container mx-auto">
      <Login searchParams={searchParams} />
    </div>
  );
}
