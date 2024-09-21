"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/src/components/input/Input";
import { SubmitButton } from "@/src/components/submit-button/SubmitButton";
import { signUpAction } from "@/src/utils/actions";

import {
  Message,
  FormMessage,
} from "@/src/components/form-message/FormMessage";
import Link from "next/link";

export interface SignupProps {
  className?: string;
  searchParams: Message;
}

export const Signup: React.FC<SignupProps> = ({
  className = "",
  searchParams,
}) => {
  const router = useRouter();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let navigationTimer: NodeJS.Timeout;

    if (isSignedUp) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      navigationTimer = setTimeout(() => {
        router.replace("/dashboard");
      }, 5000);

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

  return (
    <div className={className}>
      <form
        className="flex flex-col min-w-64 max-w-64 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(new FormData(e.currentTarget));
        }}
      >
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>

        {errorMessage && (
          <p className="text-sm text-red-600 mt-4">{errorMessage}</p>
        )}

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
          <SubmitButton formAction={handleSignUp} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
};
