import React from "react";
import { forgotPasswordAction } from "@/app/actions";
import Link from "next/link";
import { SmtpMessage } from "../src/_codux/boards/smtp-message/SmtpMessage";
import {
  Message,
  FormMessage,
} from "@/src/_codux/boards/form-message/form-message";
import { Input } from "@/src/_codux/boards/input/Input";
import { SubmitButton } from "@/src/_codux/boards/submit-button/SubmitButton";

export interface ForgotPasswordProps {
  className?: string;
  searchParams: Message;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  className = "",
  searchParams,
}) => (
  <div className={className}>
    <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
      <div>
        <h1 className="text-2xl font-medium">Reset Password</h1>
        <p className="text-sm text-secondary-foreground">
          Already have an account?{" "}
          <Link className="text-primary underline" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input name="email" placeholder="you@example.com" required />
        <SubmitButton formAction={forgotPasswordAction}>
          Reset Password
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
    <SmtpMessage />
  </div>
);
