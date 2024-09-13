import {
  Message,
  FormMessage,
} from "@/src/components/form-message/FormMessage";
import { Input } from "@/src/components/input/Input";
import { SubmitButton } from "@/src/components/submit-button/SubmitButton";
import { signInAction } from "@/src/utils/actions";
import { Link } from "lucide-react";

export interface LoginProps {
  className?: string;
  searchParams: Message;
}

export const Login: React.FC<LoginProps> = ({
  className = "",
  searchParams,
}) => (
  <form className={`flex-1 flex flex-col min-w-64 ${className}`}>
    <h1 className="text-2xl font-medium">Sign in</h1>
    <p className="text-sm text-foreground">
      Don't have an account?{" "}
      <Link className="text-foreground font-medium underline" href="/sign-up">
        Sign up
      </Link>
    </p>
    <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <Input name="email" placeholder="you@example.com" required />
      <div className="flex justify-between items-center">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Link
          className="text-xs text-foreground underline"
          href="/forgot-password"
        >
          Forgot Password?
        </Link>
      </div>
      <Input
        type="password"
        name="password"
        placeholder="Your password"
        required
      />
      <SubmitButton pendingText="Signing In..." formAction={signInAction}>
        Sign in
      </SubmitButton>
      <FormMessage message={searchParams} />
    </div>
  </form>
);
