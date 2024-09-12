import { signUpAction } from "@/app/actions";
import Link from "next/link";
import { SmtpMessage } from "../../../src/_codux/boards/smtp-message/smtp-message";
import {
  Message,
  FormMessage,
} from "@/src/_codux/boards/form-message/form-message";
import { Input } from "@/src/_codux/boards/input/input";
import { SubmitButton } from "@/src/_codux/boards/submit-button/submit-button";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input name="email" placeholder="you@example.com" required />
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
