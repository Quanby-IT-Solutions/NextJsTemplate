import { resetPasswordAction } from "@/app/actions";
import {
  Message,
  FormMessage,
} from "@/src/_codux/boards/form-message/form-message";
import { Input } from "@/src/_codux/boards/input/input";
import { SubmitButton } from "@/src/_codux/boards/submit-button/submit-button";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-sm text-foreground/60">
        Please enter your new password below.
      </p>
      <label htmlFor="password" className="text-sm font-medium">
        New password
      </label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
      />
      <label htmlFor="confirmPassword" className="text-sm font-medium">
        Confirm password
      </label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
        Reset password
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
