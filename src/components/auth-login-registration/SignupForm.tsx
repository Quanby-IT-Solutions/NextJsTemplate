"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { signUpAction } from "@/src/utils/actions";
import { Input } from "../input/Input";
import { SubmitButton } from "../submit-button/SubmitButton";
import { Message, FormMessage } from "../form-message/FormMessage";
import Link from "next/link";

export interface SignUpProps {
  className?: string;
  searchParams: Message;
}

const SignUpForm: React.FC<SignUpProps> = ({
  className = "",
  searchParams,
}) => {
  const router = useRouter();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Effect to handle redirection after a successful signup
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let navigationTimer: NodeJS.Timeout;

    if (isSignedUp) {
      // Countdown timer for redirection
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Redirecting to the dashboard after countdown
      navigationTimer = setTimeout(() => {
        router.replace("/dashboard");
      }, 5000);

      // Disable interaction during countdown
      document.body.style.pointerEvents = "none";
    }

    return () => {
      clearInterval(timer);
      clearTimeout(navigationTimer);
      document.body.style.pointerEvents = "auto";
    };
  }, [isSignedUp, router]);

  const handleSignUp = async (formData: FormData) => {
    const result = await signUpAction(formData);
    if (result && result.success) {
      setIsSignedUp(true);
    } else if (result && result.error) {
      setErrorMessage(result.error);
    }
  };

  // If signup is successful, show the countdown and redirection message
  if (isSignedUp) {
    return (
      <div
        className={`w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4 ${className}`}
      >
        <div className="text-center">
          <h2 className="text-xl font-medium mb-4">Sign up successful!</h2>
          <p>Redirecting to dashboard in {countdown} seconds...</p>
          <div className="mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  // The form for signing up
  return (
    <div className={className}>
      <form
        className="flex flex-col w-full max-w-md mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(new FormData(e.currentTarget));
        }}
      >
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Create your account
        </h1>
        <p className="text-sm text-foreground dark:text-neutral-200">
          Already have an account?{" "}
          <Link className="text-blue-600 font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>

        {errorMessage && (
          <p className="text-sm text-red-600 mt-4">{errorMessage}</p>
        )}

        <div className="flex flex-col gap-4 mt-8">
          {/* Full Name Field */}
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
          >
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            required
            className="py-3 pr-3 pl-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-zinc-100 dark:bg-zinc-900"
            aria-label="Full Name"
          />

          {/* Email Field */}
          <label
            htmlFor="email"
            className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="py-3 pr-3 pl-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-zinc-100 dark:bg-zinc-900"
            aria-label="Email"
          />

          {/* Password Field */}
          <label
            htmlFor="password"
            className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            minLength={6}
            required
            className="py-3 pr-3 pl-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-zinc-100 dark:bg-zinc-900"
            aria-label="Password"
          />

          {/* Confirm Password Field */}
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
          >
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            minLength={6}
            required
            className="py-3 pr-3 pl-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-zinc-100 dark:bg-zinc-900"
            aria-label="Confirm Password"
          />

          {/* Submit Button */}
          <SubmitButton formAction={handleSignUp} pendingText="Signing up...">
            Sign up
          </SubmitButton>
        </div>

        <FormMessage message={searchParams} />
      </form>
    </div>
  );
};

export default SignUpForm;
