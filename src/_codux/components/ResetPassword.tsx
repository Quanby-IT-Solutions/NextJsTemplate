import {
  Message,
  FormMessage,
} from "@/src/_codux/boards/form-message/FormMessage";
import { Input } from "@/src/_codux/boards/input/Input";
import { SubmitButton } from "@/src/_codux/boards/submit-button/SubmitButton";
import { resetPasswordAction } from "@/src/utils/actions";

export interface ResetPasswordProps {
  className?: string;
  searchParams: Message;
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({
  className = "",
  searchParams,
}) => (
  <form
    className={`flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4 ${className}`}
  >
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
    <SubmitButton formAction={resetPasswordAction}>Reset password</SubmitButton>
    <FormMessage message={searchParams} />
  </form>
);
